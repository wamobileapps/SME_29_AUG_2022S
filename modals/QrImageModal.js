import React, { Component, useMemo , useState} from 'react';
import {
  StyleSheet,
  View,
  Modal,
  Image,
  ActivityIndicator,
  Text
} from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { PaddingBox } from '../comman/alignBox';
import { Styles } from '../comman/styles';
import Header from '../components/Header';

const QrImageModal = (props) => {
const [uri, seturi] = useState("")

  useMemo(() => {
    const data = props.route.params.uri;
    seturi(data);
  }, [props])

  return (
      <View style={styles.modalBackground}>
        <Header name="QR" isleftIcon={true} navigation={props.navigation} />
        <PaddingBox style={"10%"} />
          <Text style={Styles.text14B}>
            {"Prescription QR code"}
          </Text>
          {uri &&
          <Image  source={{uri}} style={styles.imageStyles} />
          }
      </View>
  )
}

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#fff'
  },
  imageStyles:{
    width:widthPercentageToDP(80),
    height:heightPercentageToDP(50),
  },
  activityIndicatorWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:"#ffff",
    width:widthPercentageToDP(100),
    height:heightPercentageToDP(100),
  }
});

export default QrImageModal;