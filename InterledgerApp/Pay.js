import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 



const Pay = () => {
  const navigation = useNavigation();
  const handleIconClick = () => {
    
  };
  return (
    <View style={styles.container}>
      {/* Display image */}
      <Image 
        source={require('./assets/wakanda.jpeg')}  // Replace with your image path
        style={styles.bannerImage}
      />

      {/* Grid of buttons */}
      <View style={styles.buttonGrid}>
        <TouchableOpacity style={styles.button}>
          <Image source={require('./assets/icons8-qrcode-50.png')} style={styles.icon} />
          <Text style={styles.buttonText}>Generate QR to Pay</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('QRgenerator')}>
          <Image source={require('./assets/icons8-qrcode-50.png')} style={styles.icon} />
          <Text style={styles.buttonText}>Generate QR to Receive</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Image source={require('./assets/icons8-qr-code-scan-48.png')} style={styles.icon} />
          <Text style={styles.buttonText}>Scan-to-pay</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Image source={require('./assets/icons8-qr-code-scan-48.png')} style={styles.icon} />
          <Text style={styles.buttonText}>Scan-to-receive</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Image source={require('./assets/icons8-avatar-24.png')} style={styles.icon} />
          <Text style={styles.buttonText}>Pay Beneficiary</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Image source={require('./assets/icons8-international-50.png')} style={styles.icon} />
          <Text style={styles.buttonText}>Cross-border Payment</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  bannerImage: {
    width: '100%',
    height: 200,  // Adjust height as per the design
    resizeMode: 'cover',
  },
  buttonGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  button: {
    width: '40%',
    alignItems: 'center',
    marginBottom: 20,
  },
  icon: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default Pay;
