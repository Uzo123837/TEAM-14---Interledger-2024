const http = require('http');
const { createAuthenticatedClient, isPendingGrant } = require("@interledger/open-payments");
const { createIncomingPayment } = require('@interledger/open-payments/dist/client/incoming-payment');

const port = 3001;

// Replace with your actual values
const WALLET_ADDRESS = "https://ilp.interledger-test.dev/day-to-day";
const PRIVATE_KEY = "LS0tLS1CRUdJTiBQUklWQVRFIEtFWS0tLS0tCk1DNENBUUF3QlFZREsyVndCQ0lFSUZnYUhQcFBtSThTUDRiV1F3RGhkMU5kb3ZqQWppTHIvb3RzcjhGRHN1Sm0KLS0tLS1FTkQgUFJJVkFURSBLRVktLS0tLQ==";
const KEY_ID = "bfd5ff04-33bb-41bf-808d-81142218ffc5";

// Function to create an authenticated client
async function getAuthenticatedClient() {
    const client = await createAuthenticatedClient({
        walletAddressUrl: WALLET_ADDRESS,
        privateKey: Buffer.from(PRIVATE_KEY, 'base64'),
        keyId: KEY_ID,
        validateResponses: false,
    });
    return client;
}

// Request an incoming payment grant
async function requestIncomingPaymentGrant(client, walletAddress) {
    try {
        const grant = await client.grant.request(
            { url: walletAddress.authServer }, 
            {
                client: WALLET_ADDRESS,
                access_token: {
                    access: [
                        {
                            type: "incoming-payment",
                            actions: ["create","complete"]
                        }
                    ]
                }
            }
        );

        if (isPendingGrant(grant)) {
            throw new Error("Expected non-interactive grant");
        }

        return grant;
    } catch (error) {
        console.error("Failed to request incoming payment grant:", error);
        throw error;
    }
}

// Request a quote grant
async function requestQuoteGrant(client, walletAddress) {
    try {
        const grant = await client.grant.request(
            { url: walletAddress.authServer },
            {
                access_token: {
                    access: [
                        {
                            type: "quote",
                            actions: ["create", "read", "read-all"]
                        }
                    ]
                }
            }
        );

        if (isPendingGrant(grant)) {
            throw new Error("Expected non-interactive grant");
        }

        return grant;
    } catch (error) {
        console.error("Failed to request quote grant:", error);
        throw error;
    }
}

// Request an outgoing payment grant (interactive)
// Request an outgoing payment grant (interactive)
async function requestOutgoingPaymentGrant(client, walletAddress, quote) {
    try {
        const grant = await client.grant.request(
            { url: walletAddress.authServer },
            {
                access_token: {
                    access: [
                        {
                            type: "outgoing-payment", // Ensure the type is correct
                            actions: ["read", "create"],
                            limits: {
                                debitAmount: {
                                    assetCode: quote.debitAmount.assetCode, // Ensure assetCode is included
                                    assetScale: quote.debitAmount.assetScale, // Ensure assetScale is included
                                    value: quote.debitAmount.value, // The expected value from the quote
                                },
                                receiveAmount: {
                                    assetCode: quote.receiveAmount.assetCode, // Ensure to specify receive amount
                                    assetScale: quote.receiveAmount.assetScale, // Ensure to specify asset scale
                                    value: quote.receiveAmount.value, // The expected value for receiving
                                },
                            },
                            identifier: walletAddress.id, // Ensure to use the correct identifier
                        }
                    ]
                },
                interact: {
                    start: ["redirect"],
                    finish: {
                        method: "redirect",
                        uri: "http://localhost:3001", // Redirect URL
                        nonce: "nonce123", // Use a proper nonce for interaction
                    }
                }
            }
        );

        if (!isPendingGrant(grant)) {
            throw new Error("Expected interactive grant");
        }

        // Retrieve the interact_ref from the grant response
        const interact_ref = grant.interact.ref;
        console.log("Interact reference (interact_ref):", interact_ref);

        // Return both the grant and interact_ref
        return {
            grant,
            interact_ref
        };
    } catch (error) {
        console.error("Failed to request outgoing payment grant:", error);
        throw error;
    }
}


