import { StyleSheet, Text, View } from 'react-native'
import React,{useEffect, useState} from 'react'
import { Styles } from '../../comman/styles'
import { color } from '../../comman/theme'
import { Center } from '../../comman/alignBox'

const HomeScreen = (props) => {


  const [data, setdata] = useState({})


  useEffect(() => {
    console.log(props.route.params);
    setdata(props.route.params)
  }, [])
  
  return (
    <View style={styles.container}>
      <View style={styles.data}>
        <Center>

      <Text style={Styles.text16B}>Welcome</Text>
        </Center>
        
        <Text style={[Styles.text16B,{paddingVertical:3}]}>
        Doctor Name:  <Text style={{color:"#00000060"}}>
        {data?.idToken?.payload.name}
        </Text>
        </Text>
        <Text style={[Styles.text16B,{paddingVertical:3}]}>
        Mobile: <Text style={{color:"#00000060"}}>{data?.idToken?.payload.phone_number}</Text>
        </Text>
      </View>
      
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        justifyContent:"center",
        flex:1,
        backgroundColor:color.white
    },
    data:{
      elevation:3,
      width:"80%",
      backgroundColor:"#fff",
      borderRadius:20,
      padding:20,
    },
})