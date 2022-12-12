import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
  TextInput,
  Dimensions,
} from 'react-native';
import React, {useState, useEffect, useMemo} from 'react';
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
import {useSelector} from 'react-redux';
import * as cartAction from '../../redux/actions/cartAction';
import * as authAction from '../../redux/actions/authAction';
import {Dropdown} from 'react-native-element-dropdown';
export const windowWidth = Dimensions.get('screen').width;
export const windowHeight = Dimensions.get('screen').height;
import {useDispatch} from 'react-redux';
import QrImageModal from '../../modals/QrImageModal';
import Loader from '../../comman/Loader';
import Toast from 'react-native-toast-message';
const TabData = [
  {tabName: 'CAP', id: 0},
  {tabName: 'ML', id: 1},
  {tabName: 'SACHET', id: 2},
  {tabName: 'TAB', id: 3},
  {tabName: 'MG', id: 4},
];

const q8hrdata = [
  {name: 'Q2H', id: 0},
  {name: 'Q4H', id: 1},
  {name: 'Q8H', id: 2},
  {name: 'Q12H', id: 3},
  {name: 'Q24H', id: 4},
  {name: 'Q48H', id: 5},
  {name: 'Q72H', id: 6},
  {name: 'QWEEK', id: 7},
];

const daysData = [
  {dayName: 'DAY', id: 0},
  {dayName: 'WEEK', id: 1},
  {dayName: 'MONTH', id: 2},
  {dayName: 'Yearly', id: 3},
];
const Prescription = props => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.cart);
  const [loading, setloading] = useState(false);
  const [toggle, settoggle] = useState(false);
  const [isEdit, setisEdit] = useState(true);
  const [HistoryList, setHistoryList] = useState([]);
  const [isScanShow, setisScanShow] = useState(false);
  const [PrescriptionQR, setPrescriptionQR] = useState('');
  const [tabValue, setTabValue] = useState('');
  const [count, setCount] = useState('');
  const [dozeValue, setDozeValue] = useState('');
  const [daysValue, setDaysValue] = useState('');
  const [addView, setAddView] = useState('');
  console.log(HistoryList, 'HistoryListHistoryList');

  const [countArray, setCountArray] = useState([
    {key: '1'},
    {key: '2'},
    {key: '3'},
    {key: '4'},
    {key: '5'},
    {key: '6'},
    {key: '7'},
    {key: '8'},
    {key: '9'},
    {key: '10'},
  ]);
  const onToggle = () => {
    settoggle(!toggle);
  };

  useMemo(() => {
    setHistoryList(cart);
  }, [cart, HistoryList]);
  useEffect(() => {
    cart.map((item, index) => {
      setCount(item?.doze?.qty.toString());
      setTabValue(item?.doze?.quantityUnit);
      setDozeValue(item?.doze?.frequency);
      setDaysValue(item?.doze?.periodUnit);
    });
  }, []);

  const onEditMode = ind => {
    let newD = HistoryList.map((item, index) => {
      index == ind ? (item.isEdit = !item.isEdit) : null;
      return {...item};
    });
    //  let newdata= [...HistoryList, HistoryList[index].isEdit = !HistoryList[index].isEdit];
    setHistoryList(newD);
  };

  const onEditComplete = ind => {
    Toast.show({
      type: 'success',
      text1: 'Successfully Updated!',
    });
    let newD = HistoryList.map((item, index) => {
      index == ind ? (item.isEdit = !item.isEdit) : null;
      return {...item};
    });
    setHistoryList(newD);
    dispatch(cartAction.addCartPrescription(HistoryList));
  };

  // const onSubmit = () => {
  //   setloading(true);
  //   var newCollection = [];
  //   HistoryList.map((item, index) => {
  //     let value = {
  //       medicineId: item.id,
  //       qty: item.doze.qty,
  //       quantityUnit: item.doze.quantityUnit,
  //       period: item.doze.period,
  //       periodUnit: item.doze.periodUnit,
  //     };
  //     newCollection.push(value);
  //   });
  //   let data = {
  //     medicines: newCollection,
  //     comment: '',
  //   };
  //   dispatch(authAction.AddPrescriptionData(data)).then(result => {
  //     console.log(result);
  //     if (result.qrLink != undefined) {
  //       props.navigation.navigate('QrImageModal', {uri: result.qrLink});
  //     } else {
  //       alert('Somthing went wrong.');
  //     }
  //     setloading(false);
  //   });
  // };

  const onDeleteCart = id => {
    var newData = [...cart];
    let isHai = newData.filter(item => item.id != id);
    dispatch(cartAction.addCartPrescription(isHai));
  };

  const onRadioMode = index => {
    let newdata = [
      ...HistoryList,
      (HistoryList[index].toggle = !HistoryList[index].toggle),
    ];
    setHistoryList(newdata);
  };

  const onChangeTextValue = (ind, text) => {
    let newArr = HistoryList.map((item, index) => {
      ind == index ? (item.comment = text) : null;
      return {...item};
    });
    setHistoryList(newArr);
  };

  const onChangeTextDesValue = (ind, text) => {
    let newArr = HistoryList.map((item, index) => {
      ind == index ? (item.des = text) : null;
      return {...item};
    });
    setHistoryList(newArr);
  };

  
  const handleCountChange = (item, index) => {
    var newQuantity = item.key;
    let arr = [...HistoryList];
    let newarr = arr.filter((i, ind) => {
      return index == ind
        ? (i.doze.qty = newQuantity)
        : (i.doze.qty = i.doze.qty);
    });
    dispatch(cartAction.addCartPrescription(newarr));
  };
  const handleTabChange = (item, index) => {
    //  let newarr = HistoryList.filter((item,ind)=>{
    //    return  index == ind ? setTabValue(item.tabName):null
    //  })
    var qtyUnit = item?.tabName;
    let arr = [...HistoryList];
    let newarr = arr.filter((i, ind) => {
      return index == ind
        ? (i.doze.quantityUnit = qtyUnit)
        : (i.doze.quantityUnit = i.doze.quantityUnit);
    });
    dispatch(cartAction.addCartPrescription(newarr));
  };
  const handleDozeChange = (item, index) => {
    //  let newarr = HistoryList.filter((item,ind)=>{
    //    return  index == ind ? setDozeValue(item.name):null
    //  })
    var newfrequency = item.name;
    let arr = [...HistoryList];
    let newarr = arr.filter((i, ind) => {
      return index == ind
        ? (i.doze.frequency = newfrequency)
        : (i.doze.frequency = i.doze.frequency);
    });
    dispatch(cartAction.addCartPrescription(newarr));
  };
  const handleDayChange = (item, index) => {
    //  let newarr = HistoryList.filter((item,ind)=>{
    //    return  index == ind ? setDaysValue(item.dayName):null
    //  })
    var newperiodUnit = item.dayName;
    let arr = [...HistoryList];
    let newarr = arr.filter((i, ind) => {
      return index == ind
        ? (i.doze.periodUnit = newperiodUnit)
        : (i.doze.periodUnit = i.doze.periodUnit);
    });
    dispatch(cartAction.addCartPrescription(newarr));
  };

  const renderItem = ({item, index}) => {
    // console.log("qwyfdjkagscjhgaskj",`${item.doze.qty} ${item.doze.quantityUnit} ${item.doze.frequency} for ${item.doze.period} ${item.doze.periodUnit}`);
    // let qty =item.doze.qty == "0" ? "1":""
    // let time =item.doze.periodUnit == "MONTH" ? "days":item.doze.periodUnit
    let data =
      item.doze != undefined
        ?
        `${item.doze.qty} ${item.doze.quantityUnit} ${item.doze.frequency} for ${item.doze.period} ${item.doze.periodUnit}`
        : '';
    return (
      <View
        // onPress={() => {
        //   props.navigation.navigate(navigation.PrescriptionDetails);
        // }}
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
                <Text
                  style={[
                    Styles.text12MB,
                    {marginHorizontal: 12, width: wp('68%')},
                  ]}
                  numberOfLines={2}
                >
                  {data}
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    onEditMode(index);
                  }}
                >
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
            <View style={{}}>
              {/* <View style={styles.inputConatiner}>
              <TextInput
                textAlign="left"
                numberOfLines={1}
                autoCorrect={false}
                value={item.comment}
                onChangeText={text => {
                  onChangeTextValue(index, text);
                }}
              />
            </View> */}
              {/* ////////////////////////view for the dropdown start/////////////////////////////////////////////// */}

              <View style={{width: windowWidth - 60}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    maxHeight: 100,
                  }}
                >
                  <Dropdown
                    style={{
                      height: 45,
                      borderColor: 'black',
                      borderWidth: 1,
                      borderRadius: 8,
                      paddingHorizontal: 8,
                      width: windowWidth / 8,
                      alignSelf: 'center',
                    }}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    iconStyle={{right: -6}}
                    data={countArray}
                    maxHeight={150}
                    showsVerticalScrollIndicator={false}
                    inputSearchStyle={{color: 'yellow', fontSize: 40}}
                    labelField="key"
                    value={count}
                    selectedTextProps={'ghghgh'}
                    placeholder={count ? count : '1'}
                    onChange={item => {
                      handleCountChange(item, index);
                    }}
                    renderItem={item => {
                      return (
                        <View style={styles.alternateplatess}>
                          <Text style={{color: 'black', fontSize: 16}}>
                            {item.key}
                          </Text>
                        </View>
                      );
                    }}
                  />
                  <Dropdown
                    style={[styles.dropdown, {borderColor: 'black'}]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    iconStyle={styles.iconStyle}
                    data={TabData}
                    maxHeight={150}
                    showsVerticalScrollIndicator={false}
                    inputSearchStyle={{color: 'yellow', fontSize: 40}}
                    labelField="tabName"
                    value={tabValue}
                    selectedTextProps={'ghghgh'}
                    placeholder={tabValue ? tabValue : 'Select'}
                    onChange={item => {
                      handleTabChange(item, index);
                    }}
                    renderItem={item => {
                      return (
                        <View style={styles.alternateplatess}>
                          <Text style={{color: 'black', fontSize: 16}}>
                            {item.tabName}
                          </Text>
                        </View>
                      );
                    }}
                  />
                  <Dropdown
                    style={[styles.dropdown, {borderColor: 'black'}]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    iconStyle={styles.iconStyle}
                    data={q8hrdata}
                    maxHeight={150}
                    showsVerticalScrollIndicator={false}
                    inputSearchStyle={{color: 'yellow', fontSize: 40}}
                    labelField="name"
                    value={dozeValue}
                    selectedTextProps={'ghghgh'}
                    placeholder={dozeValue ? dozeValue : 'Select'}
                    onChange={item => {
                      handleDozeChange(item, index);
                    }}
                    renderItem={item => {
                      return (
                        <View style={styles.alternateplatess}>
                          <Text style={{color: 'black', fontSize: 16}}>
                            {item.name}
                          </Text>
                        </View>
                      );
                    }}
                  />
                  <Dropdown
                    style={[styles.dropdown, {borderColor: 'black'}]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    iconStyle={styles.iconStyle}
                    data={daysData}
                    maxHeight={150}
                    showsVerticalScrollIndicator={false}
                    inputSearchStyle={{color: 'yellow', fontSize: 40}}
                    labelField="dayName"
                    value={daysValue}
                    selectedTextProps={'ghghgh'}
                    placeholder={daysValue ? daysValue : 'Select'}
                    onChange={item => {
                      handleDayChange(item, index);
                    }}
                    renderItem={item => {
                      return (
                        <View style={styles.alternateplatess}>
                          <Text style={{color: 'black', fontSize: 16}}>
                            {item.dayName}
                          </Text>
                        </View>
                      );
                    }}
                  />
                </View>
              </View>

              {/* //////////////////////// end dop downview/////////////////////////////// */}
              <PaddingBox />
              <PaddingBox />
              <View style={styles.inputBox}>
                <TextInput
                  textAlign="left"
                  style={styles.textarea}
                  multiline={true}
                  autoCorrect={false}
                  value={item.des}
                  onChangeText={text => {
                    onChangeTextDesValue(index, text);
                  }}
                />
              </View>
              <PaddingBox style={5} />
              <View style={{width: wp(80)}}>
                <TouchableOpacity
                  style={styles.right}
                  onPress={() => onEditComplete(index)}
                >
                  <Image source={images.CHECK} style={styles.checkStyles} />
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>
        <TouchableOpacity
          style={styles.rightSide}
          onPress={() => onDeleteCart(item.id)}
        >
          <Image source={images.TRASH} style={styles.icon} />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <SafeAreaView style={Styles.container}>
      <Header
        name="Prescription"
        isleftIcon={true}
        navigation={props.navigation}
      />
      <Loader loading={loading} />
      <View style={[styles.line, {width: '100%'}]} />
      <FlatList
        renderItem={renderItem}
        data={cart}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={styles.line} />}
        keyExtractor={(item, index) => (item + index).toString()}
      />
      <ButtonFooter
        name={'To Summary'}
        onPress={() => {
          props.navigation.navigate(navigation.PrescriptionDetails);
        }}
      />
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
    fontFamily: 'Mulish-Regular',
    fontSize: scale(12),
  },
  inputConatiner: {
    width: wp('80%'),
    height: verticalScale(35),
    backgroundColor: color.borderInput,
    borderRadius: scale(0),
    justifyContent: 'center',
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
    paddingVertical: 7,
  },
  rowList: {
    flexDirection: 'row',
  },
  rightSide: {
    width: '10%',
    height: 50,
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
  dropdown: {
    height: 45,
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    width: windowWidth / 5,
    alignSelf: 'center',
  },

  placeholderStyle: {
    fontSize: 10,
  },

  selectedTextStyle: {
    fontSize: 10,
  },

  alternateplatess: {
    height: 30,
    paddingLeft: 15,
    marginVertical: 3,
  },
});
