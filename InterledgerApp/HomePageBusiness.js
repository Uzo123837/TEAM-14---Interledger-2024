import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Card, ProgressBar } from 'react-native-paper'; // For Card and ProgressBar
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook

const HomePageBusiness = () => {
  const navigation = useNavigation(); // Hook to use navigation

  const handleWalletClick = (walletName) => {
    Alert.alert("Wallet Clicked", `You clicked on the ${walletName} wallet`);
  };

  const handleTrackMySpendClick = () => {
    Alert.alert("Track My Spend", "You clicked on Track My Spend");
  };

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerText}>WELCOME TO WAKANDA WALLET BUSINESS</Text>
      </View>

      {/* Navigation Buttons Section */}
      <View style={styles.navButtons}>
        <TouchableOpacity style={styles.navButton}>
          <Icon name="credit-card" size={24} color="black" />
          <Text style={styles.navButtonText}>Pay</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navButton}>
          <Icon name="swap-horizontal" size={24} color="black" />
          <Text style={styles.navButtonText}>Transfer</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navButton}>
          <Icon name="cash" size={24} color="black" />
          <Text style={styles.navButtonText}>Withdraw</Text>
        </TouchableOpacity>
      </View>

      {/* Scrollable Wallet Section */}
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.walletSection}>
          <TouchableOpacity style={styles.addWalletButton}>
            <Icon name="plus-circle-outline" size={24} color="black" />
            <Text style={styles.addWalletText}>Add Wallet</Text>
          </TouchableOpacity>

          {/* Existing Wallets */}
          <TouchableOpacity onPress={() => handleWalletClick("Wakanda Day-to-Day Wallet")}>
            <Card style={styles.walletCard}>
              <Text style={styles.walletName}>Business Wallet</Text>
              <Text style={styles.walletBalance}>Balance: R 5000</Text>
            </Card>
          </TouchableOpacity>

          {/* Temporary Button for BusinessEntryDB */}
          <TouchableOpacity
            style={styles.businessEntryButton}
            onPress={() => navigation.navigate('BusinessEntryDB')} // Navigate to BusinessEntryDB page
          >
            <Icon name="briefcase" size={24} color="black" />
            <Text style={styles.businessEntryText}>Go to Business Entry</Text>
          </TouchableOpacity>

          {/* Track Money Section */}
          <TouchableOpacity onPress={handleTrackMySpendClick}>
            <Card style={styles.trackMoneyCard}>
              <Text style={styles.trackMoneyHeader}>Track Business Spend</Text>

              {/* Money Out */}
              <View style={styles.moneyRow}>
                <Text style={styles.moneyLabel}>Money Out</Text>
                <Text style={styles.moneyValue}>R10000</Text>
              </View>
              <ProgressBar progress={1} color="red" style={styles.progressBar} />

              {/* Money In */}
              <View style={styles.moneyRow}>
                <Text style={styles.moneyLabel}>Money In</Text>
                <Text style={styles.moneyValue}>R15000</Text>
              </View>
              <ProgressBar progress={0.97} color="green" style={styles.progressBar} />

              {/* Budget */}
              <View style={styles.moneyRow}>
                <Text style={styles.moneyLabel}>Budget</Text>
                <Text style={styles.moneyValue}>R5000</Text>
              </View>
              <ProgressBar progress={0.1} color="blue" style={styles.progressBar} />
            </Card>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#56B6B4',
    padding: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  navButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: 'white',
    marginTop: -30,
    marginHorizontal: 10,
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  navButton: {
    alignItems: 'center',
  },
  navButtonText: {
    fontSize: 14,
    marginTop: 5,
  },
  scrollViewContent: {
    paddingBottom: 20,
  },
  walletSection: {
    padding: 20,
  },
  addWalletButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 3,
    marginBottom: 20,
  },
  addWalletText: {
    fontSize: 16,
    marginLeft: 10,
  },
  walletCard: {
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 15,
    elevation: 3,
  },
  walletName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  walletBalance: {
    fontSize: 14,
    marginTop: 5,
    color: 'gray',
  },
  businessEntryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 3,
    marginBottom: 20,
  },
  businessEntryText: {
    fontSize: 16,
    marginLeft: 10,
  },
  trackMoneyCard: {
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 15,
    elevation: 3,
  },
  trackMoneyHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  moneyRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  moneyLabel: {
    fontSize: 14,
  },
  moneyValue: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  progressBar: {
    height: 8,
    borderRadius: 5,
    marginBottom: 15,
  },
});

export default HomePageBusiness;