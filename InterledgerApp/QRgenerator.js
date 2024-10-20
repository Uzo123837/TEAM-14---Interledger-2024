import React, { useEffect, useState } from 'react';
import { View, Text, Button, TextInput, Alert } from 'react-native';

const QRGenerator = () => {
  const [walletId, setWalletId] = useState('');
  const [authServer, setAuthServer] = useState('');
  const [outgoingGrantUri, setOutgoingGrantUri] = useState('');
  const [accessToken, setAccessToken] = useState('');
  const [quoteId, setQuoteId] = useState('');
  const [paymentData, setPaymentData] = useState(null);
  const [error, setError] = useState(null);

  const initiatePayment = async () => {
    try {
      const response = await fetch('http://192.168.152.51:3001/api/pay', { // Update the IP if needed
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sendingWalletAddress: {
            id: walletId,
            authServer: authServer,
            outgoingPaymentGrant: {
              continue: {
                uri: outgoingGrantUri,
                access_token: {
                  value: accessToken,
                },
              },
            },
            quote: {
              id: quoteId,
            },
          },
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setPaymentData(data);
      console.log('Payment Data:', data);
      Alert.alert('Payment Successful', JSON.stringify(data));
    } catch (err) {
      console.error('Error:', err);
      setError(err.message || 'An error occurred while processing the payment.');
      Alert.alert('Error', err.message || 'An error occurred while processing the payment.');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Wallet ID:</Text>
      <TextInput
        value={walletId}
        onChangeText={setWalletId}
        placeholder="Enter your wallet address ID"
        style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
      />
      <Text>Auth Server:</Text>
      <TextInput
        value={authServer}
        onChangeText={setAuthServer}
        placeholder="Enter your auth server URL"
        style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
      />
      <Text>Outgoing Payment Grant URI:</Text>
      <TextInput
        value={outgoingGrantUri}
        onChangeText={setOutgoingGrantUri}
        placeholder="Enter your outgoing payment grant URI"
        style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
      />
      <Text>Access Token:</Text>
      <TextInput
        value={accessToken}
        onChangeText={setAccessToken}
        placeholder="Enter your access token"
        style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
      />
      <Text>Quote ID:</Text>
      <TextInput
        value={quoteId}
        onChangeText={setQuoteId}
        placeholder="Enter your quote ID"
        style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
      />
      <Button title="Initiate Payment" onPress={initiatePayment} />
      {error && <Text style={{ color: 'red' }}>Error: {error}</Text>}
      {paymentData && (
        <Text>Payment Successful: {JSON.stringify(paymentData)}</Text>
      )}
    </View>
  );
};

export default QRGenerator;


