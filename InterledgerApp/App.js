import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; // Import Bottom Tab Navigator
import Icon from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome Icons

import WelcomePage from './WelcomePage'; 
import ProfilePage from './ProfilePage'; 
import MarketplacePage from './MarketplacePage'; // Import MarketplacePage


import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';


AppRegistry.registerComponent(appName, () => App);

// Create Stack and Tab Navigators
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Define the Tab Navigator (Bottom Navigation Bar)
function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Profile') {
            iconName = 'user';
          } else if (route.name === 'Marketplace') {
            iconName = 'shopping-bag';
          } 

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'black',
        inactiveTintColor: 'gray',
        style: { paddingBottom: 10, paddingTop: 10, height: 60 },
      }}
    >
      
      <Tab.Screen name="Marketplace" component={MarketplacePage} />
      <Tab.Screen name="Profile" component={ProfilePage} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WelcomePage">
        {/* Stack screen for Welcome Page */}
        <Stack.Screen
          name="WelcomePage"
          component={WelcomePage}
          options={{ headerShown: false }} 
        />

        {/* Stack screen with the Bottom Navigation */}
        <Stack.Screen
          name="MainTabs" // This will be your Bottom Tab Navigator
          component={BottomTabs}
          options={{ headerShown: false }} // Hide the header for BottomTabs
        />
        <Stack.Screen
          name="ProfilePage"
          component={ProfilePage}
          options={{ title: 'My Profile' }} // Custom title for ProfilePage
        />
        <Stack.Screen
          name="MarketplacePage"
          component={MarketplacePage}
          options={{ headerShown: false }} // Hide the header for BottomTabs
        />
        

        {/* You can still add more stack screens here */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
