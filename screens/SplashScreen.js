import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import { Styles } from '../comman/styles';

const SplashScreen = props => {

  
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
