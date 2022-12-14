import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { scale } from 'react-native-size-matters'
import { color } from '../comman/theme'
import { Styles } from '../comman/styles'

const ButtonFooter = ({name, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={{...Styles.text14MR,color:color.black}}>{name}</Text>
    </TouchableOpacity>
  )
}

export default ButtonFooter

const styles = StyleSheet.create({
    container:{
        width:"100%",
        height:scale(50),
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:color.green,
        marginBottom: 'auto'
    },
})