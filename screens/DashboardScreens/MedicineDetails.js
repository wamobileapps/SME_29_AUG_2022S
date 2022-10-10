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
  Switch,
  ScrollView,
  Dimensions,
} from 'react-native';
import React, {useEffect, useState, useRef} from 'react';
import {Styles} from '../../comman/styles';
import {color} from '../../comman/theme';
import {Box, Center, PaddingBox, VerticalBox} from '../../comman/alignBox';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import TopTabs from '../../components/TopTabs';
import {scale, verticalScale} from 'react-native-size-matters';
import images from '../../comman/images';
import Button from '../../components/Button';
import * as authAction from '../../redux/actions/authAction';
import {useDispatch} from 'react-redux';
import Loader from '../../comman/Loader';
import {History} from '../../comman/const';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Toggle from '../../comman/Toggle';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import TextInputView from '../../components/TextInputView';
import SelectDropdown from 'react-native-select-dropdown';

const width = Dimensions.get('window').width;

const MedicineDetails = props => {
  const dispatch = useDispatch();
  const medicineId = props?.route?.params?.medicineId
  const [loading, setloading] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const [medicineDetails, setmedicineDetails] = useState('');
  const [diseaseList, setdiseaseList] = useState('');
  const [selectedItem, setSelectedItem] = useState('');
  const [selectedContraInteraction, setSelectedContraInteraction] =
    useState('');
  const [comment, setcomment] = useState('');
  const imageFlatList = useRef();

  useEffect(() => {
    setloading(true);
    dispatch(authAction.getMedicineById(medicineId)).then(async res => {
      setmedicineDetails(res);
      setloading(false);
      var data = []
      for (let i = 0; i < res?.diseaseList.length; i++) {
      data.push(res?.diseaseList[i].name)
      }
      setdiseaseList(data)
    });
  }, []);
  const aryData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const renderItem = ({item}) => {
    return (
      <Text style={[Styles.text12MB, {marginTop: 3, color: color.darkGray}]}>
        consideration1
      </Text>
    );
  };

  const renderItemText = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setSelectedItem(item);
        }}>
        <Text
          style={[
            item == selectedItem ? Styles.text14B : Styles.text12MB,
            {
              marginTop: 6,
              color: item == selectedItem ? color.red : color.darkGray,
            },
          ]}>
          {item?.interactionMedicine?.name}
        </Text>
      </TouchableOpacity>
    );
  };

  const renderItemContraInteraction = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setSelectedContraInteraction(item);
        }}>
        <Text
          style={[
            item == selectedContraInteraction
              ? Styles.text14B
              : Styles.text12MB,
            {
              marginTop: 6,
              color:
                item == selectedContraInteraction ? color.red : color.darkGray,
            },
          ]}>
          {item}
        </Text>
      </TouchableOpacity>
    );
  };

  const renderImageItem = ({item}) => {
    return (
      <View style={styles.imageView}>
        <Image source={images.IMAGE} style={styles.image} />
        <Text
          style={[
            Styles.text14SOR,
            {fontWeight: '800', color: color.black, marginTop: 8},
          ]}>
          Medicine Name
        </Text>
      </View>
    );
  };

  const handleSlideRight = () => {
    if (imageIndex < aryData.length - 1) {
      imageFlatList.current.scrollToIndex({index: imageIndex + 1});
      setImageIndex(imageIndex + 1);
    }
  };

  const handleSlideLeft = () => {
    if (imageIndex > 0) {
      imageFlatList.current.scrollToIndex({index: imageIndex - 1});
      setImageIndex(imageIndex - 1);
    }
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
      <Box>
        <SearchBar />
        <PaddingBox />
      </Box>
      <ScrollView
        style={styles.subContainer}
        showsVerticalScrollIndicator={false}>
        <Box>
          <View style={styles.headerView}>
            <View style={styles.row}>
              <Image
                source={{uri: medicineDetails?.imageUrl}}
                style={styles.imageConatiner}
              />
              <View style={styles.detailView}>
                <Text
                  style={[
                    Styles.text14SOR,
                    {fontWeight: '800', color: color.black},
                  ]}>
                  {medicineDetails?.name}
                </Text>
                <Text
                  style={[
                    Styles.text12MB,
                    {marginTop: 3, color: color.darkGray},
                  ]}>
                  {medicineDetails?.scientificName}
                </Text>
                <Text
                  style={[
                    Styles.text12MB,
                    {marginTop: 3, color: color.darkGray},
                  ]}>
                  {'Pregnancy Category :   ' +
                    medicineDetails?.pregnancyCategory}
                </Text>
                <Text
                  style={[Styles.text14MR, {marginTop: 3, color: color.black}]}>
                  {medicineDetails?.billsAmount}
                </Text>
                <Text
                  style={[
                    Styles.text14MR,
                    {marginTop: 3, color: color.lightGray},
                  ]}>
                  {medicineDetails?.companyName}
                </Text>
              </View>
            </View>
            <TouchableOpacity style={{marginTop: -8}} onPress={() => {}}>
              <MaterialIcons name="arrow-back" size={26} color={color.black} />
            </TouchableOpacity>
          </View>
          <PaddingBox style={scale(20)} />
        </Box>

        <Box>
          <Text
            style={[Styles.text14SOR, {fontWeight: '800', color: color.red}]}>
            Dose Considuration
          </Text>
          <PaddingBox />

          <View>
            <FlatList
              data={medicineDetails?.dozeConsideration}
              renderItem={renderItem}
              keyExtractor={(item, index) => (item, index).toString()}
            />
          </View>

          <PaddingBox style={50} />

          <View style={styles.line} />
          <PaddingBox style={20} />
          <View>
            <View style={styles.row}>
              <View style={{flex: 0.5}}>
                <Text
                  style={[
                    Styles.text14SOR,
                    {fontWeight: '800', color: color.black,},
                  ]}>
                  Serious Interaction
                </Text>
                <FlatList
                  data={medicineDetails?.interactions}
                  renderItem={renderItemText}
                  keyExtractor={(item, index) => (item, index).toString()}
                />
              </View>

              <View style={{flex: 0.5}}>
                <Text
                  style={[
                    Styles.text14SOR,
                    {fontWeight: '800', color: color.black,},
                  ]}>
                  Contra Interaction
                </Text>
                <FlatList
                  data={medicineDetails?.contraIndications}
                  renderItem={renderItemContraInteraction}
                  keyExtractor={(item, index) => (item, index).toString()}
                />
              </View>
            </View>

            <View></View>
            <PaddingBox style={20} />

            <View style={[styles.row, {justifyContent: 'space-between'}]}>
              <SelectDropdown
                buttonStyle={styles.dropdownButton}
                data={medicineDetails?.sideEffects}
                onSelect={selectedItem => {
                  //setOpeningTimeValue(index, selectedItem)
                }}
                defaultButtonText={'Side effects'}
                dropdownIconPosition='right'
                renderDropdownIcon={() => {
                  return (
                    <MaterialIcons
                      color={color.black}
                      size={18}
                      name="keyboard-arrow-down"
                    />
                  );
                }}
                buttonTextStyle={Styles.text14M}
                buttonTextAfterSelection={(selectedItem, index) => {
                  return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                  return item;
                }}
                rowTextStyle={Styles.text14M}
              />


<SelectDropdown
                buttonStyle={styles.dropdownButton}
                data={diseaseList}
                onSelect={selectedItem => {
                  //setOpeningTimeValue(index, selectedItem)
                }}
                defaultButtonText={'Disease'}
                dropdownIconPosition='right'
                renderDropdownIcon={() => {
                  return (
                    <MaterialIcons
                      color={color.black}
                      size={18}
                      name="keyboard-arrow-down"
                    />
                  );
                }}
                buttonTextStyle={Styles.text14M}
                buttonTextAfterSelection={(selectedItem, index) => {
                  return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                  return item;
                }}
                rowTextStyle={Styles.text14M}
              />





              {/* <TouchableOpacity style={styles.dropdownButton}>
                <Text style={[Styles.text14M, {color: color.black}]}>
                  Diseases
                </Text>
                <MaterialIcons
                  color={color.black}
                  size={18}
                  name="keyboard-arrow-down"
                />
              </TouchableOpacity> */}
            </View>

            <PaddingBox />

            {/* <View style={[styles.row, {justifyContent: 'space-between'}]}>
              <TouchableOpacity style={styles.dropdownButton}>
                <Text style={[Styles.text14M, {color: color.black}]}>
                  Side effects
                </Text>
                <MaterialIcons
                  color={color.black}
                  size={18}
                  name="keyboard-arrow-down"
                />
              </TouchableOpacity>
            </View> */}
          </View>

          <PaddingBox style={20} />
          <View style={styles.line} />
          <PaddingBox style={30} />
        </Box>
        <View style={styles.textInput}>
          <TextInput
            placeholder={'Comment'}
            placeholderTextColor={color.black}
            value={comment}
            onChangeText={t => setcomment(t)}
            style={[
              {flex: 1, textAlignVertical: 'top', margin: 8},
              Styles.text12M,
            ]}
          />
        </View>

        {/* <View style={styles.flatListView}>
          <TouchableOpacity
            onPress={() => handleSlideLeft()}
            style={styles.iconSide}
          >
            <MaterialIcons
              name="arrow-back-ios"
              size={24}
              color={color.black}
            />
          </TouchableOpacity>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={aryData}
            ref={imageFlatList}
            renderItem={renderImageItem}
            ItemSeparatorComponent={() => <VerticalBox style={scale(15)} />}
            keyExtractor={(item, index) => (item, index).toString()}
            onScroll={e => {
              setImageIndex(
                parseInt(e.nativeEvent.contentOffset.x / (width / 4.6)),
              );
            }}
          />
          <TouchableOpacity
            onPress={() => handleSlideRight()}
            style={styles.iconSide}
          >
            <MaterialIcons
              name="arrow-forward-ios"
              size={24}
              color={color.black}
            />
          </TouchableOpacity>
        </View> */}
        <PaddingBox style={30} />
      </ScrollView>
    </View>
  );
};

