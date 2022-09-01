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
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Styles} from '../../comman/styles';
import images from '../../comman/images';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Box, Center, PaddingBox, VerticalBox} from '../../comman/alignBox';
import TextInputView from '../../components/TextInputView';
import {scale} from 'react-native-size-matters';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Button from '../../components/Button';
import Buttons from '../../components/Buttons';
import {color} from '../../comman/theme';
import navigation from '../../comman/navigation';
import UserPool from '../../congnito/UserPool';
import {CognitoUser, AuthenticationDetails} from 'amazon-cognito-identity-js';
import Loader from '../../comman/Loader';
var AmazonCognitoIdentity = require('amazon-cognito-identity-js');

const RagistrationScreen = props => {
  const [checkbox, setcheckbox] = useState(false);
  const [mobile, setmobile] = useState('');
  const [password, setpassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');
  const [doctor_name, setdoctor_name] = useState('');
  const [loading, setloading] = useState(false);
  const [isPassword, setisPassword] = useState(true);
  const [isCPassword, setisCPassword] = useState(true);


  const onValidateForm = () => {
    if (mobile.trim() == '') {
      alert('Please enter Phone number');
      return false;
    } else if (doctor_name.trim() == '') {
      alert('Please enter doctor name');
      return false;
    } else if (password.trim() == '') {
      alert('Please enter Phone number');
      return false;
    } else if (password != confirmPassword) {
      alert('Password and confirm password not match.');
      return false;
    } else {
      return true;
    }
  };

  const onRegisterWithAWS = async () => {
    let isValid = onValidateForm();
    if (!isValid) {
      return;
    }
    setloading(true)
    var attributeList = [];
    var dataEmail = {
      Name: 'name',
      Value: doctor_name,
    };
    var attributeEmail = new AmazonCognitoIdentity.CognitoUserAttribute(
      dataEmail,
    );
    attributeList.push(attributeEmail);
    UserPool.signUp(mobile, password, attributeList, null, (err, data) => {
      console.log(err, data);
      if (err != null) {
        if (err.code == 'UsernameExistsException') {
          alert('User alrady exists');
        } else if (err.code == 'InvalidPasswordException') {
          alert('Please enter valid password');
          console.log(err.message);
        }
      } else {
        alert('Registration Successfully. Please wait for admin approval.');
        props.navigation.goBack()
      }
      setloading(false)
    });
  };

  return (
    <View style={Styles.container}>
      <StatusBar backgroundColor={color.white} barStyle="dark-content" />
      <Loader loading={loading} />
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
          <TouchableOpacity
            style={styles.arrow}
            onPress={() => props.navigation.goBack()}
          >
            <Ionicons
              name="arrow-back-circle-sharp"
              size={40}
              color={color.primary}
            />
          </TouchableOpacity>
          <PaddingBox style={hp(Platform.OS == 'ios' ? 15 : 10)} />
          <Text style={Styles.text30B}>SIGN UP</Text>
          <PaddingBox style={scale(20)} />
          <TextInputView
            leftIcon={images.PHONE}
            heading="Phone number"
            value={mobile}
            keyboardType="phone-pad"
            onChangeText={t => setmobile(t)}
            placeholder={'Your phone number (+91XXXXXXXX)'}
          />
          <PaddingBox style={scale(20)} />
          <TextInputView
            leftIcon={images.DOCUSER}
            heading="Doctor Name"
            value={doctor_name}
            onChangeText={t => setdoctor_name(t)}
            placeholder={'Your doctor name'}
          />
          <PaddingBox style={scale(20)} />
          <TextInputView
            leftIcon={images.LOCK}
            heading="Password"
            secureTextEntry={isPassword}
            rightIcon={true}
            onChangeSecureText={()=>setisPassword(!isPassword)}
            placeholder={'Enter your password'}
            value={password}
            onChangeText={t => setpassword(t)}
          />
          <PaddingBox style={scale(20)} />
          <TextInputView
            leftIcon={images.LOCK}
            heading="Confirm-Password"
            secureTextEntry={isCPassword}
            rightIcon={true}
            onChangeSecureText={()=>setisCPassword(!isCPassword)}
            placeholder={'Enter your password'}
            value={confirmPassword}
            onChangeText={t => setconfirmPassword(t)}
          />
          <PaddingBox style={scale(20)} />
          <Buttons
            name="Register"
            onPress={() => {
              onRegisterWithAWS();
            }}
          />
          <PaddingBox style={scale(30)} />
          <View style={styles.signUp}>
            <Image source={images.LIFTLINE} />
            <Text
              style={{
                paddingHorizontal: 10,
                color: '#555252',
                ...Styles.text14M,
              }}
            >
              Or Sign up With
            </Text>
            <Image source={images.RIGHTLINE} />
          </View>
          <PaddingBox style={scale(20)} />
          <View style={[Styles.alignEvenly, {width: wp(60)}]}>
            <Image source={images.GOOGLE} />
            <Image source={images.FB} />
            <Image source={images.TW} />
          </View>
          <PaddingBox style={scale(20)} />
          <Center>
            <Text style={Styles.text14R}>
              Already have an Account?
              <Text
                style={{color: color.primary}}
                onPress={() =>
                  props.navigation.navigate(navigation.LoginScreen)
                }
              >
                {` `} Login here
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
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: color.border,
    borderRadius: 5,
  },
  checkboxContainer: {
    width: 25,
    height: 25,
  },
  signUp: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  arrow: {
    marginTop: Platform.OS == 'ios' ? scale(50) : scale(0),
    position: 'absolute',
    top: 10,
    left: 10,
  },
  imageLogo: {
    width: 100,
    height: 100,
  },
});
