import { StyleSheet, Text, View, TextInput , Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { color } from '../comman/theme'
import { scale } from 'react-native-size-matters'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { PaddingBox } from '../comman/alignBox'
import images from '../comman/images'
import { Styles } from '../comman/styles';

const TextInputView = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftIcon}>
        <Image 
          source={props.leftIcon}
          style={styles.leftStyle}
        />
      </View>
      <View style={{marginVertical:15}}>
        <View>
          <Text style={Styles.text14R}>
            {props.heading}
          </Text>
        </View>
        <PaddingBox style={scale(7)} />
        <View style={props.rightIcon ?{width:wp("60%")}:{width:wp("70%")}}> 
          <TextInput 
            {...props}
            style={{...styles.textinput}}
          />
        </View>
      </View>
      {props.rightIcon  &&
            <TouchableOpacity style={{...styles.leftIcon, ...styles.right}}>
            <Image 
              source={images.EYE}
              style={styles.leftStyle}
            />
          </TouchableOpacity>
      }
    </View>
  )
}

export default TextInputView

const styles = StyleSheet.create({
  container:{
    width:wp(90),
    borderWidth:1,
    height:scale(60),
    borderColor:color.border,
    paddingVertical:scale(5),
    alignSelf:"center",
    borderRadius:scale(10),
    flexDirection:"row",
    alignItems:"center",
  },
  leftStyle:{
      width:scale(25),
      height:scale(25)  
  },
  textinput:{
    width:"100%",
    padding:0,
    ...Styles.text14R
  },
  right:{
    position:"absolute",
    right:10,
  },
  leftIcon:{
    width:"15%",
    alignItems:"center",
    justifyContent:"center",

  },
})