import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Using FontAwesome icons as an example
import BottomNavBar from './BottomNavBar';

const ProfilePage = ({ navigation }) => { // Added navigation prop here
  return (
    <View style={styles.container}>

      {/* Menu Items (Centered) */}
      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuItem}>
          <Icon name="user" size={24} color="white" style={styles.icon} />
          <Text style={styles.menuText}>My Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Icon name="exchange" size={24} color="white" style={styles.icon} />
          <Text style={styles.menuText}>Switch Profiles</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Icon name="cog" size={24} color="white" style={styles.icon} />
          <Text style={styles.menuText}>Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Icon name="power-off" size={24} color="white" style={styles.icon} />
          <Text style={styles.menuText}>LogOff</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Navigation */}
      <BottomNavBar navigation={navigation} />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between', // Ensures the bottom nav stays at the bottom
    paddingTop: 40,
  },

  menuContainer: {
    flex: 1,
    justifyContent: 'flex-start', // Aligns the menu items vertically at the top
    alignItems: 'center', // Centers the menu items horizontally
  },

  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#56B6B4', // Updated background color
    padding: 20,
    marginBottom: 15,
    borderRadius: 10,
    width: '80%', // Adjust the width to be 80% of the screen
  },
  icon: {
    marginRight: 10,
  },
  menuText: {
    fontSize: 18,
    color: 'black',
  },
  
  navItem: {
    padding: 10,
  },
});

export default ProfilePage;
