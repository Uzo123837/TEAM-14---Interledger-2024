import * as React from "react";
import { StyleSheet, View, Text, Pressable, ImageBackground, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontSize } from "./GlobalStyles";
import HomePage from './HomePage';
import HomePageBusiness from './HomePageBusiness';

const WelcomePage = () => {
  const navigation = useNavigation();

  const handleBusinessPress = () => {
    navigation.navigate("HomePageBusiness");
  };

  const handlePersonalPress = () => {
    navigation.navigate("HomePage"); 
  };

  return (
    <ImageBackground
      style={styles.background}
      resizeMode="cover"
      source={require("./assets/wakanda.jpeg")}
    >
      <View style={styles.overlay} />

      <View style={styles.content}>
        <Text style={styles.welcomeText}>Welcome to Wakanda Wallet!</Text>
        <Text style={styles.subtitle}>Your Gateway to Africa's Hidden Markets</Text>

        <View style={styles.buttonContainer}>
          <Pressable style={styles.button} onPress={handleBusinessPress}>
            <Text style={styles.buttonText}>Business use</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={handlePersonalPress}>
            <Text style={styles.buttonText}>Personal use</Text>
          </Pressable>
        </View>
      </View>

     
      <View style={styles.poweredByContainer}>
        <Text style={styles.poweredByText}>Powered by</Text>
        <View style={styles.logoContainer}>
          <Image
            source={require("./assets/interledger.jpeg")} 
            style={styles.logo}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  content: {
    zIndex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    flex: 1,
  },
  welcomeText: {
    fontSize: FontSize.size_6xl,
    color: "#FFFFFF",
    fontWeight: "700",
    marginBottom: 20,
    textAlign: "center",
  },
  subtitle: {
    fontSize: FontSize.size_lg,
    color: "#FFFFFF",
    marginBottom: 40,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  button: {
    backgroundColor: "#10294f",
    borderRadius: Border.br_3xs,
    paddingVertical: 15,
    paddingHorizontal: 50,
    alignItems: "center",
    marginVertical: 10,
    width: "80%",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: FontSize.size_md,
    fontWeight: "500",
  },
  poweredByContainer: {
    position: "absolute",
    bottom: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  poweredByText: {
    color: "#FFFFFF",
    fontSize: FontSize.size_sm,
    marginRight: 10,
  },
  logoContainer: {
    width: 40, // Adjust width and height to prevent clipping
    height: 40,
    borderRadius: 20, // Make the container round
    overflow: "hidden", // Ensures the image is not cut off
    justifyContent: "center", // Center the logo inside the container
    alignItems: "center", // Center the logo inside the container
  },
  logo: {
    width: "100%", // Set to fill the container
    height: "100%", // Set to fill the container
    borderRadius: 20, // Make the logo round
    resizeMode: "contain", // Ensures the logo scales nicely within the container
  },
});

export default WelcomePage;