import * as React from 'react';
import { Text, View,Image,Dimensions,Keyboard } from 'react-native';

import backCalPng from '../../assets/cak_back2.png';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import {useState,useEffect} from "react";



const widths = Dimensions.get('window').width;
const heights = Dimensions.get('window').height;
let today  = new Date();

export default function Calendar() {



    const [check,SetCheck] = useState(false);
    const [title,SetTitle] = useState('');
    const [desc,SetDesc] = useState('');
  


    const [clickDay,SetclickDay] = useState(false);
    const [TitleArr,setTitleArr] = useState([]);
    const [descArr,setdescArr] = useState([]);
    
    const brr = [];

    for(let i = 0; i < 31; i++){
        brr.push('');
    }
    
    useEffect(()=>{
        setTitleArr(brr);
        setdescArr(brr);
    },[])
 

    return (
      <View style={{ 
        flex: 1, 
        alignItems:'center',
        paddingTop: heights * 0.08,
        backgroundColor:"white",

      }}>
  
  <Image source={backCalPng} style={{
          width:widths,
          height:heights,
          position:'absolute',
          
        }}/>
        
          <Text
            style={{
              textAlign:'center',
              fontSize:35,
              fontWeight:'bold',
              marginBottom:heights*0.04,
              color:'white'
  
            }}
          >{today.getMonth()+1}월</Text>
  
      
  
          <View
            style={{
              width:widths - widths * 0.05,
              height:heights,
              flexDirection: 'row',
              flexWrap:'wrap',
              
              
            }}
          >
          {
            TitleArr.map((a,i)=>{
              return <TouchableOpacity
                style={{
             
                  width:(widths - widths * 0.05 ) / 5.5,
                  height:widths / 5.5,
                  padding:widths * 0.015,
                  borderColor: i+1 == today.getDate() ? '#007CC7': '#00516D',
                  borderCollapse:'collapse',
                  borderTopColor:i+1 == today.getDate() ? "#007CC7" : "#00516D",
                  borderTopWidth: widths * 0.02,
                  borderWidth: i+1 == today.getDate() ? 2 : 1.5,
                  borderRadius: widths * 0.015,
                  margin:widths*0.008,
                }}
                
                activeOpacity={0.5}
               onPress={()=>{
                
                SetCheck(!check)
                SetclickDay(i+1)
               }}
              >
                <Text
                  style={{
                    color:'gray',
                    marginBottom:heights * 0.005,
                    fontSize:13
                  }}
                >{i+1}</Text>
  
                <Text 
                  style={{
                    fontSize:10,
                    color:'gray',
                    fontWeight:'bold'
                  }}
                >
                  {TitleArr[i]}
                </Text>
              </TouchableOpacity>
            })
          }

          
          </View>

       
        <View  
          style={{
            top:check ?  heights *0 : heights * 2,
            width:widths,
            height:heights,
            backgroundColor:'white',
            position:'absolute',
           
            
            borderRadius:10,
            
          }}
       
         >
          <TouchableOpacity
            activeOpacity={1}
          style={{
            padding:widths * 0.1,
            paddingTop:heights * 0.1,
            width:widths,
            height:heights,
          
          }}
          onPress={
            Keyboard.dismiss
          }
          >
            
          <Text
                style={{
                    fontSize:35,
                    marginBottom:heights*0.03
                    
                }}
            >
                {
                    today.getFullYear()+"년 "
                }
                
                {
                    today.getMonth()+"월 "
                }
                
                {
                    clickDay
                }
                일
            </Text>
            
            <TextInput 
                onChangeText={newText => SetTitle(newText)}
                style={{
                    padding: 10,
                    backgroundColor:"#f9f9f9",
                    borderRadius:10,
                    fontSize:20,
                }}
                defaultValue={TitleArr[clickDay-1]}
                placeholder={"간단한 제목"}
            />

            <TextInput

               
                
                onChangeText={newText => SetDesc(newText)}
                multiline
                numberOfLines={4}
                maxLength={200}

                style={{
                    marginTop:heights*0.03,
                    height:heights*0.3,
                    padding: widths * 0.05,
                    backgroundColor:"#f9f9f9",
                    borderRadius:10,
                    fontSize:20,
                }}
               
                defaultValue={descArr[clickDay-1]}
                placeholder={"내용을 입력해주세요."}
            />

            <View style={{
                marginTop:heights * 0.05,
               
                width: widths * 0.8,
                height:heights * 0.08,
                flexDirection:'row',
                alignItems:'center',
                justifyContent:'space-between',
                
                
            }}>
                <TouchableOpacity
                    style={{
                        borderRadius: widths * 0.02,
                        alignItems:'center',
                        justifyContent:'center',
                        backgroundColor:'#eee',
                        width:widths * 0.38,
                        height: heights * 0.08,
                    }}

                    onPress={
                        ()=>{
                            SetCheck(!check)
                        }
                    }
                >
                    <Text
                      style={{
                        color:'#555',
                        fontSize:20,
                        fontWeight:'bold'
                    }}
                    >나가기</Text>
                </TouchableOpacity>

                <TouchableOpacity
                 style={{
                    borderRadius: widths * 0.02,
                    alignItems:'center',
                    justifyContent:'center',
                    backgroundColor:'#222',
                    width:widths * 0.38,
                    height: heights * 0.08,
                }}
                onPress={
                    ()=>{
                        TitleArr[clickDay-1]=title;
                        descArr[clickDay-1]=desc;
                        setTitleArr(TitleArr);
                        setdescArr(descArr);
                        SetCheck(!check);
                    }
                }
                >
                    <Text


                        style={{
                            color:'white',
                            fontSize:20,
                            fontWeight:'bold'
                        }}
                    >저장하기</Text>
                </TouchableOpacity>
            </View>
          </TouchableOpacity>
              
         </View >
      
      </View>
    );
  }