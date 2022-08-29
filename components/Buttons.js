import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { color } from '../comman/theme';
import Ionicons from "react-native-vector-icons/Ionicons";
import { VerticalBox } from '../comman/alignBox';
import { Styles } from '../comman/styles';

const Buttons = ({name, onPress,isTrue}) => {
  return (
    <TouchableOpacity style={isTrue?styles.button:styles.button1} onPress={()=>onPress()} >
        <VerticalBox style={5} />
        <Text style={[Styles.text14B,{color:color.white}]}>
            {name}
        </Text>
        <VerticalBox style={5} />
    </TouchableOpacity>
  )
}

export default Buttons

const styles = StyleSheet.create({
    button:{
        paddingHorizontal:20,
        height:40,
        backgroundColor:color.primary,
        alignItems:"center",justifyContent:"space-between",
        flexDirection:"row",
        borderRadius:5,

    },
    button1:{
      paddingHorizontal:20,
      height:40,
      backgroundColor:color.otpColor,
      alignItems:"center",justifyContent:"space-between",
      flexDirection:"row",
      borderRadius:5,

  }
})