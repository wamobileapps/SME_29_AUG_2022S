import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  Image,
} from 'react-native';
import React,{useState, useEffect} from 'react';
import {Styles} from '../../comman/styles';
import images from '../../comman/images';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Box, Center, PaddingBox, VerticalBox} from '../../comman/alignBox';
import TextInputView from '../../components/TextInputView';
import {scale} from 'react-native-size-matters';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Button from '../../components/Button';
import Buttons from '../../components/Buttons';
import { color } from '../../comman/theme';

const LoginScreen = props => {

  const [checkbox, setcheckbox] = useState(false);
  return (
    <View style={Styles.container}>
      <ImageBackground
        source={images.BACKGROUD}
        style={styles.imageBg}
        resizeMode="stretch"
      >
        <ScrollView
          contentContainerStyle={{
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <PaddingBox style={hp(15)} />
          <Image source={images.LOGO} style={styles.imageLogo} />
          <Text style={Styles.text16B}>Welcome Back</Text>
          <PaddingBox style={scale(5)} />
          <Text style={Styles.text12L}>Please login to continue</Text>
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
              heading="Password"
              secureTextEntry={true}
              rightIcon={true}
              placeholder={'Enter your password'}
              style={{}}
              onChangeText={()=>{}}
            />
            <PaddingBox style={scale(20)} />
            <Buttons name="Login" />
            <PaddingBox style={scale(20)} />
            <View style={[Styles.alignbetween,{width:wp(90)}]}>
              <View style={Styles.row}>
                {checkbox?
                <Ionicons name="checkbox" size={24} color={color.primary} />
                :
                <View style={styles.checkbox} />
                }
                <VerticalBox style={scale(5)} />
                <Text>Remember me</Text>
              </View>
              <View style={Styles.row}>
                <Text>Forgot Password?</Text>
              </View>
            </View>
            <PaddingBox style={scale(20)} />
            <View style={styles.signUp}>
                <Image 
                  source={images.LIFTLINE}
                />
                <Text style={{paddingHorizontal:10}}>
                  Or Sign up With
                </Text>
                <Image 
                  source={images.RIGHTLINE}
                />
            </View>
            <PaddingBox style={scale(20)} />
            <View style={[Styles.alignEvenly,{width:wp(40)}]}>
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
              <Text>
                Don’t have an Account?  
                <Text style={{color:color.primary}}>
               {` `}  Sign UP
                </Text>
              </Text>
            </Center>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;

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
  signUp: {
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
  },
  imageLogo: {
    width: 100,
    height: 100,
  },
});
