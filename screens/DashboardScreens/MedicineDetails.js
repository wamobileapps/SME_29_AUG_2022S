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

const width = Dimensions.get('window').width;

const MedicineDetails = props => {
  const dispatch = useDispatch();
  const [loading, setloading] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const [selectedItem, setSelectedItem] = useState(2);
  const imageFlatList = useRef();

  useEffect(() => {}, []);
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
        }}
      >
        <Text
          style={[
            item == selectedItem ? Styles.text14B : Styles.text12MB,
            {
              marginTop: 6,
              color: item == selectedItem ? color.red : color.darkGray,
            },
          ]}
        >
          Pregnancy Category
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
          ]}
        >
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
        showsVerticalScrollIndicator={false}
      >
        <Box>
          <View style={styles.headerView}>
            <View style={styles.row}>
              <Image source={images.IMAGE} style={styles.imageConatiner} />
              <View style={styles.detailView}>
                <Text
                  style={[
                    Styles.text14SOR,
                    {fontWeight: '800', color: color.black},
                  ]}
                >
                  Medicine Name
                </Text>
                <Text
                  style={[
                    Styles.text12MB,
                    {marginTop: 3, color: color.darkGray},
                  ]}
                >
                  Sceintific name
                </Text>
                <Text
                  style={[
                    Styles.text12MB,
                    {marginTop: 3, color: color.darkGray},
                  ]}
                >
                  Pregnancy Category
                </Text>
                <Text
                  style={[Styles.text14MR, {marginTop: 3, color: color.black}]}
                >
                  Pill Amount
                </Text>
                <Text
                  style={[
                    Styles.text14MR,
                    {marginTop: 3, color: color.lightGray},
                  ]}
                >
                  Company
                </Text>
              </View>
            </View>
            <TouchableOpacity style={{marginTop: -8}} onPress={()=>{}}>
              <MaterialIcons name="arrow-back" size={26} color={color.black} />
            </TouchableOpacity>
          </View>
          <PaddingBox style={scale(20)} />
        </Box>

        <Box>
          <Text
            style={[Styles.text14SOR, {fontWeight: '800', color: color.red}]}
          >
            Dose Considuration
          </Text>
          <PaddingBox />

          <View>
            <FlatList
              data={[1, 2, 3, 4]}
              renderItem={renderItem}
              keyExtractor={(item, index) => (item, index).toString()}
            />
          </View>

          <PaddingBox style={50} />

          <View style={styles.line} />
          <PaddingBox style={20} />
          <View>
            <View style={styles.row}>
              <Text
                style={[
                  Styles.text14SOR,
                  {fontWeight: '800', color: color.black, width: '50%'},
                ]}
              >
                Serious Interaction
              </Text>

              <Text
                style={[
                  Styles.text14SOR,
                  {fontWeight: '800', color: color.black, width: '50%'},
                ]}
              >
                Serious Interaction
              </Text>
            </View>

            <View>
              <FlatList
                data={[1, 2, 3, 4]}
                renderItem={renderItemText}
                keyExtractor={(item, index) => (item, index).toString()}
              />
            </View>
            <PaddingBox style={20} />

            <View style={[styles.row, {justifyContent: 'space-between'}]}>
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
            </View>

            <PaddingBox />

            <View style={[styles.row, {justifyContent: 'space-between'}]}>
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
            </View>
          </View>

          <PaddingBox style={20} />
          <View style={styles.line} />
          <PaddingBox style={30} />
        </Box>
        <View style={styles.flatListView}>
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
        </View>
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
    marginTop: 20
  },
  detailView: {
    marginStart: 8,
  },
  imageConatiner: {
    width: scale(90),
    height: scale(90),
    backgroundColor: color.primary,
    borderBottomStartRadius: 4, 
    borderTopStartRadius: 4
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
    flexDirection: 'row',
    paddingHorizontal: 12,
    borderRadius: 6,
    justifyContent: 'space-between',
  },
});
