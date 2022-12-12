import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  FlatList,
  Image,
  TouchableOpacity,
  Modal,
  TextInput,
  Switch, Dimensions
} from 'react-native';
import React, { useEffect, useMemo, useState } from 'react';
import { Styles } from '../../comman/styles';
import { color } from '../../comman/theme';
import { Box, Center, PaddingBox, VerticalBox } from '../../comman/alignBox';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import Toast from 'react-native-toast-message';
import TopTabs from '../../components/TopTabs';
import { scale, verticalScale } from 'react-native-size-matters';
import images from '../../comman/images';
import Button from '../../components/Button';
import * as authAction from '../../redux/actions/authAction';
import * as cartAction from '../../redux/actions/cartAction';
import { useDispatch } from 'react-redux';
import Loader from '../../comman/Loader';
import { History } from '../../comman/const';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Toggle from '../../comman/Toggle';
import navigationName from '../../comman/navigation';
import { useSelector } from 'react-redux';
import { Dropdown } from 'react-native-element-dropdown';
export const windowWidth = Dimensions.get('screen').width;
export const windowHeight = Dimensions.get('screen').height;

const TabData = [{ tabName: 'CAP', id: 0 }, { tabName: 'ML', id: 1 }, { tabName: 'SACHET', id: 2 },
{ tabName: 'TAB', id: 3 }, { tabName: 'MG', id: 4 }]

const q8hrdata = [{ name: 'Q2H', id: 0 }, { name: 'Q4H', id: 1 }, { name: 'Q8H', id: 2 },
{ name: 'Q12H', id: 3 }, { name: 'Q24H', id: 4 }, { name: 'Q48H', id: 5 }, { name: 'Q72H', id: 6 }, { name: 'QWEEK', id: 7 }]

const daysData = [{ dayName: 'DAY', id: 0 }, { dayName: 'WEEK', id: 1 },
{ dayName: 'MONTH', id: 2 }, { dayName: 'Yearly', id: 3 }]

