import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { color } from '../comman/theme';
import Ionicons from "react-native-vector-icons/Ionicons";
import { VerticalBox } from '../comman/alignBox';
import { Styles } from '../comman/styles';
import { scale } from 'react-native-size-matters';
import { widthPercentageToDP as wp} from 'react-native-responsive-screen';

const Button = ({name, onPress,isTrue, style}) => {
  return (
    <TouchableOpacity style={{...styles.button,...style}} onPress={()=>onPress()} >
        <Text style={[Styles.text14MR,{color:color.white,}]}>
            {name}
        </Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    button:{
        height:scale(40),
        width:wp(25),
        backgroundColor:color.primary,
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"row",
        borderRadius:scale(5),
    },
})