import React, {useState, useEffect} from 'react';
import {Button, View, Text, StyleSheet, Image, Platform} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/Auth/LoginScreen';
import navigation from '../comman/navigation';
import RagistrationScreen from '../screens/Auth/RagistrationScreen';
import HomeScreen from '../screens/DashboardScreens/HomeScreen';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {PaddingBox} from '../comman/alignBox';
import {Styles} from '../comman/styles';
import {scale} from 'react-native-size-matters';
import {color} from '../comman/theme';
// import Foundation from "react-native-vector-icons/Foundation";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import DiseasesScreen from '../screens/DashboardScreens/DiseasesScreen';
import MedicineDetails from '../screens/DashboardScreens/MedicineDetails';
import Prescription from '../screens/DashboardScreens/Prescription';
import PrescriptionDetails from '../screens/DashboardScreens/PrescriptionDetails';
import QrImageModal from '../modals/QrImageModal';

// const Tabs = createMaterialTopTabNavigator();

// function MyTabs() {
//   return (
//     <Tabs.Navigator
//       initialRouteName="Feed"
//       screenOptions={{
//         tabBarActiveTintColor: '#e91e63',
//         tabBarLabelStyle: { fontSize: 12 },
//         tabBarStyle: { backgroundColor: 'powderblue' },
//       }}
//     >
//       <Tabs.Screen
//         name="Feed"
//         component={hoem}
//         options={{ tabBarLabel: 'Home' }}
//       />
//       <Tabs.Screen
//         name="Notifications"
//         component={Notifications}
//         options={{ tabBarLabel: 'Updates' }}
//       />
//       <Tabs.Screen
//         name="Profile"
//         component={Profile}
//         options={{ tabBarLabel: 'Profile' }}
//       />
//     </Tabs.Navigator>
//   );
// }

function BottomTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarHideOnKeyboard:true,
        tabBarActiveTintColor: color.primary,
        tabBarStyle: {
          paddingHorizontal: scale(30),
          height: Platform.OS == 'ios' ? 90 : 55,
        },
       
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <View style={styles.tabStyle}>
              <Foundation name="home" color={color} size={size} />
              <PaddingBox style={2} />
              <Text style={[Styles.text10M, {color: color, fontSize: 12}]}>
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Diseases"
        component={DiseasesScreen}
        options={{
          tabBarLabel: 'Diseases',
          tabBarIcon: ({color, size}) => (
            <View style={styles.tabStyle}>
              <Feather name="calendar" color={color} size={size} />
              <PaddingBox style={2} />
              <Text style={[Styles.text10M, {color: color, fontSize: 12}]}>
                Diseases
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Inbox"
        component={DiseasesScreen}
        options={{
          tabBarLabel: 'Inbox',
          tabBarIcon: ({color, size}) => (
            <View style={styles.tabStyle}>
              <MaterialCommunityIcons
                name="message-processing-outline"
                color={color}
                size={size}
              />

              <PaddingBox style={2} />
              <Text style={[Styles.text10M, {color: color, fontSize: 12}]}>
                Inbox
              </Text>
            </View>
          ),
          tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={DiseasesScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({color, size}) => (
            <View style={styles.tabStyle}>
              <Ionicons name="settings-outline" color={color} size={size} />

              <PaddingBox style={2} />
              <Text style={[Styles.text10M, {color: color, fontSize: 12}]}>
                Settings
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  tabStyle: {
    alignItems:"center",
    justifyContent:"center",
  },
});

export const AppNavigator = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={navigation.LoginScreen}
      >
        <Stack.Screen name={navigation.LoginScreen} component={LoginScreen} />
        <Stack.Screen name={navigation.SplashScreen} component={SplashScreen} />
        <Stack.Screen name={navigation.MedicineDetails} component={MedicineDetails} />
        <Stack.Screen
          name={navigation.RagistrationScreen}
          component={RagistrationScreen}
        />
        {/* <Stack.Screen name={navigation.HomeScreen} component={HomeScreen} /> */}
        <Stack.Screen name={navigation.BottomTabs} component={BottomTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={navigation.HomeScreen}>

        <Stack.Screen name={navigation.HomeScreen} component={HomeScreen} />
        <Stack.Screen name={navigation.MedicineDetails} component={MedicineDetails} />
        <Stack.Screen name={navigation.Prescription} component={Prescription} />
        <Stack.Screen name={navigation.PrescriptionDetails} component={PrescriptionDetails}/>
        <Stack.Screen name={navigation.QrImageModal} component={QrImageModal}/>
        
        
      
    </Stack.Navigator>
  );
};



export default AppNavigator;
