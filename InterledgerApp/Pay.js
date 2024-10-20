import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const placeholderImage = 'InterledgerApp\assets\icon.png'; // Placeholder image link

const Stock = () => {
  return (
    <View style={styles.container}>

      {/* Search Bar Section */}
      <View style={styles.searchSection}>
        <Icon name="magnify" size={24} color="gray" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search for items"
          placeholderTextColor="gray"
        />
      </View>

      {/* Items Grid */}
      <ScrollView contentContainerStyle={styles.grid}>
        {/* Item Card */}
        <View style={styles.itemCard}>
          <Image source={{ uri: placeholderImage }} style={styles.itemImage} />
          <Text style={styles.itemName}>Albany bread R20</Text>
          <TouchableOpacity style={styles.closeButton}>
            <Icon name="plus-circle" size={24} color="gray" />
          </TouchableOpacity>
        </View>

        <View style={styles.itemCard}>
          <Image source={{ uri: placeholderImage }} style={styles.itemImage} />
          <Text style={styles.itemName}>Milk R30</Text>
          <TouchableOpacity style={styles.closeButton}>
            <Icon name="plus-circle" size={24} color="gray" />
          </TouchableOpacity>
        </View>

        <View style={styles.itemCard}>
          <Image source={{ uri: placeholderImage }} style={styles.itemImage} />
          <Text style={styles.itemName}>Organic Eggs R40</Text>
          <TouchableOpacity style={styles.closeButton}>
            <Icon name="plus-circle" size={24} color="gray" />
          </TouchableOpacity>
        </View>

        <View style={styles.itemCard}>
          <Image source={{ uri: placeholderImage }} style={styles.itemImage} />
          <Text style={styles.itemName}>KitKat R15</Text>
          <TouchableOpacity style={styles.closeButton}>
            <Icon name="plus-circle" size={24} color="gray" />
          </TouchableOpacity>
        </View>

        <View style={styles.itemCard}>
          <Image source={{ uri: placeholderImage }} style={styles.itemImage} />
          <Text style={styles.itemName}>Lays R20</Text>
          <TouchableOpacity style={styles.closeButton}>
            <Icon name="plus-circle" size={24} color="gray" />
          </TouchableOpacity>
        </View>

        <View style={styles.itemCard}>
          <Image source={{ uri: placeholderImage }} style={styles.itemImage} />
          <Text style={styles.itemName}>Cadbury R25</Text>
          <TouchableOpacity style={styles.closeButton}>
            <Icon name="plus-circle" size={24} color="gray" />
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Add to Database Button */}
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>Add </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    elevation: 2,
    marginVertical: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  itemCard: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    elevation: 3,
    alignItems: 'center',
  },
  itemImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  itemName: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  addButton: {
    backgroundColor: '#56B6B4',
    borderRadius: 8,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 10,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Stock;

