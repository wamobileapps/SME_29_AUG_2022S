import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import {Styles} from '../comman/styles';
import {scale} from 'react-native-size-matters';
import {color} from '../comman/theme';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const SearchBar = ({}) => {
  return (
    <View style={styles.container}>
      <View style={styles.searchBarConatiner}>
        <EvilIcons name="search" size={24} color="black" />
        <TextInput 
            placeholder='Search Disease'
            style={styles.textInput}
        />
      </View>
      <View style={styles.filterConatiner}>
         <AntDesign name="filter" size={20} color={"#565D6DFF"} />
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    height: scale(40),

  },
  filterConatiner: {
    flexDirection: 'row',
    width: '15%',
    height: '100%',
    backgroundColor: '#F3F4F6FF',
    borderRadius: scale(6),
    alignItems:"center",
    justifyContent:"center",
  },
  textInput:{
      ...Styles.text14SOR,
      width:"90%",
      height:"100%",
      padding:0,
      paddingHorizontal:10
    //   backgroundColor:color.red
  },
  searchBarConatiner: {
    flexDirection: 'row',
    width: '80%',
    height: '100%',
    backgroundColor: '#F3F4F6FF',
    borderRadius: scale(6),
    alignItems:"center",
    paddingHorizontal:10,
  },
});
