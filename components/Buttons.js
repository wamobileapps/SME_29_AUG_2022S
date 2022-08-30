import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { color } from '../comman/theme';
import Ionicons from "react-native-vector-icons/Ionicons";
import { VerticalBox } from '../comman/alignBox';
import { Styles } from '../comman/styles';
import { scale } from 'react-native-size-matters';
import { widthPercentageToDP as wp} from 'react-native-responsive-screen';

const Buttons = ({name, onPress,isTrue}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={()=>onPress()} >
        <VerticalBox style={5} />
        <Text style={[Styles.text16M,{color:color.white}]}>
            {name}
        </Text>
        <VerticalBox style={5} />
    </TouchableOpacity>
  )
}

export default Buttons

const styles = StyleSheet.create({
    button:{
        paddingHorizontal:scale(20),
        height:scale(50),
        width:wp(90),
        backgroundColor:color.primary,
        alignItems:"center",justifyContent:"space-between",
        flexDirection:"row",
        borderRadius:scale(5),
    },
})