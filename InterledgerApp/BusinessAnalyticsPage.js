import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';


const BusinessAnalyticsPage = () => {
  const handleBusinessInsights = () => {
    // Add sign-in logic here
    // For now, navigate to the Business Analytics Page
    navigation.navigate('BusinessInsights');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Business Analytics</Text>

      <View style={styles.analyticsContainer}>
        <Text style={styles.label}>Monthly Revenue:</Text>
        <Text style={styles.value}>R 85 000.00</Text>
        <Text style={styles.label}>Monthly Expenses:</Text>
        <Text style={styles.value}>R 22 000.00</Text>
      </View>

      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>BookingKeeping Assistance</Text>
      </Pressable>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Business Insight</Text>
      </Pressable>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Credit Score (Non-Traditional)</Text>
      </Pressable>

      <Text style={styles.advisoryText}>
        Our Non-Traditional Credit Score uses your business records and performance to calculate the likelihood of loan approval.
      </Text>
      
      <Pressable style={styles.advisorButton}>
        <Text style={styles.buttonText}>Business Mentor</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  analyticsContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
  },
  value: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
  advisorButton: {
    backgroundColor: '#28a745',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  advisoryText: {
    fontSize: 14,
    color: '#6c757d',
    marginTop: 20,
    textAlign: 'center',
  },
});

export default BusinessAnalyticsPage;
