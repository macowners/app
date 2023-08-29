import * as React from 'react';
import { Text, View,Image,Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import backPng from '../../assets/back.png';
import backCalPng from '../../assets/cak_back2.png';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import {useState,useEffect} from "react";
import Calendar from './Calendar'

const widths = Dimensions.get('window').width;
const heights = Dimensions.get('window').height;




function HomeScreen() {
 




  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' ,}}>
      <Image source={backPng} style={{
        width:widths,
        height:heights,
        position:'absolute',
        
      }}/>

   
      <Text
          style={{
            fontWeight:'bold',
            color:'gray',
            
          }}
        >
        오늘의 총 공부시간
      </Text>

      <Text
      style={{
        fontSize:60,
        fontWeight:'bold',
        color:'#222'
      }}>
        00:00:00

      </Text>
    </View>
  );
}



function SettingsScreen2() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

function SettingsScreen3() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}


const Tab = createBottomTabNavigator();

export default function Router() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator screenOptions={{
        headerShown:false,
  
      }}
        tabBarOptions={{
          activeTintColor:'black',
          inactiveTintColor:'gray'
        }}
      >
        <Tab.Screen name="공부량" component={HomeScreen} 
        options={{
          tabBarIcon:({focused})=>(
            <Ionicons
                name="home"
                style={{
                  color: focused ? 'black' : 'gray'
                }}  
                       
            />
          )
        }}/>
        <Tab.Screen name="날짜 플래너" component={Calendar} 
         options={{
          tabBarIcon:({focused})=>(
            <Ionicons
                name="today"
                style={{
                  color: focused ? 'black' : 'gray'
                }}
            />
          )
        }}
        />
        <Tab.Screen name="Settings2" component={SettingsScreen2} />
         <Tab.Screen name="Settings3" component={SettingsScreen3} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}