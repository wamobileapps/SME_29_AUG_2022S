import React, {useState, useEffect} from 'react';
import {Button, View, Text, StyleSheet, Image, Platform} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/Auth/LoginScreen';
import navigation from '../comman/navigation';

const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();


   // activeTintColor: color.primary,
        // inactiveTintColor: color.black,



export const AppNavigator = props => {
  
  return (
    <NavigationContainer>
     <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={navigation.LoginScreen}
        >
       <Stack.Screen name={navigation.SplashScreen} component={SplashScreen} />
       <Stack.Screen name={navigation.LoginScreen} component={LoginScreen} />
       {/* <Stack.Screen name="TabsScreenD" component={TabsScreenD} /> */}
       {/* <Stack.Screen name="TabsScreenD" component={TabsScreenD} /> */}
    

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;