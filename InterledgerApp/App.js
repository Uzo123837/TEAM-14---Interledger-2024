import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomePage from './WelcomePage'; 
import HomePage from './HomePage';
import HomePageBusiness from './HomePageBusiness';
import BusinessEntryDB from './BusinessEntryDB';
import Stock from './Stock'
import Pay from './Pay';
import QRGenerator from './QRgenerator';

import { name as appName } from './app.json';

import React from 'react';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WelcomePage">
        
        <Stack.Screen
          name="WelcomePage"
          component={WelcomePage}
          options={{ headerShown: false }} 
        />
         <Stack.Screen
          name="HomePage"
          component={HomePage}
          
        />
        <Stack.Screen
          name="HomePageBusiness"
          component={HomePageBusiness }
          
        />
         <Stack.Screen 
         name="BusinessEntryDB" 
         component={BusinessEntryDB}
          />
      
      <Stack.Screen 
         name="Stock" 
         component={Stock} 
         />
       <Stack.Screen 
         name="Pay" 
         component={Pay} 
         />
         <Stack.Screen 
         name="QRgenerator" 
         component={QRGenerator} 
         />
         
      </Stack.Navigator>
    </NavigationContainer>
  );
}