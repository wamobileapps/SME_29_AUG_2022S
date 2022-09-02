import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Styles } from '../../comman/styles'

const DiseasesScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text style={Styles.text18M}>Coming soon</Text>
    </View>
  )
}

export default DiseasesScreen

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        justifyContent:"center",
        flex:1,
    },
})