// Get wallet address information
async function getWalletAddressInfo(client, walletAddress) {
    if (walletAddress.startsWith("$")) {
        walletAddress = walletAddress.replace("$", "https://");
    }

    try {
        new URL(walletAddress);
    } catch (error) {
        throw new Error("Invalid wallet address URL");
    }

    return await client.walletAddress.get({ url: walletAddress });
}

// Create the HTTP server
const server = http.createServer(async (req, res) => {
    console.log('Received request:', req.url); // Log the request URL

    try {
        const client = await getAuthenticatedClient();
        const walletAddressDetails = await getWalletAddressInfo(client, WALLET_ADDRESS);
        const receiverURL = "https://ilp.interledger-test.dev/wiseman"; // Replace with your actual domain
        const receivingWalletAddress = await client.walletAddress.get({
            url: receiverURL,
        });

        // Step 1: Request incoming payment grant
        const incomingPaymentGrant = await requestIncomingPaymentGrant(client, walletAddressDetails);
        console.log("INCOMING_PAYMENT_ACCESS_TOKEN =", incomingPaymentGrant.access_token.value);

        // Step 2: Create the incoming payment
        const incomingPayment = await client.incomingPayment.create(
            {
                url: receivingWalletAddress.resourceServer,
                accessToken: incomingPaymentGrant.access_token.value,
            },
            {
                walletAddress: receivingWalletAddress.id,
                incomingAmount: {
                    assetCode: receivingWalletAddress.assetCode,
                    assetScale: receivingWalletAddress.assetScale,
                    value: "1000", // Specify the amount you expect to receive
                },
            }
        );

        console.log("\nStep 2: created incoming payment on receiving wallet address", incomingPayment);

        // Step 3: Request quote grant
        const quoteGrant = await requestQuoteGrant(client, walletAddressDetails);
        console.log("QUOTE_ACCESS_TOKEN =", quoteGrant.access_token.value);

        // Step 4: Create a quote
        const quote = await client.quote.create(
            {
                url: walletAddressDetails.resourceServer,
                accessToken: quoteGrant.access_token.value,
            },
            {
                walletAddress: walletAddressDetails.id,
                receiver: incomingPayment.id,
                method: "ilp",
            }
        );

        console.log("\nStep 4: got quote on sending wallet address", quote);

        // Step 5: Request outgoing payment grant (interactive flow)
        const outgoingPaymentGrantResult = await requestOutgoingPaymentGrant(client, walletAddressDetails, quote);
        const outgoingPaymentGrant = outgoingPaymentGrantResult.grant;
        const interact_ref = outgoingPaymentGrantResult.interact_ref; // Retrieve the interact_ref

        console.log("Please interact at the following URL:", outgoingPaymentGrant.interact.redirect);
        console.log("Interact reference (interact_ref):", interact_ref);

        // Prepare the JSON response
        const responseData = {
            message: 'Grants requested successfully.',
            incomingPaymentGrant: incomingPaymentGrant.access_token.value,
            quoteGrant: quoteGrant.access_token.value,
            quote: quote,
            outgoingPaymentGrantURL: outgoingPaymentGrant.interact.redirect,
            interact_ref: interact_ref // Include interact_ref in the response
        };

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify(responseData)); // Send JSON response
    } catch (error) {
        console.error("Error:", error);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify({ message: error.message || 'Internal Server Error' }));
    } finally {
        res.end();
    }
});


// Start the server
server.listen(port, (error) => {
    if (error) {
        console.log("Something went wrong ", error);
    } else {
        console.log("Server is listening on port " + port);
    }
});
