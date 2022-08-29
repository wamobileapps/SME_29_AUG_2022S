import { StyleSheet } from "react-native";
import { color } from "./theme";

export const Styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:color.white
    },
    containerBorder:{
        borderColor: color.otpColor,
        backgroundColor: color.white,
        borderWidth: 1,
        width: '100%',
        fontFamily: 'Helvetica-light',
        borderRadius: 15,
        justifyContent: 'space-between',
        flexDirection:"row"
    },
    cricleGreen:{
        borderRadius:50,
        width:15,
        height:15,
        backgroundColor:color.green,
        elevation:2,
        position:"absolute",
        left:5,top:5,
    },
    inputBox:{
        width:"100%",
        paddingVertical:5,
        paddingHorizontal:10,
        borderRadius:30,
        borderWidth:1,
        borderColor:color.secondary,
    },
    cricleRed:{
        borderRadius:50,
        width:15,
        height:15,
        backgroundColor:color.red,
        elevation:2,
        position:"absolute",
        left:5,top:5,
    },
    cricleBlue:{
        borderRadius:50,
        width:15,
        height:15,
        backgroundColor:"#00FFFF",
        elevation:2,
        position:"absolute",
        left:5,top:5,
    },
    center :{
        alignSelf:"center"
    },
    alignVCenter:{
        alignItems:"center"
    },
    inputStyle:{
        backgroundColor:color.white,
        height:45,
    },
    inputHalfStyle:{
        backgroundColor:color.white,
        height:45,
        width:'49%'
    },
    start1:{
        flexDirection:"row",
        // backgroundColor:color.green,
        paddingVertical:2,
        borderRadius:30,
        
    },
    footerView:{
        position: 'absolute',
        bottom: 0,
        height: 80,
        width: '100%',
        paddingHorizontal: 20,
        elevation: 10,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: color.white,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    start:{
        flexDirection:"row",
        paddingHorizontal:5,
        backgroundColor:color.green,
        paddingVertical:1,
        borderRadius:30,
    },
    lineVertical:{
        backgroundColor:color.white,
        width:2,
        height:'80%'
    },
    containerWithBG:{
        flex: 1,
        backgroundColor:color.secondary
    },
    containerT:{
        flex: 1,
    },
    verticalLine:{
        width:2,
        backgroundColor:"#F5F5F5",
        height:'100%'
    },
    row:{
        flexDirection:"row",
        alignItems:"center",
    },
    rowAlign:{
        flexDirection:"row",
        // alignItems:"center",
        justifyContent:"space-between",
    },
    rowBet:{
        flexDirection:"row",
        justifyContent:"space-between",
    },
    arrowStyle:{
        marginHorizontal:10,
        marginTop:10,
        height:40,
        width:40,
        borderRadius:10,
    },
    centerItems:{
        alignSelf:"center",
        justifyContent:"center",
        alignItems:"center"
    },
    text12L:{
        fontFamily:"Helvetica-light", 
        fontSize:12,
    },
    text12M:{
        fontFamily:"Helvetica", 
        fontSize:12,
    },
    text12RCGM:{
        fontFamily:"Helvetica", 
        fontSize:12,
        color:color.greyMedium,
    },
    text12R:{
        fontFamily:"Helvetica-Bold", 
        fontSize:12,
        color:color.black
    },
    text9R:{
        fontFamily:"Helvetica", 
        fontSize:9,
    },
    text18SN:{
        fontFamily:"Helvetica-Bold",
        fontSize:18,
    },
    text14L:{
        fontFamily:"Helvetica-light", 
        fontSize:14,
    },
    text14LR:{
        fontFamily:"Helvetica-light", 
        fontSize:14,
        color:color.red,
        paddingHorizontal:5,
        paddingTop:2
    },
    text14SB:{
        fontFamily:"Helvetica-Bold", 
        fontSize:14,
    },
    text14B:{
        fontFamily:"Helvetica-Bold", 
        fontSize:14,
        color:color.black
    },
    text14R:{
        fontFamily:"Helvetica", 
        fontSize:14,
        color:color.black
    },
    text14M:{
        fontFamily:"Helvetica", 
        fontSize:14,
    },
    text16B:{
        fontFamily:"Helvetica-Bold", 
        fontSize:16,
        color:color.black
    },
    text16LB:{
        fontFamily:"Helvetica-Bold", 
        fontSize:16,
    },
    text16R:{
        fontFamily:"Helvetica", 
        fontSize:16,
    },
    text16M:{
        fontFamily:"Helvetica", 
        fontSize:16,
        color:color.black
    },
    text18R:{
        fontFamily:"Helvetica", 
        fontSize:18,
    },
    text18SB:{
        fontFamily:"Helvetica-Bold",  
        fontSize:18,
    },
    text18M:{
        fontFamily:"Helvetica",  
        fontSize:18,
    },
    text15L:{
        fontFamily:"Helvetica-light", 
        fontSize:15,
        color:color.black
    },
    text10L:{
        fontFamily:"Helvetica-light", 
        fontSize:10,
    },
    text10M:{
        fontFamily:"Helvetica", 
        fontSize:10,
    },
    text15R:{
        fontFamily:"Helvetica", 
        fontSize:15,
    },
    text15B:{
        fontFamily:"Helvetica-Bold", 
        fontSize:15,
    },
    text15RCB:{
        fontFamily:"Helvetica", 
        fontSize:18,
        color:color.greyMedium,
    },
    text15RCR:{
        fontFamily:"Helvetica", 
        fontSize:18,
        color:color.white
    },
    text15M:{
        fontFamily:"Helvetica", 
        fontSize:15,
    },
    text20M:{
        fontFamily:"Helvetica", 
        fontSize:20,
    },
    text20SM:{
        fontFamily:"Helvetica-Bold", 
        fontSize:20,
    },
    text20R:{
        fontFamily:"Helvetica", 
        fontSize:20,
    },
    text10R:{
        fontFamily:"Helvetica", 
        fontSize:10,
    },
    text22SB:{
        fontFamily:"Helvetica-Bold",
        fontSize:22,
        color:color.black
    },
    text22B:{
        fontFamily:"Helvetica-Bold",
        fontSize:22,
        color:color.black
    },
    alignbetween:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
    },
    alignEvenly:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-evenly",
    },
    textError:{
        fontFamily:"Helvetica", 
        fontSize:10,
        color:color.red,
        paddingVertical:5,
        paddingHorizontal:5,
    },
    salfAlig:{
        // alignSelf:"center",
    },
    white:{color: color.white},
    black:{color: color.black},
})