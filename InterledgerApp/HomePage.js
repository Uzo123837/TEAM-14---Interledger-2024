import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

// Get the device's width for layout purposes
const { width } = Dimensions.get('window');

/**
 * HomePage Component:
 * Displays personal finances, group finances, and send/receive functionality.
 */
const HomePage = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState('PersonalFinance'); // Tracks the active tab in the menu

  // Navigation handlers
  const handleSendReceiveClick = () => {
    navigation.navigate('SendReceivePage');
  };

  const handlePersonalFinanceClick = () => {
    setActiveTab('PersonalFinance');
  };

  const handleGroupFinanceClick = () => {
    setActiveTab('GroupFinance');
  };

  // Dummy content for group and personal finances
  const personalFinances = [
    { name: 'Total Balance', value: '$1,200' },
    { name: 'Recent Transactions', value: 'See details...' },
  ];

  const groupFinances = [
    { name: 'Family Account', value: '$800' },
    { name: 'Shared Goals', value: 'Save for House' },
  ];

  return (
    <View style={styles.container}>
      {/* Header: Wallet and Notifications Icons */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconContainer}>
          <Ionicons name="notifications-outline" size={30} color="#ffffff" />
        </TouchableOpacity>
        <Image source={require('./assets/wakanda-logo.png')} style={styles.logo} />
        <TouchableOpacity style={styles.iconContainer}>
          <Ionicons name="wallet-outline" size={30} color="#ffffff" />
        </TouchableOpacity>
      </View>

      {/* Main Content: Personal or Group Finances */}
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.tabMenu}>
          <TouchableOpacity
            style={[styles.tabButton, activeTab === 'PersonalFinance' && styles.activeTabButton]}
            onPress={handlePersonalFinanceClick}
          >
            <Ionicons name="person-outline" size={24} color={activeTab === 'PersonalFinance' ? '#4A90E2' : '#999'} />
            <Text style={styles.tabText}>Personal</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tabButton, activeTab === 'GroupFinance' && styles.activeTabButton]}
            onPress={handleGroupFinanceClick}
          >
            <Ionicons name="people-outline" size={24} color={activeTab === 'GroupFinance' ? '#4A90E2' : '#999'} />
            <Text style={styles.tabText}>Group</Text>
          </TouchableOpacity>
        </View>

        {/* Finances Section */}
        <View style={styles.financesContainer}>
          {activeTab === 'PersonalFinance' ? (
            <>
              <Text style={styles.sectionTitle}>Personal Finances</Text>
              {personalFinances.map((item, index) => (
                <View key={index} style={styles.financeItem}>
                  <Text style={styles.financeName}>{item.name}</Text>
                  <Text style={styles.financeValue}>{item.value}</Text>
                </View>
              ))}
            </>
          ) : (
            <>
              <Text style={styles.sectionTitle}>Group Finances</Text>
              {groupFinances.map((item, index) => (
                <View key={index} style={styles.financeItem}>
                  <Text style={styles.financeName}>{item.name}</Text>
                  <Text style={styles.financeValue}>{item.value}</Text>
                </View>
              ))}
            </>
          )}
        </View>

        {/* Send/Receive Button */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.sendReceiveButton} onPress={handleSendReceiveClick}>
            <Ionicons name="send-outline" size={24} color="#ffffff" />
            <Text style={styles.buttonText}>Send & Receive</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Footer Navigation */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerIcon}>
          <Ionicons name="home-outline" size={30} color={activeTab === 'PersonalFinance' ? "#4A90E2" : "#999"} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerIcon} onPress={handleSendReceiveClick}>
          <Ionicons name="swap-horizontal-outline" size={30} color="#999" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerIcon}>
          <Ionicons name="people-outline" size={30} color={activeTab === 'GroupFinance' ? "#4A90E2" : "#999"} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerIcon}>
          <Ionicons name="calendar-outline" size={30} color="#999" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerIcon}>
          <Ionicons name="person-outline" size={30} color="#999" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

/**
 * Styles for the HomePage component.
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F6FF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#4A90E2',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  logo: {
    width: 120,
    height: 50,
    resizeMode: 'contain',
  },
  iconContainer: {
    padding: 10,
  },
  contentContainer: {
    paddingBottom: 80,
  },
  tabMenu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 20,
  },
  tabButton: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 10,
  },
  activeTabButton: {
    borderBottomWidth: 2,
    borderBottomColor: '#4A90E2',
  },
  tabText: {
    fontSize: 14,
    color: '#333',
    marginTop: 5,
  },
  financesContainer: {
    backgroundColor: '#fff',
    marginHorizontal: 15,
    padding: 15,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  financeItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  financeName: {
    fontSize: 16,
    color: '#4A90E2',
  },
  financeValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  buttonContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  sendReceiveButton: {
    backgroundColor: '#4A90E2',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 30,
    width: width * 0.7,
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    marginLeft: 10,
    fontSize: 18,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#E5E5E5',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  footerIcon: {
    paddingHorizontal: 10,
  },
});

export default HomePage;
