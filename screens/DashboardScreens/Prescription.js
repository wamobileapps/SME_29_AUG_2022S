import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
  TextInput,
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
import navigation from '../../comman/navigation';

const Prescription = props => {
  const [toggle, settoggle] = useState(false);
  const [isEdit, setisEdit] = useState(true);
  const [HistoryList, setHistoryList] = useState(History);


  const onToggle = () => {
    settoggle(!toggle);
  };


  const onEditMode = (index) =>{
   let newdata= [...HistoryList, HistoryList[index].isEdit = !HistoryList[index].isEdit];
    setHistoryList(newdata)
  }

  const onSubmit =()=>{

  }


  const onRadioMode = (index) =>{
    let newdata= [...HistoryList, HistoryList[index].toggle = !HistoryList[index].toggle];
     setHistoryList(newdata)
   }

  const renderItem = ({item, index}) => (
    <TouchableOpacity
    onPress={()=>{props.navigation.navigate(navigation.PrescriptionDetails)}}
    activeOpacity={1}
      style={styles.listContainer}
    >
      <View style={styles.leftSide}>
        <View style={styles.rowList}>
          <View style={styles.imageConatiner}>
            {item.imageUrl ? (
              <Image source={{uri: item.imageUrl}} style={styles.image} />
            ) : (
              <Image source={images.DOC} style={styles.image} />
            )}
          </View>
          <View style={styles.textConatiner}>
            <Text style={Styles.text14SOB} numberOfLines={2}>
              {item.name}
            </Text>
            <Text
              style={[Styles.text12MB, {color: '#9095A1FF', marginTop: 5}]}
              numberOfLines={2}
            >
              {item.scientificName}
            </Text>
          </View>
        </View>
        <PaddingBox />
        {!item.isEdit ? (
          <View>
            <View style={[Styles.alignbetween, {width: wp('82%')}]}>
              <Text style={[Styles.text12MB, {marginHorizontal: 12}]} numberOfLines={2}>
                {item.comment}
              </Text>
              <TouchableOpacity onPress={() => {onEditMode(index)}}>
                <Image source={images.EDIT} style={styles.icon} />
              </TouchableOpacity>
            </View>
            <PaddingBox style={5} />
            <View style={styles.rapeStyle}>
              <Text numberOfLines={1} style={Styles.text12MB}>
                patient should chill every......
              </Text>
            </View>
          </View>
        ) : (
          <View>
            <View style={styles.inputConatiner}></View>
            <PaddingBox />
            <Toggle
              onColor={color.primary}
              offColor={color.borderInput}
              isOn={!item.toggle}
              onToggle={()=>onRadioMode(index)}
            />
            <PaddingBox />
            <View style={styles.inputBox}>
              <TextInput
                textAlign="left"
                style={styles.textarea}
                multiline={true}
                autoCorrect={false}
                value={
                  item.des
                }
              />
            </View>
            <PaddingBox style={5} />
            <View style={{width: wp(80)}}>
              <TouchableOpacity style={styles.right} onPress={()=>onEditMode(index)} >
                <Image source={images.CHECK} style={styles.checkStyles} />
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
      <View style={styles.rightSide}>
        <Image source={images.TRASH} style={styles.icon} />
        <PaddingBox />
      </View>
    </TouchableOpacity>
  );
  return (
    <SafeAreaView style={Styles.container}>
      <Header
        name="Prescription"
        isleftIcon={true}
        navigation={props.navigation}
      />
      <View style={[styles.line,{width:"100%"}]}/>
      <FlatList
        renderItem={renderItem}
        data={History}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={styles.line} />}
        keyExtractor={(item, index) => (item + index).toString()}
      />
      <ButtonFooter name={'To Summary'} onPress={()=>{onSubmit()}}>

      </ButtonFooter>
    </SafeAreaView>
  );
};

export default Prescription;

const styles = StyleSheet.create({
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
    paddingVertical: 7
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
    borderRadius: 35,
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
