import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function PersonalAnalytics() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Personal Analytics</Text>
      </View>

      {/* Monthly Income & Expenses */}
      <View style={styles.infoBox}>
        <Text style={styles.infoText}>Monthly Income: R 15 000.00</Text>
        <Text style={styles.infoText}>Monthly Expenses: R 8 530.00</Text>
      </View>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Manage Investments</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Manage Expenses</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Track Income</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Credit Score</Text>
        </TouchableOpacity>
      </View>

      {/* Financial Advisor */}
      <TouchableOpacity style={styles.financialAdvisor}>
        <Text style={styles.financialAdvisorText}>Financial Advisor</Text>
      </TouchableOpacity>

      {/* Performance Section */}
      <View style={styles.performance}>
        <Text style={styles.performanceText}>Performance</Text>
        {/* Performance gauge can be added later */}
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <Text>🏠</Text>
        <Text>📊</Text>
        <Text>💼</Text>
        <Text>⚙️</Text>
        <Text>🔑</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
    paddingBottom: 20,
  },
  header: {
    backgroundColor: '#58C1A5',
    width: '90%',
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  infoBox: {
    width: '90%',
    paddingVertical: 20,
    backgroundColor: '#F4F4F4',
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  infoText: {
    fontSize: 16,
    marginVertical: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginBottom: 15,
  },
  button: {
    width: '45%',
    paddingVertical: 15,
    backgroundColor: '#F4F4F4',
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
  },
  financialAdvisor: {
    width: '90%',
    paddingVertical: 15,
    backgroundColor: '#D9D9D9',
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 30,
  },
  financialAdvisorText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  performance: {
    width: '90%',
    alignItems: 'center',
    marginBottom: 30,
  },
  performanceText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%',
    paddingVertical: 15,
    backgroundColor: '#F4F4F4',
    borderRadius: 10,
    position: 'absolute',
    bottom: 20,
  },
});
