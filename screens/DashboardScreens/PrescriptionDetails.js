import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Header from '../../components/Header';
import Button from '../../components/Button';
import {PaddingBox} from '../../comman/alignBox';
import images from '../../comman/images';
import navigationName from '../../comman/navigation';
import {Styles} from '../../comman/styles';
import {scale, verticalScale} from 'react-native-size-matters';
import {color} from '../../comman/theme';
import {History} from '../../comman/const';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Toggle from '../../comman/Toggle';
import ButtonFooter from '../../components/ButtonFooter';

const PrescriptionDetails = props => {
  
const doctorDetails = 'Dr.Ahmad Qarabssa \n MD, Internal medicine specialist, palestinian board, british board  Gastroenterology specialist, palestinian board Adress ;AL-Bira , AL-Fahd Trading Center, near Al-Bira  Mosque \n Telefon Number ; 0569808145 , \n Whats app;  00970569808145 '

  

   const onSubmit = () =>{

   }

  
  return (
    <SafeAreaView style={Styles.container}>
      <Header
        name="Prescription"
        isleftIcon={true}
        navigation={props.navigation}
      />
      <View style={[styles.line,{width:"100%"}]}/>
      <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
        <View style={styles.mainView}>
          <View style={[styles.rowList, styles.subMainView]}>
            <View style={[styles.lineView, {width: '50%'}]}>
            <Text style={[Styles.text14MB,]} >{'عامر يمين احمد قرابصة'}</Text> 
            </View>
          <Text style={[Styles.text18MB, {width: '25%'}]} >{'اسم المريض'}</Text> 
          </View>

          <View style={[styles.rowList, styles.subMainView]}>
            <View style={[styles.lineView, {width: '35%'}]}>
            <Text style={[Styles.text14MB,]} >{'21'}</Text> 
            </View>
          <Text style={[Styles.text18MB, {width: '25%'}]} >{'العمر '}</Text> 
          </View>

          <View style={[styles.rowList, styles.subMainView]}>
            <View style={[styles.lineView, {width: '45%'}]}>
            <Text style={[Styles.text14MB,]} >{'24-08-2022'}</Text> 
            </View>
          <Text style={[Styles.text18MB, {width: '25%'}]} >{'التاريخ '}</Text> 
          </View>

          <View style={[styles.rowList, {justifyContent: 'center', marginTop: scale(24)}]}>
          <Text style={[Styles.text18MB,]} >{'DX'}</Text> 
            <View style={[styles.lineView, {width: '45%', justifyContent: 'center', alignItems: 'center'}]}>
            <Text style={[Styles.text14MB,]} >{'Sinusitis'}</Text> 
            </View>
          </View>
        </View>

        <View style={{marginHorizontal: 16, marginTop: 24}}>
          <Text style={[Styles.text12SORBold, {marginTop: 16}]}>{'trufen 600 mg 1 tab q8 hr for 14 days prn before meal'}</Text>
          <Text style={[Styles.text12SORBold, {marginTop: 16}]}>{'Amoxitid 750mg 1 tab q8 hr for 14 days regularly before meal'}</Text>
          <Text style={[Styles.text12SORBold, {marginTop: 16}]}>{'acamol 500mg 2 tab q8 hr for 14 days regularly before meal'}</Text>
          <Text style={[Styles.text14SOR, {marginTop: 16}]}>{'dr.Name ; Ahmad Qarabssa'}</Text>
        </View>

        <View style={[styles.line,{width:"90%", marginTop: 34}]}/>
        <PaddingBox/>
        <View style={{paddingHorizontal: 16, paddingBottom: 16}}>
        <Text style={[Styles.text14SOR, {lineHeight: 22}]}>{doctorDetails}</Text>
        </View>

      </ScrollView>
      
    
      <ButtonFooter name={"Generate Prescription"} onPress={()=>onSubmit()} />

      
    </SafeAreaView>
  );
};

export default PrescriptionDetails;

const styles = StyleSheet.create({
  subMainView:{width: '100%', justifyContent: 'flex-end', alignItems: 'center', marginTop: 16},
  lineView:{borderBottomColor: color.lightGray, borderBottomWidth: 1, marginEnd: 16, justifyContent: 'flex-end', alignItems: 'flex-end',},
  mainView:{marginTop: scale(25), paddingHorizontal: scale(20)},
  rapeStyle: {
    width: wp(60),
    borderRadius: 5,
    backgroundColor: color.borderInput,
    paddingHorizontal: 10,
    height: scale(40),
    // alignItems:"center",
    justifyContent: 'center',
  },
  checkStyles: {
    width: scale(50),
    height: scale(50),
  },
  right: {
    alignSelf: 'flex-end',
  },
  inputBox: {
    height: hp(20),
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#9095A1FF',
    padding: 10,
    width: wp(80),
  },
  textarea: {
    textAlignVertical: 'top',
    height: hp(20),
    padding: 0,
    fontFamily:"Mulish-Regular",
    fontSize:scale(12),
  },
  inputConatiner: {
    width: wp('80%'),
    height: verticalScale(35),
    backgroundColor: color.borderInput,
    borderRadius: scale(0),
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },
  icon: {
    width: scale(25),
    height: scale(25),
  },
  line: {
    borderBottomWidth: 1,
    borderColor: color.lightGray,
    marginHorizontal: 12,
    width: wp(85),
    alignSelf: 'center',
  },
  textConatiner: {
    width: '70%',
    paddingHorizontal: 10,
  },
  rowList: {
    flexDirection: 'row',
  },
  rightSide: {
    width: '10%',
  },
  imageConatiner: {
    width: scale(60),
    height: scale(60),
    borderRadius: 30,
    backgroundColor: color.primary,
  },
  leftSide: {
    width: '70%',
  },
  listContainer: {
    width: '90%',
    alignSelf: 'center',
    borderRadius: scale(6),
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    paddingHorizontal: 12,
    paddingVertical: verticalScale(15),
    backgroundColor: color.white,
    marginTop: 2,
  },
});