export default MedicineDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
  },
  row: {
    flexDirection: 'row',
  },
  iconSide: {
    marginHorizontal: 10,
  },
  subContainer: {
    flex: 1,
    backgroundColor: color.descGrayModal,
    // paddingHorizontal: 15,
  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  detailView: {
    marginStart: 8,
  },
  imageConatiner: {
    width: scale(90),
    height: scale(90),
    backgroundColor: color.primary,
    borderBottomStartRadius: 4,
    borderTopStartRadius: 4,
  },
  image: {
    width: scale(56),
    height: scale(50),
    backgroundColor: color.primary,
  },
  line: {
    borderBottomWidth: 1,
    borderColor: color.lightGray,
    marginHorizontal: 12,
  },

  leftSide: {
    width: '70%',
  },
  flatListView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: widthPercentageToDP(20),
  },
  dropdownButton: {
    borderWidth: 1,
    borderColor: color.primary,
    height: scale(34),
    width: '47%',
    alignItems: 'center',
    paddingHorizontal: 12,
    borderRadius: 6,
    justifyContent: 'space-between',
  },
  textInput: {
    width: '90%',
    minHeight: 130,
    borderWidth: 1,
    borderColor: color.lightGray,
    alignSelf: 'center',
    borderRadius: scale(5),
  },
});
