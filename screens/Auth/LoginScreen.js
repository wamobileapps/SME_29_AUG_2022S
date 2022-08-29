import { StyleSheet, Text, View, SafeAreaView, ImageBackground, Image } from 'react-native'
import React from 'react'
import { Styles } from '../../comman/styles';
import images from '../../comman/images';
import { ScrollView } from 'react-native-gesture-handler';
import { Box, PaddingBox } from '../../comman/alignBox';

const LoginScreen = (props) => {
  return (
   <SafeAreaView style={Styles.container}>
      <ImageBackground 
        source={images.BACKGROUD}
        style={styles.imageBg}
        resizeMode="stretch"
      >
        <ScrollView contentContainerStyle={{alignItems:"center", justifyContent:"center"}}>
          <Image 
            source={images.LOGO}
            style={styles.imageLogo}
          />
          <Text style={Styles.text16B}>
              Welcome Back
          </Text>
          <PaddingBox style={5} />
          <Text style={Styles.text12L}>
            Please login to continue
          </Text>
          <Box>
            
          </Box>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  imageBg:{
    width:"100%",
    height:"100%",
    alignItems:"center", justifyContent:"center",
  },
  imageLogo:{
    width:100,
    height:100
  },
})