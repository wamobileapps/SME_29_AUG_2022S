import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {color} from '../comman/theme';
import {Styles} from '../comman/styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Header = ({name, isleftIcon, navigation}) => {
  return (
    <View style={styles.container}>
      {isleftIcon && (
        <TouchableOpacity style={styles.icon} onPress={()=>{navigation.goBack()}}>
          {/* <Ionicons name="arrow-back-outline" size={24} color="black" /> */}
          <MaterialIcons name="keyboard-arrow-left" size={30} color={color.arrow} />
        </TouchableOpacity>
      )}
      <Text style={Styles.text18SOB}>{name}</Text>
    </View>
  );
};



export default Header;

const styles = StyleSheet.create({
  icon:{
    position:"absolute",
    left:0,
    padding:10,
  },
  container: {
    height: 50,
    backgroundColor: color.white,
    elevation:5,
    width:"100%",
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyles: {
    width: '100%',
    height: 50,
  },
});
