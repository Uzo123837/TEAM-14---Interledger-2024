import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/FontAwesome';

const MarketplacePage = ({ navigation }) => {
  const [selectedGoods, setSelectedGoods] = useState();
  const [selectedService, setSelectedService] = useState();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-left" size={20} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>MARKETPLACE</Text>
      </View>

      {/* Goods Dropdown */}
      <View style={styles.dropdownContainer}>
        <Text style={styles.label}>Goods:</Text>
        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={selectedGoods}
            onValueChange={(itemValue) => setSelectedGoods(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Select Category" value="" />
            <Picker.Item label="Electronics" value="electronics" />
            <Picker.Item label="Furniture" value="furniture" />
            <Picker.Item label="Clothing" value="clothing" />
          </Picker>
        </View>
      </View>

      {/* Services Dropdown */}
      <View style={styles.dropdownContainer}>
        <Text style={styles.label}>Services:</Text>
        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={selectedService}
            onValueChange={(itemValue) => setSelectedService(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Select Category" value="" />
            <Picker.Item label="Electrician" value="electrician" />
            <Picker.Item label="Plumber" value="plumber" />
            <Picker.Item label="Cleaner" value="cleaner" />
          </Picker>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#56B6B4',
    padding: 30, // Increased padding for longer header
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButton: {
    position: 'absolute',
    left: 20, // Back button on the left side of the header
  },
  headerText: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  dropdownContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  pickerWrapper: {
    backgroundColor: '#F0F0F0',
    borderRadius: 10,
    padding: 5,
    borderWidth: 1,
    borderColor: '#ccc', // Grey rectangle
  },
  picker: {
    height: 50,
    width: '100%',
  },
});

export default MarketplacePage;
