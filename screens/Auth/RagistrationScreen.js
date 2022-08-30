import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  Image,
  TouchableOpacity,
  Platform,
  StatusBar,
  ScrollView
} from 'react-native';
import React,{useState, useEffect} from 'react';
import {Styles} from '../../comman/styles';
import images from '../../comman/images';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Box, Center, PaddingBox, VerticalBox} from '../../comman/alignBox';
import TextInputView from '../../components/TextInputView';
import {scale} from 'react-native-size-matters';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Button from '../../components/Button';
import Buttons from '../../components/Buttons';
import { color } from '../../comman/theme';
import navigation from '../../comman/navigation';

const RagistrationScreen = props => {
  const [checkbox, setcheckbox] = useState(false);
  return (
    <View style={Styles.container}>
      <StatusBar backgroundColor={color.white} barStyle="dark-content" />

      <ImageBackground
        source={images.BACKGROUD}
        style={styles.imageBg}
        resizeMode="stretch"
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <TouchableOpacity style={styles.arrow} onPress={()=>props.navigation.goBack()}>
            <Ionicons name="arrow-back-circle-sharp" size={40} color={color.primary} />
          </TouchableOpacity>
          <PaddingBox style={hp(Platform.OS == "ios"?15: 10)} />
          <Text style={Styles.text30B}>SIGN UP</Text>
            <PaddingBox style={scale(20)} />
            <TextInputView
              leftIcon={images.PHONE}
              heading="Phone number"
              placeholder={'Your phone number'}
              style={{}}
            />
             <PaddingBox style={scale(20)} />
            <TextInputView
              leftIcon={images.DOCUSER}
              heading="Doctor Name"
              placeholder={'Your doctor name'}
              style={{}}
            />
             <PaddingBox style={scale(20)} />
            <TextInputView
              leftIcon={images.LOCK}
              heading="Password"
              secureTextEntry={true}
              rightIcon={true}
              placeholder={'Enter your password'}
              style={{}}
              onChangeText={()=>{}}
            />
            <PaddingBox style={scale(20)} />
            <TextInputView
              leftIcon={images.LOCK}
              heading="Confirm-Password"
              secureTextEntry={true}
              rightIcon={true}
              placeholder={'Enter your password'}
              style={{}}
              onChangeText={()=>{}}
            />
            <PaddingBox style={scale(20)} />
            <Buttons name="Register" onPress={()=>{}} />
            <PaddingBox style={scale(30)} />
            <View style={styles.signUp}>
                <Image 
                  source={images.LIFTLINE}
                />
                <Text style={{paddingHorizontal: 10,color:"#555252",...Styles.text14M}}>
                  Or Sign up With
                </Text>
                <Image 
                  source={images.RIGHTLINE}
                />
            </View>
            <PaddingBox style={scale(20)} />
            <View style={[Styles.alignEvenly,{width:wp(60)}]}>
              <Image 
                source={images.GOOGLE}
              />
              <Image 
                source={images.FB}
              />
              <Image 
                source={images.TW}
              />
            </View>
            <PaddingBox style={scale(20)} />
            <Center>
            <Text style={Styles.text14R}>
              Already have an Account? 
                <Text style={{color:color.primary}} onPress={()=>      props.navigation.navigate(navigation.LoginScreen)}>
               {` `}  Login here
                </Text>
              </Text>
            </Center>
            <PaddingBox style={scale(20)} />
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default RagistrationScreen;

const styles = StyleSheet.create({
  imageBg: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkbox:{
    width:20,
    height:20,
    borderWidth:1,
    borderColor:color.border,
    borderRadius:5
  },
  checkboxContainer:{
    width:25,
    height:25,
  },
  signUp: {
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
  },
  arrow:{
    marginTop:Platform.OS=="ios" ? scale(50): scale(0),
    position:"absolute", 
    top:10,
    left:10
  },
  imageLogo: {
    width: 100,
    height: 100,
  },
});
