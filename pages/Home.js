
import { StyleSheet,Image,TouchableOpacity, Text, View , ScrollView, TextInput,Dimensions, Button } from 'react-native';
import bookImage from '../assets/book.png'
import "react-native-gesture-handler";
import React, { useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
// import login from "./login";
// import Signup from "./signup";

export default function Home({navigation}) {

  const widths = Dimensions.get('window').width;
  const heights = Dimensions.get('window').height;

  check = async () => {
    try {
      const value = await AsyncStorage.getItem('login');
      if (value !== null) {
        // We have data!!
        console.log(value);
        navigation.push("Routers")
      }
    } catch (error) {
      // Error retrieving data
    }
  };

  check();


  return (
    <View  style={{
        flex: 1,
    
        width:widths,
        height:heights,
        backgroundColor: 'white',
        opacity:1,

        }}>

        <View style={{
            flex: 1,
        
            width:widths,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
            position:'absolute',
            bottom: heights * 0.1

            }}>
                <Image
                    source={
                        bookImage
                    }
                    style={{
                        width:widths - widths * 0.2,
                        height: widths - widths * 0.2
                    }}
                    ></Image>
                    
                    <TouchableOpacity style={{
                    backgroundColor:"#FC7611",
                    width:widths - widths*0.2,
                    alignItems:'center',
                    justifyContent:'center',
                    marginTop:heights * 0.1,
                    marginBottom: heights*0.02,
                    padding:widths*0.02,
                    borderRadius:heights*0.01
                    }}
                    onPress={() => 
                    navigation.navigate("Login")
                    }
                    >
                    <Text
                        style={{
                        fontSize:widths * 0.1,
                        color:'white',
                        fontWeight:'bold'
                        }}
                    >로그인</Text>
                    </TouchableOpacity>
                
                    <TouchableOpacity style={{
                    backgroundColor:"#FFAB48",
                    width:widths - widths*0.2,
                    alignItems:'center',
                    justifyContent:'center',
                    marginBottom: heights*0.02,
                    padding:widths*0.02,
                    borderRadius:heights*0.01
                    }}
                    onPress={() => 
                    navigation.navigate("Signup")
                    }
                    >
                    <Text

                        style={{
                        fontSize:widths * 0.1,
                        color:'white',
                        fontWeight:'bold'
                        }}
                    >회원가입</Text>
                    </TouchableOpacity>
        </View>
    </View>

  )
  }