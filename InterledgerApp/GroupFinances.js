import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import * as Progress from 'react-native-progress';

const GroupFinancePage = () => {
  // Mock data for expenses and contributions
  const expenses = [
    { name: 'DSTv Subscription', dueDate: '25th', amountDue: 30, amountFunded: 10 },
    { name: 'Old Mutual Insurance (Grandmother)', dueDate: '28th', amountDue: 50, amountFunded: 15 },
    { name: 'Electricity Bill', dueDate: '30th', amountDue: 20, amountFunded: 10 },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Group Finance Overview</Text>
      
      {expenses.map((expense, index) => {
        const progress = expense.amountFunded / expense.amountDue; // Calculate funding progress
        const remaining = expense.amountDue - expense.amountFunded; // Calculate remaining amount

        return (
          <View style={styles.section} key={index}>
            <Text style={styles.sectionTitle}>
              {expense.name}: Due on {expense.dueDate}
            </Text>
            <Text style={styles.item}>Amount Due: ${expense.amountDue}</Text>
            <Text style={styles.item}>Amount Funded: ${expense.amountFunded}</Text>
            <Text style={styles.item}>Remaining: ${remaining}</Text>

            {/* Progress Bar */}
            <Progress.Bar
              progress={progress}
              width={null}
              height={20}
              color={progress < 0.5 ? '#f39c12' : '#2ecc71'} // Yellow if < 50% funded, Green otherwise
              unfilledColor="#e74c3c"
              borderRadius={10}
              borderWidth={2}
              borderColor="#e0e0e0"
              style={styles.progressBar}
            />

            <Text style={styles.percentageText}>{(progress * 100).toFixed(0)}% Funded</Text>
          </View>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#4A90E2',
  },
  section: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  item: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
  progressBar: {
    marginTop: 10,
    marginBottom: 5,
  },
  percentageText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4A90E2',
    textAlign: 'right',
  },
});

export default GroupFinancePage;
