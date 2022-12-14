import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  Image,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  Dimensions,
  ToastAndroid,
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
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

const height = Dimensions.get('screen').height;

const LoginScreen = props => {
  const [checkbox, setcheckbox] = useState(false);
  const [mobile, setmobile] = useState('');
  const [password, setpassword] = useState('');
  const [isEye, setisEye] = useState(true);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    onGetIniData();
    GoogleSignin.configure();
  }, []);

  const GooglesignOut = async () => {
    try {
      await GoogleSignin.signOut();
    } catch (error) {
      console.error(error);
    }
  };

  const onGetIniData = async () => {
    let data = await AsyncStorage.getItem('data');
    if (data != null) {
      let d = JSON.parse(data);
      setmobile(d.mobile);
      setpassword(d.password);
      setcheckbox(true);
    }
  };

  // const _signIn = async () => {
  //   try {
  //   await GoogleSignin.hasPlayServices();
  //   const userInfo = await GoogleSignin.signIn();
  //   if (userInfo) {
  //   const {accessToken} = await GoogleSignin.getTokens();

  // //   var myHeaders = new Headers();
  // // myHeaders.append("Content-Type", "application/json");
  // // Authorization: Bearer, $`accessToken`,

  // //   var requestOptions = {
  // //     method: 'GET',
  // //     headers: myHeaders,
  // //   };

  // //   const data = await fetch('https://people.googleapis.com/v1/people/${ userInfo.user.id }?personFields=genders,birthdays')
  // //       .then(response => response.json())
  // //     if (data.length != 0) {
  // //       dispatch({
  // //         type: ADD_PRESCRIPTION_SUCCESS,
  // //         payload: data,
  // //       });
  // //     } else {
  // //       dispatch({
  // //         type: ADD_PRESCRIPTION__FAIL,
  // //         payload: data,
  // //       });
  // //     }
    
    
    
    
  //   axios({
  //   method: 'GET',
  //   headers: {
  //   Authorization: Bearer ${accessToken},
  //   },
  //   url: https://people.googleapis.com/v1/people/${ userInfo.user.id }?personFields=genders,birthdays,
  //   })
  //   .then(function(response) {
  //   // handle success
  //   console.log(response);
  //   // console.log(response.data.birthdays[0].date);
  //   //console.log(response.data.genders[0].formattedValue);
  //   })
  //   .catch(function(error) {
  //   // handle error
  //   console.log(error);
  //   });
  //   }
  //   } catch (error) {
  //   switch (error.code) {
  //   case statusCodes.SIGN_IN_CANCELLED:
  //   // sign in was cancelled
  //   Alert.alert('cancelled');
  //   break;
  //   case statusCodes.IN_PROGRESS:
  //   // operation (eg. sign in) already in progress
  //   Alert.alert('in progress');
  //   break;
  //   case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
  //   // android only
  //   Alert.alert('play services not available or outdated');
  //   break;
  //   default:
  //   Alert.alert('Something went wrong', error.toString());
  //   }
  //   }
  //   };


  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      if(userInfo){
        const accessToken = await GoogleSignin.getTokens();
        console.log('token------>>>>>', accessToken);
      }
      console.log('testttt ---> ', userInfo)
    } catch (error) {
      console.log('testttt Error ---> ', error)
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  const onValidateForm = () => {
    if (mobile.trim() == '') {
      alert('Please enter phone number');
      return false;
    } else if (password.trim() == '') {
      alert('Please enter password');
      return false;
    } else {
      return true;
    }
  };

  const onLoginUserWithAWS = () => {
    let isValid = onValidateForm();
    if (!isValid) {
      return;
    }
    setloading(true);

    const user = new CognitoUser({
      Username: mobile,
      Pool: UserPool,
    });

    const authDetails = new AuthenticationDetails({
      Username: mobile,
      Password: password,
    });

    user.authenticateUser(authDetails, {
      onSuccess: result => {
        setloading(false);
        // console.log('onSuccess', result);
        // alert("Login Successfully.")
        //ToastAndroid.show("Login Successfully.", ToastAndroid.SHORT);
        if (checkbox) {
          let data = {
            mobile,
            password,
          };
          AsyncStorage.setItem('data', JSON.stringify(data));
        }
        props.navigation.navigate(navigation.BottomTabs, result);
      },
      onFailure: err => {
        console.log('====================================');
        console.log(err);
        console.log('====================================');
        if (err.code == 'UserNotConfirmedException') {
          alert('Please contact to Admin. User is not verifyed.');
        } else if (err.code == 'NotAuthorizedException') {
          alert('Please enter valid password.');
        } else {
          alert(err.message);
        }
        setloading(false);
      },
    });
  };

  return (
    <View style={Styles.container}>
      <StatusBar backgroundColor={color.white} barStyle="dark-content" />
      <Loader loading={loading} />
      <ImageBackground
        source={images.BACKGROUD}
        style={styles.imageBg}
        resizeMode="stretch">
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <PaddingBox style={hp(8)} />
          <Image source={images.LOGO} style={styles.imageLogo} />
          <PaddingBox style={scale(10)} />
          <Text style={Styles.text30B}>Welcome Back</Text>
          <PaddingBox style={scale(5)} />
          <Text style={[Styles.text14R, {color: color.greyLite}]}>
            Please login to continue
          </Text>
          <PaddingBox style={scale(20)} />
          <TextInputView
            leftIcon={images.PHONE}
            heading="Phone number"
            placeholder={'Your phone number'}
            keyboardType="phone-pad"
            value={mobile}
            onChangeText={t => setmobile(t)}
          />
          <PaddingBox style={scale(20)} />
          <TextInputView
            leftIcon={images.LOCK}
            heading="Password"
            secureTextEntry={isEye}
            rightIcon={true}
            onChangeSecureText={() => setisEye(!isEye)}
            placeholder={'Enter your password'}
            value={password}
            onChangeText={t => setpassword(t)}
          />
          <PaddingBox style={scale(20)} />
          <Buttons
            name="Login"
            onPress={
              () => {
                onLoginUserWithAWS();
              }
              // props.navigation.navigate(navigation.RagistrationScreen)
            }
          />
          <PaddingBox style={scale(20)} />
          <View style={[Styles.alignbetween, {width: wp(85)}]}>
            <View style={Styles.row}>
              <TouchableOpacity onPress={() => setcheckbox(!checkbox)}>
                {checkbox ? (
                  <MaterialIcons
                    name="check-box"
                    size={24}
                    color={color.primary}
                  />
                ) : (
                  <MaterialIcons
                    name="check-box-outline-blank"
                    size={24}
                    color={color.border}
                  />
                )}
              </TouchableOpacity>
              <VerticalBox style={scale(5)} />
              <Text style={Styles.text14R}>Remember me</Text>
            </View>
            <View style={Styles.row}>
              <Text style={Styles.text14R}>Forgot Password?</Text>
            </View>
          </View>
          <PaddingBox style={scale(20)} />
          <View style={styles.signUp}>
            <Image source={images.LIFTLINE} />
            <Text
              style={{
                paddingHorizontal: 10,
                color: '#555252',
                ...Styles.text14M,
              }}>
              Or Sign up With
            </Text>
            <Image source={images.RIGHTLINE} />
          </View>
          <PaddingBox style={scale(20)} />
          <View style={[Styles.alignEvenly, {width: wp(60)}]}>
            <TouchableOpacity onPress={signIn}>
              <Image source={images.GOOGLE} />
            </TouchableOpacity>
            <Image source={images.FB} />
            <Image source={images.TW} />
          </View>
          <PaddingBox style={scale(20)} />
          <Center>
            <Text style={Styles.text14R}>
              Don???t have an Account?
              <Text
                style={{color: color.primary}}
                onPress={() =>
                  props.navigation.navigate(navigation.RagistrationScreen)
                }>
                {` `} Sign UP
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
  imageLogo: {
    width: 100,
    height: 100,
  },
});
