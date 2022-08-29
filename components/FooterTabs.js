import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Styles } from '../comman/styles'
import { color } from '../comman/theme'

const FooterTabs = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.innerBox} onPress={()=>navigation.navigate("TabScreenA")}>
            <Text style={[Styles.text12L,{color:color.white, textAlign:"center"}]}>
            Füge neuen {`\n`} Eintrag hinzu
            </Text>
      </TouchableOpacity>
      <View style={styles.line} />
      <TouchableOpacity style={styles.innerBox} onPress={()=>navigation.navigate("DiaryCard")}>
      <Text style={[Styles.text12L,{color:color.white, textAlign:"center"}]}>
            Übersicht
            </Text>
      </TouchableOpacity>
      <View style={styles.line} />

      <TouchableOpacity style={styles.innerBox} onPress={()=>navigation.navigate("ChartData")}>
      <Text style={[Styles.text12L,{color:color.white, textAlign:"center"}]}>
            Entwicklung
            </Text>
      </TouchableOpacity>
      <View style={styles.line} />
      <TouchableOpacity style={styles.innerBox} onPress={()=>navigation.navigate("TabsScreenD")}>
      <Text style={[Styles.text12L,{color:color.white, textAlign:"center"}]} >
            Analysen
            </Text>
      </TouchableOpacity>
      <View style={styles.line} />

      <TouchableOpacity style={styles.innerBox} onPress={()=>navigation.navigate("TabScreenE")}>
      <Text style={[Styles.text12L,{color:color.white, textAlign:"center"}]} >
            Einstellungen
            </Text>
      </TouchableOpacity>
    </View>
  )
}

export default FooterTabs

const styles = StyleSheet.create({
    line:{
        backgroundColor:color.white,
        width:1,
        height:"60%",
    },
    container:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        height:60,
        backgroundColor:color.primary,
        borderTopLeftRadius:15,
        borderTopRightRadius:15,
    },
    innerBox:{
        width:"20%",
        height:"100%",
        textAlign:"center",
        alignItems:"center",
        justifyContent:"center",

    },
})