import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {color} from '../comman/theme';
import {Styles} from '../comman/styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Header = ({name, isleftIcon, navigation}) => {
  return (
    <View style={styles.container}>
      {isleftIcon && (
        <TouchableOpacity style={styles.icon} onPress={()=>{navigation.goBack()}}>
          <Ionicons name="arrow-back-outline" size={24} color="black" />
        </TouchableOpacity>
      )}
      <Text style={Styles.text16B}>{name}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  icon:{
    position:"absolute",
    left:10,
    padding:10,
  },
  container: {
    height: 50,
    backgroundColor: color.white,
    elevation: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyles: {
    width: '100%',
    height: 50,
  },
});
