import React from "react";
import { View, Text,Button,Dimensions,TextInput,StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import AsyncStorage from '@react-native-async-storage/async-storage';


const widths = Dimensions.get('window').width;
const heights = Dimensions.get('window').height;

const setItem = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
    console.log(`setItem... ${key} : ${value}`);
  } catch (e) {
    throw e;
  }
};

let eamilValue = ""
let passwordValue = ""

function widthMedia(size){
  return size * widths
}

function heighMedia(size){
  return size * widths
}

function Login({navigation}) {
  
  function Post(){

    fetch('http://13.124.237.156:3000/api/sign/in',{
      method:'POST',
      headers:{
          Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body:JSON.stringify({
         
          email:eamilValue,
          password:passwordValue  
      })
    })
    .then((res) => res.json())
    .then((data) =>{
      console.log(data);
   
        if(data.status == 200){
          alert("로그인에 성공하였습니다.");
          setItem("login","ok")
          navigation.push('Routers')
          console.log(data);
        }
        else{
          alert("로그인에 실패하였습니다.");
        }

  
    })
    .catch(error => {console.log(error)})
  
  }

  
  
  return (
    <View
      style={{
        paddingTop:heights*0.1,
        alignItems:'center',
        width:widths,
        height:heights,
      
     
      }}
      >
       <TextInput
       onChangeText={newText => eamilValue = newText}
        style={styles.textInput}
        placeholder="이메일 입력"
       />
       
       <TextInput
       onChangeText={newText => passwordValue = newText}
       style={styles.textInput}
        placeholder="비밀번호 입력"
       />

       <TouchableOpacity
        style={{
          width:widthMedia(0.9),
          height:heighMedia(0.15),
      
     
          backgroundColor:'#FC7611',
          alignItems:'center',
          justifyContent:'center',
          padding:10,
          borderRadius:10,
          marginTop:heighMedia(0.9)
        }}
        onPress={
          ()=>{
            setItem("login","ok")
            Post()
          }
        }>
        <Text style={{
          color:'white',
          fontSize:25,
          fontWeight:'bold',
          alignSelf:'center'

        }}>
          로그인
        </Text>
       </TouchableOpacity>

       <TouchableOpacity
        style={{
          width:widthMedia(0.9),
          height:heighMedia(0.15),
          backgroundColor:'#FFAB48',
          alignItems:'center',
          justifyContent:'center',
          padding:10,
          borderRadius:10,
          marginTop:heighMedia(0.05),
          
        }}
        onPress={
          ()=>navigation.pop()
        }>
        <Text style={{
          color:'white',
          fontSize:25,
          fontWeight:'bold'
        }}>
          돌아가기
        </Text>
       </TouchableOpacity>
       
    </View>
  );
}

const styles = StyleSheet.create({
    textInput:{
      backgroundColor:'#e9e9e9',
      marginTop: widthMedia(0.05),
      height: heighMedia(0.15),
      width:widthMedia(0.9),
      padding:widthMedia(0.03),
      borderRadius:10
    }
})

export default Login;