import {StyleSheet, Text, View, SafeAreaView, } from 'react-native';
import React,{useEffect} from 'react';
import { Styles } from '../comman/styles';

const SplashScreen = props => {
    useEffect(() => {
     props.navigation.navigate("MyTabs");

    }, [])
    
  
  return (
    <SafeAreaView style={Styles.container}>
      <Text>SplashScreen</Text>
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
    container:{
   
    },
});
