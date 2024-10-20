import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // For icons
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

const BusinessEntryDB = () => {
  const navigation = useNavigation(); // Hook to get navigation object
  const [name, setName] = useState('');
  const [numberOfItems, setNumberOfItems] = useState('');
  const [purchaseAmount, setPurchaseAmount] = useState('');
  const [sellingAmount, setSellingAmount] = useState('');
  const [imageUri, setImageUri] = useState(null); // For the optional image

  const addItemToDatabase = () => {
    // Logic for adding data to the database
    console.log({
      name,
      numberOfItems,
      purchaseAmount,
      sellingAmount,
      imageUri,
    });

    // After adding item, navigate to the Stock screen
    navigation.navigate('Stock');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>Enter items</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter name of item"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <Text style={styles.label}>Enter number of items</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Number of items"
        value={numberOfItems}
        onChangeText={(text) => setNumberOfItems(text)}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Enter purchase amount</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter purchase amount"
        value={purchaseAmount}
        onChangeText={(text) => setPurchaseAmount(text)}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Enter selling amount</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter selling amount"
        value={sellingAmount}
        onChangeText={(text) => setSellingAmount(text)}
        keyboardType="numeric"
      />

      {/* Optional image picker */}
      <TouchableOpacity style={styles.imagePicker}>
        <Icon name="add-circle-outline" size={40} color="#4F4F4F" />
        <Text style={styles.imageText}>Add image of product (Optional)</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.addButton} onPress={addItemToDatabase}>
        <Text style={styles.addButtonText}>Add to database</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#F5F5F5',
  },
  label: {
    marginTop: 20,
    marginBottom: 8,
    fontSize: 16,
    fontWeight: '500',
  },
  input: {
    backgroundColor: '#EFEFEF',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 12,
  },
  imagePicker: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
  },
  imageText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#4F4F4F',
  },
  addButton: {
    backgroundColor: '#2ABF9E',
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 20,
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default BusinessEntryDB;