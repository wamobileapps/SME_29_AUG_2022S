import AsyncStorage from "@react-native-async-storage/async-storage"
import uuid from 'react-native-uuid';
export const getToken =async ()=>{
    const token =  await AsyncStorage.getItem("token");
    if(token == null) {
        const tokens= uuid.v4();
       await AsyncStorage.setItem("token", tokens);
        return tokens
    } else{
        return token
    }
}