const HomeScreen = props => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.cart);
  const [data, setdata] = useState([]);
  const [activeTabs, setactiveTabs] = useState('A');
  const [loading, setloading] = useState(true);
  const [fullData, setfullData] = useState([]);
  const [limit, setlimit] = useState(3);
  const [offset, setoffset] = useState(0);
  const [isSeeMore, setisSeeMore] = useState(true);
  const [titileTextInput, setTitleTextInput] = useState('');
  const [descTextInput, setDescTextInput] = useState('');
  const [toggle, settoggle] = useState(true);
  const [isModal, setmodal] = useState(true);
  const [HistoryList, setHistoryList] = useState(History);
  const [tabValue, setTabValue] = useState('Tab');
  const [count, setCount] = useState('1');
  const [dozeValue, setDozeValue] = useState('q8hr')
  const [daysValue, setDaysValue] = useState('days')
  const [addView, setAddView] = useState('')
  const [num, setNum] = useState(1)
  const [value, setValue] = useState(0)
  // console.log(data,"addViewaddViewaddView");
  const [countArray, setCountArray] = useState([{ key: "1" }, { key: "2" }, { key: "3" }, { key: "4" }, { key: "5" }, { key: "6" },
  { key: "7" }, { key: "8" }, { key: "9" }, { key: "10" }])
 
  useEffect(() => {
    dispatch(authAction.getMedicineData()).then(result => {
      setisSeeMore(true);
      if (result.length != 0) {
        console.log('=======================================899878979878979878', result);
        setfullData(result);

        setdata(result.slice(0, 3));

        // onEditMode()

        // result.map((item, index) => {
        //   setCount(item?.doze?.qty.toString())
        //   setTabValue(item?.doze?.quantityUnit)
        //   setDozeValue(item?.doze?.frequency)
        //   setDaysValue(item?.doze?.periodUnit)
        // })
        setloading(false);
      } else {
        setloading(false);
      }
    });
  }, []);
  const onChangeTabs = value => {
    setactiveTabs(value);
  };

  const onLoadMoreData = () => {
    try {
      let newLoad = fullData.slice(offset + 3, limit + 3);
      if (newLoad.length != 0) {
        console.log(newLoad.length);
        setdata([...data, ...newLoad]);
        setoffset(offset + 3);
        setlimit(limit + 3);
        console.log(offset + 3, limit + 3);
      } else {
        setisSeeMore(false);
      }
    } catch (error) { }
  };

  useEffect(()=>{
    
  },[value])
  const onEditMode = (ind,value) => {

    if (activeTabs == 'A') {
      let newdata = HistoryList.map((item, index) => {

        ind == index ? (item.isAdded = !item.isAdded) : null;
        console.log(item.isAdded, "ytyuytutuytuyty");
        return { ...item };
      });
      setHistoryList(newdata);
    } else {
      // let newdata = data.map((item, index) => {
      let arr = [...data]
      arr.map((item, index) => {
        ind == index ? item.doze.qty = "1" : null
        ind == index ? item.doze.frequency = "q8 hr" : null
        ind == index ? item.doze.periodUnit = "day" : null
        ind == index ? item.doze.quantityUnit = "tab" : null
        ind == index ? (item.isAdded = false) : (item.isAdded = false);
        ind == index ? (item.value =value=="0"?false: true) : (item.value = false);
        return { ...item }
      })
      // console.log(item.isAdded, "udsgkhskdjghjskdghsjkdhksjdghs");
      // ind == index ? (item.isAdded = !item.isAdded) : null;
      // return { ...item };
      // });
      setdata(arr);
    }
  };
  // console.log(cart.length, 'cartlength');

  const onAddCart = (value,index) => {
    if (activeTabs != 'A') {


      setAddView(false)
      var newData = [...cart];
      let isHai = newData.filter(item => item.id == value.id);
      if (isHai.length == 0) {
        let arr = [...data]
        arr.map((item,i)=>{
        index == i ? item.value = false : null
        return {...item}
        })
        setdata(arr)
        newData.push(value);
        Toast.show({
          type: 'success',
          text1: 'Successfully Added!',
        });
      } else {
        newData.map((item, index) => {
          item = value;
        });
        let arr = [...data]
        arr.map((item,i)=>{
        index == i ? item.value = false : null
        return {...item}
        })
        setdata(arr)
        Toast.show({
          type: 'success',
          text1: 'Already Added!',
        });
      }

      dispatch(cartAction.addCartPrescription(newData));
    }
  };
  // const handleCountChange = (itemm, index) => {
  //   let newarr = data.filter((item, ind) => {
  //     return index == ind ? setCount(itemm.key) : null

  //   })
  // }
  // const handleTabChange = (itemm, index) => {
  //   let newarr = data.filter((item, ind) => {
  //     return index == ind ? setTabValue(itemm.tabName) : null
  //   })
  // }
  // const handleDozeChange = (itemm, index) => {
  //   let newarr = data.filter((item, ind) => {
  //     console.log(item.name,"kdggjdgdgdgddf");
  //     return index == ind ? setDozeValue(itemm.name) : null
  //   })
  // }
  // const handleDayChange = (itemm, index) => {
  //   let newarr = data.filter((item, ind) => {
  //     return index == ind ? setDaysValue(itemm.dayName) : null
  //   })
  // }
  const handleCountChange = (item, index) => {
    var newQuantity = item.key;
    let arr = [...data];
    let newarr = arr.filter((i, ind) => {
      return index == ind
        ? (
          i.doze.qty = newQuantity)
        : (i.doze.qty = i.doze.qty);
    });
    // dispatch(cartAction.addCartPrescription(newarr));
  };
  const handleTabChange = (item, index) => {
    //  let newarr = HistoryList.filter((item,ind)=>{
    //    return  index == ind ? setTabValue(item.tabName):null
    //  })
    var qtyUnit = item?.tabName;
    let arr = [...data];
    let newarr = arr.filter((i, ind) => {
      return index == ind
        ? (i.doze.quantityUnit = qtyUnit)
        : (i.doze.quantityUnit = i.doze.quantityUnit);
    });
    // dispatch(cartAction.addCartPrescription(newarr));
  };
  const handleDozeChange = (item, index) => {
    //  let newarr = HistoryList.filter((item,ind)=>{
    //    return  index == ind ? setDozeValue(item.name):null
    //  })
    var newfrequency = item.name;
    let arr = [...data];
    let newarr = arr.filter((i, ind) => {
      return index == ind
        ? (i.doze.frequency = newfrequency)
        : (i.doze.frequency = i.doze.frequency);
    });
    // dispatch(cartAction.addCartPrescription(newarr));
  };
  const handleDayChange = (item, index) => {
    //  let newarr = HistoryList.filter((item,ind)=>{
    //    return  index == ind ? setDaysValue(item.dayName):null
    //  })
    var newperiodUnit = item.dayName;
    let arr = [...data];
    let newarr = arr.filter((i, ind) => {
      return index == ind
        ? (i.doze.periodUnit = newperiodUnit)
        : (i.doze.periodUnit = i.doze.periodUnit);
    });
    // dispatch(cartAction.addCartPrescription(newarr));
  };


  const renderItem = ({ item, index }) => {
    let data = item.doze != undefined ? `${count} ${tabValue} ${dozeValue} for ${item.doze.period} ${daysValue}` : "";
    return (
      <>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate(navigationName.MedicineDetails);
          }}
          style={styles.listContainer}
        >
          <View style={styles.leftSide}>
            <View style={styles.rowList}>
              <View style={styles.imageConatiner}>
                {item.imageUrl ? (
                  <Image source={{ uri: item.imageUrl }} style={styles.image} />
                ) : (
                  <Image source={images.DOC} style={styles.image} />
                )}
              </View>
              <View style={styles.textConatiner}>
                <Text style={Styles.text14SOB} numberOfLines={2}>
                  {item.name}
                </Text>
                <Text
                  style={[Styles.text12MB, { color: '#9095A1FF', marginTop: 5 }]}
                  numberOfLines={2}
                >
                  {item.scientificName}
                </Text>
              </View>
            </View>
            {!item.isAdded && (
              <>
                <PaddingBox />
                {item.doze != undefined ? (
                  <Text
                    style={[Styles.text12MB, { marginHorizontal: 12 }]}
                    numberOfLines={2}
                  >
                    {/* {item.comment} */}

                    {data}
                  </Text>
                ) : (
                  <Text
                    style={[Styles.text12MB, { marginHorizontal: 12 }]}
                    numberOfLines={2}
                  >
                    {item.comment}
                  </Text>
                )}
              </>
            )}
          </View>
          <View style={styles.rightSide}>
            <Button
              name="quick add"
              onPress={async() => {
              await  onEditMode(index,"0")
                onAddCart(item);
              }}
            />
            <PaddingBox />
            {/* {!item.isAdded && (
            <Button
              name="add"
              onPress={() => {
              onEditMode(index);
              setAddView(item.isAdded)
              }}
            />
          )} */}
            {addView == false ?
              <Button
                name="add"
                onPress={() => {
                  if (activeTabs != 'A') {

                    onEditMode(index,"1");
                    // setAddView(!addView)
                  }
                }}
              
              /> :
              null
            }

          </View>
        </TouchableOpacity>
        {item.value && activeTabs != 'A' ?
          <View style={styles.modalView}>
            <View style={{ flexDirection: "row", justifyContent: 'space-between', maxHeight: 100 }}>
              <Dropdown
                style={{
                  height: 45,
                  borderColor: 'black',
                  borderWidth: 1,
                  borderRadius: 8,
                  paddingHorizontal: 8,
                  width: windowWidth / 8,
                  alignSelf: "center",
                }}

                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                iconStyle={styles.iconStyle}
                data={countArray}
                maxHeight={150}
                showsVerticalScrollIndicator={false}
                inputSearchStyle={{ color: "yellow", fontSize: 40 }}
                labelField="key"
                value={count}
                selectedTextProps={'ghghgh'}
                placeholder={count ? count : '1'}
                onChange={item => {

                  handleCountChange(item, index)

                }}
                renderItem={(item) => {
                  return <View style={styles.alternateplatess}>
                    <Text style={{ color: "black", fontSize: 16 }}>{item.key}</Text>
                  </View>
                }}
              />
              <Dropdown
                style={[styles.dropdown, { borderColor: 'black' }]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                iconStyle={styles.iconStyle}
                data={TabData}
                maxHeight={150}
                showsVerticalScrollIndicator={false}
                inputSearchStyle={{ color: "yellow", fontSize: 40 }}
                labelField="tabName"

                value={tabValue}
                selectedTextProps={'ghghgh'}
                placeholder={tabValue ? tabValue : 'Tab'}
                onChange={(item) => {
                  handleTabChange(item, index)
                }}
                renderItem={(item) => {
                  return <View style={styles.alternateplatess}>
                    <Text style={{ color: "black", fontSize: 16 }}>{item.tabName}</Text>
                  </View>
                }}
              />
              <Dropdown
                style={[styles.dropdown, { borderColor: 'black' }]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                iconStyle={styles.iconStyle}
                data={q8hrdata}
                maxHeight={150}
                showsVerticalScrollIndicator={false}
                inputSearchStyle={{ color: "yellow", fontSize: 40 }}
                labelField="name"

                value={dozeValue}
                selectedTextProps={'ghghgh'}
                placeholder={dozeValue ? dozeValue : 'q8hr'}
                onChange={item => {

                  handleDozeChange(item, index)
                }}
                renderItem={(item) => {
                  return <View style={styles.alternateplatess}>
                    <Text style={{ color: "black", fontSize: 16 }}>{item.name}</Text>
                  </View>
                }}
              />
              <Dropdown
                style={[styles.dropdown, { borderColor: 'black' }]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                iconStyle={styles.iconStyle}
                data={daysData}
                maxHeight={150}
                showsVerticalScrollIndicator={false}
                inputSearchStyle={{ color: "yellow", fontSize: 40 }}
                labelField="dayName"
                value={daysValue}
                selectedTextProps={'ghghgh'}
                placeholder={daysValue ? daysValue : '10 days'}
                onChange={item => {

                  handleDayChange(item, index)
                }}
                renderItem={(item) => {
                  return <View style={styles.alternateplatess}>
                    <Text style={{ color: "black", fontSize: 16 }}>{item.dayName}</Text>
                  </View>
                }}
              />
            </View>

            <PaddingBox />
            <PaddingBox />
            <PaddingBox />
            <TextInput

              style={[
                styles.input,
                {
                  height: 166,
                  borderRadius: 6,
                  backgroundColor: color.descGrayModal,
                },
              ]}
              onChangeText={text => {
                setDescTextInput(text);
              }}
              textAlignVertical="top"
              multiline={true}
              value={descTextInput}
            />
            <PaddingBox />
            <View style={styles.ButtonStyle}>
              <Button
                name="Done"
                style={{ backgroundColor: color.green }}
                onPress={() => {
                  onAddCart(item,index);
                }}
              />
            </View>
          </View>
          :
          null
        }

      </>
    );
  }
  const onToggle = () => {
    settoggle(!toggle);
  };

  return (
    <View style={styles.container}>
      <Loader loading={loading} />
      <StatusBar backgroundColor={color.white} barStyle="dark-content" />
      <Header
        name="Profile listing"
        isleftIcon={true}
        navigation={props.navigation}
      />
      <PaddingBox />
      <Box>
        <SearchBar />
        <PaddingBox />
      </Box>
      <TopTabs activeTabs={activeTabs} onChangeTabs={onChangeTabs} />
      <TouchableOpacity
        style={styles.floting}
        onPress={() => props.navigation.navigate(navigationName.Prescription)}
      >
        <TouchableOpacity style={{
          zIndex: 90, backgroundColor: "red", alignSelf: "flex-end", top: 25, width: 25, borderRadius: 15,
          justifyContent: "center", alignItems: "center"
        }}>

          <Text style={{ fontSize: 16, color: "white" }}>{cart.length}</Text>
        </TouchableOpacity>
        <Image source={images.NEWSPAPER} style={styles.flotingImage} />
      </TouchableOpacity>
      <FlatList
        data={activeTabs == 'A' ? HistoryList : data}
        renderItem={renderItem}
        initialNumToRender={3}
        keyExtractor={(item, index) => (item + index).toString()}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => <PaddingBox />}
        ItemSeparatorComponent={() => <PaddingBox />}
        ListFooterComponent={() => (
          <>
            {activeTabs == 'B' ? (
              <View style={styles.footerView}>
                <TouchableOpacity
                  onPress={() => onLoadMoreData()}
                  style={Styles.row}
                >
                  <Text style={[Styles.text14MR, { color: color.primary }]}>
                    {isSeeMore ? 'See More' : 'No More'}
                  </Text>
                  <VerticalBox style={5} />
                  <MaterialIcons
                    name="keyboard-arrow-down"
                    size={24}
                    color={color.primary}
                  />
                </TouchableOpacity>
              </View>
            ) : (
              <PaddingBox />
            )}
          </>
        )}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
  },
  floting: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    zIndex: 100,
  },
  footerView: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginVertical: 20,
  },
  flotingImage: {
    width: scale(60),
    height: scale(60),
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
    width: '30%',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
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
    elevation: 3,
    borderRadius: scale(6),
    flexDirection: 'row',
    padding: 10,
    paddingHorizontal: 12,
    paddingVertical: verticalScale(15),
    backgroundColor: color.white,
    marginTop: 2,
  },
  data: {
    elevation: 3,
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    paddingVertical: 20,
  },
  modalView: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    marginTop: 10,
    padding: 10,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 3,
  },
  input: {
    height: verticalScale(35),
    width: '100%',
    padding: 10,
    backgroundColor: color.grayModal,
  },
  ButtonStyle: {
    alignItems: 'flex-end',
  },
  dropdown: {
    height: 45,
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    width: windowWidth / 5,
    alignSelf: "center"
  },

  placeholderStyle: {
    fontSize: 12,
  },

  selectedTextStyle: {
    fontSize: 12,
  },

  alternateplatess: {
    height: 30,
    paddingLeft: 15,
    marginVertical: 3
  }
});
