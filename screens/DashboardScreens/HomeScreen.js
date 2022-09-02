import {StyleSheet, Text, View, StatusBar, FlatList, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Styles} from '../../comman/styles';
import {color} from '../../comman/theme';
import {Box, Center, PaddingBox, VerticalBox} from '../../comman/alignBox';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import TopTabs from '../../components/TopTabs';
import {scale, verticalScale} from 'react-native-size-matters';
import images from '../../comman/images';
import Button from '../../components/Button';
import * as authAction from "../../redux/actions/authAction";
import { useDispatch } from 'react-redux';
import Loader from '../../comman/Loader';
import { History } from '../../comman/const';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const HomeScreen = props => {
  const dispatch = useDispatch();
  const [data, setdata] = useState([]);
  const [activeTabs, setactiveTabs] = useState('A');
  const [loading, setloading] = useState(true)
  const [fullData, setfullData] = useState([]);
  const [limit, setlimit] = useState(3);
  const [offset, setoffset] = useState(0);
  const [isSeeMore, setisSeeMore] = useState(true);

  useEffect(() => {
    dispatch(authAction.getMedicineData())
    .then(result => {
          setisSeeMore(true)
          if(result.length !=0 ){
            setfullData(result);
            setdata(result.slice(0,3))
            setloading(false);
          }else{
            setloading(false);
          }
    })
  }, []);

  const onChangeTabs = value => {
    setactiveTabs(value);
  };


  const onLoadMoreData = () =>{
      try {
       let newLoad = fullData.slice(offset+3,limit+3);
       if(newLoad.length != 0){
        console.log(newLoad.length);
        setdata([...data,...newLoad])
        setoffset(offset+3)
        setlimit(limit+3)
        console.log(offset+3, limit+3);
       }else{
          setisSeeMore(false)
       }
      } catch (error) {
        
      }
  }
  

  const renderItem = ({item, index}) => (
    <View style={styles.listContainer}>
      <View style={styles.leftSide}>
        <View style={styles.rowList}>
          <View style={styles.imageConatiner}>
            {item.imageUrl ?
            <Image source={{uri:item.imageUrl}} style={styles.image} />
              :
            <Image source={images.DOC} style={styles.image} />
              }
          </View>
          <View style={styles.textConatiner}>
            <Text style={Styles.text14SOB} numberOfLines={2}>{item.name}</Text>
            <Text style={[Styles.text12MB,{color:"#9095A1FF"}]} numberOfLines={2}>
           {item.scientificName}
            </Text>
          </View>
        </View>
        <PaddingBox />
          <Text style={Styles.text12MB} numberOfLines={2}>
            {item.comment}
          </Text>
      </View>
      <View style={styles.rightSide}>
          <Button name="quick add"  onPress={()=>{}}/>
          <PaddingBox />
          <Button name="add" onPress={()=>{}} />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Loader loading={loading} />
      <StatusBar backgroundColor={color.white} barStyle="dark-content" />
      <Header name="Profile listing" isleftIcon={true}  navigation={props.navigation} />
      <PaddingBox />
      <Box>
        <SearchBar />
        <PaddingBox />
      </Box>
      <TopTabs activeTabs={activeTabs} onChangeTabs={onChangeTabs} />
      <TouchableOpacity style={styles.floting}>
          <Image source={images.NEWSPAPER} style={styles.flotingImage} />
      </TouchableOpacity>
      <FlatList
        data={activeTabs == "A"? History:data}
        renderItem={renderItem}
        initialNumToRender={3}
        keyExtractor={(item,index) => (item+index).toString()}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => <PaddingBox />}
        ItemSeparatorComponent={() => <PaddingBox />}
        ListFooterComponent={() =>
          <>
          {activeTabs == "B" ?
          <View style={styles.footerView}>
            <TouchableOpacity onPress={()=>onLoadMoreData()} style={Styles.row}>
            <Text style={[Styles.text14MR,{color:color.primary}]}>
             {isSeeMore ? "See More" :"No More"  }  
             </Text>
             <VerticalBox style={5} />
             <MaterialIcons name="keyboard-arrow-down" size={24} color={color.primary} />
            </TouchableOpacity>
          </View>
          :
            <PaddingBox />
          }
          </>
        }
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
  floting:{
    position:"absolute",
    bottom:10,
    right:10,
    zIndex:100,
  },
  footerView:{
    width:"100%",
    alignItems:"center",
    justifyContent:"center",
    flexDirection:"row",
    marginVertical:20,
  },
  flotingImage:{
    width:scale(60),
    height:scale(60),
  },
  textConatiner:{
    width:"70%",
    paddingHorizontal:10,
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
    borderRadius:50,
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
    elevation: 3,
    borderRadius: scale(6),
    flexDirection: 'row',
    padding: 10,
    paddingHorizontal:12,
    paddingVertical:verticalScale(15),
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
});
