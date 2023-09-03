import * as React from 'react';
import { Text, View,Image,Dimensions,Keyboard,Platform ,KeyboardAvoidingView,Animated } from 'react-native';

import backCalPng from '../../assets/cak_back2.png';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import {useState,useEffect} from "react";

const widths = Dimensions.get('window').width;
const heights = Dimensions.get('window').height;
let today  = new Date();

const MonthDayArr = [31,28,31,30,31,30,31,31,30,31,30,31];

export default function Calendar() {
    const [check,SetCheck] = useState(false);
    const [title,SetTitle] = useState('');
    const [desc,SetDesc] = useState('');

    todayDate = new Date(`${today.getFullYear()}-${today.getMonth()+1}-1`).getDay();


    const [clickDay,SetclickDay] = useState(false);
    const [TitleArr,setTitleArr] = useState([]);
    const [descArr,setdescArr] = useState([]);

    const brr = [];

    for(let i = 0; i < 42; i++){
        brr.push('');
    }

    useEffect(()=>{
        setTitleArr(brr);
    },[])

    
    const fadeAnim = React.useRef(new Animated.Value(heights)).current;

    const Up = () => {
    
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start();
    };

    const Down = () => {
     
      Animated.timing(fadeAnim, {
        toValue: heights,
        duration: 500,
        useNativeDriver: true,
      }).start();
    };

    return (
      <View style={{
        flex: 1,
        alignItems:'center',
        paddingTop: Platform.OS == 'ios' ? heights * 0.07 : heights * 0.03,
        backgroundColor:'black'

      }}>

      {/* <Image source={backCalPng} style={{
              width:widths,
              height:heights,
              position:'absolute',

            }}/> */}

          <Text
            style={{
              textAlign:'center',
              fontSize:35,
              fontWeight:'bold',
              marginBottom:heights*0.03,
              color:'white',


            }}
          >{today.getMonth()+1}월</Text>


          <View
            style={{
              width:widths - widths * 0.05,
              flexDirection: 'row',
              marginBottom:heights * 0.01,
              borderBottomWidth:heights * 0.0005,
              borderColor:'white',
              paddingBottom:heights * 0.01
            }}
          >
               <Text
                style={{
                  textAlign:'center',
                  width: (widths - widths * 0.05 )  / 7,
                  color:'#FC5E5E',
                }}
              >일</Text>

               <Text
                style={{
                  textAlign:'center',
                  width: (widths - widths * 0.05 )  / 7,
                  color:'white',
                }}
              >월</Text>
               <Text
                style={{
                  textAlign:'center',
                  width: (widths - widths * 0.05 )  / 7,
                  color:'white',
                }}
              >화</Text>
               <Text
                style={{
                  textAlign:'center',
                  width: (widths - widths * 0.05 )  / 7,
                  color:'white',
                }}
              >수</Text>
               <Text
                style={{
                  textAlign:'center',
                  width: (widths - widths * 0.05 )  / 7,
                  color:'white',
                }}
              >목</Text>
               <Text
                style={{
                  textAlign:'center',
                  width: (widths - widths * 0.05 )  / 7,
                  color:'white',
                }}
              >금</Text>
               <Text
                style={{
                  textAlign:'center',
                  width: (widths - widths * 0.05 )  / 7,
                  color:'#0092F7',
                  
                }}
              >토</Text>

              
          </View>
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

                  width:(widths - widths * 0.05 ) / 7,
                  height:widths / 4,
                  padding:widths * 0.015,
                  borderColor:  i-1 == today.getDate() ? 'gold' : !(i-todayDate+2 >= 1 && i-todayDate+1 < 31) ? 'white': new Date(`${today.getFullYear()}-${today.getMonth()+1}-${i-todayDate+1}`).getDay() == 0 ? '#FC5E5E' : new Date(`${today.getFullYear()}-${today.getMonth()+1}-${i-todayDate+1}`).getDay() == 6 ? '#0092F7' : 'white',
                  borderCollapse:'collapse',
                  borderUpWidth: widths * 0.001,    
                }}

               activeOpacity={0.5}

               onPress={()=>{
                if(i-todayDate+1 >= 1 && i-todayDate+1 <= MonthDayArr[today.getMonth()]){
                  Up()
                  SetclickDay(i+1)
                }
               }}
              >
                <Text
                  style={{
                    color: i-1 == today.getDate() ?  'gold' : new Date(`${today.getFullYear()}-${today.getMonth()+1}-${i-todayDate+1}`).getDay() == 0 ? '#FC5E5E' : new Date(`${today.getFullYear()}-${today.getMonth()+1}-${i-todayDate+1}`).getDay() == 6 ? '#0092F7' : 'white',
                    marginBottom:heights * 0.005,
                    fontSize:13,
                    textAlign:'center',
                      
                  }}
                >{(i-todayDate+1 >= 1 && i-todayDate+1 <= MonthDayArr[today.getMonth()] ? i-todayDate + 1 : '')}</Text>

                <Text
                  style={{
                    fontSize:10,
                    color:'white',
                    fontWeight:'bold',
                   
                  }}
                >
                  {TitleArr[i]}
                </Text>
              </TouchableOpacity>
            })
          }


          </View>


        <Animated.View
          style={{
            top: 0,
            paddingTop: Platform.OS == 'ios' ? heights * 0.07 : heights * 0.03,
            width:widths,
            height:heights,
            backgroundColor:'white',
            position:'absolute',
            borderRadius:widths * 0.1,
            transform: [{
              translateY: fadeAnim
            }]
          }}

         >
          <TouchableOpacity
            activeOpacity={1}
            style={{
            padding:widths * 0.1,
            paddingUp: Platform.OS == 'ios' ? heights * 0.1 : heights * 0.08,
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
                    today.getMonth()+1+"월 "
                }

                {
                    clickDay-todayDate
                }
                일
            </Text>


            <KeyboardAvoidingView
            
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
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



                onChangeText={newTexts => SetDesc(newTexts)}
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
            </KeyboardAvoidingView>
           

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
                        borderRadius: widths ,
                        alignItems:'center',
                        justifyContent:'center',
                        backgroundColor:'#eee',
                        width:widths * 0.36,
                        height: heights * 0.07,
                    }}

                    onPress={
                      Down
                    }
                >
                    <Text
                      style={{
                        color:'#555',
                        fontSize:20,
                        fontWeight:'bold',
                       
                    }}
                    >나가기</Text>
                </TouchableOpacity>

                <TouchableOpacity
                 style={{
                    borderRadius: widths,
                    alignItems:'center',
                    justifyContent:'center',
                    backgroundColor:'black',
                    width:widths * 0.36,
                    height: heights * 0.07,
                }}
                onPress={
                    ()=>{
                        TitleArr[clickDay-1]=title;
                        descArr[clickDay-1]=desc;
                        setTitleArr(TitleArr);
                        setdescArr(descArr);
                        Down()
                        SetTitle('');
                        SetDesc('');
                    }
                }
                >
                    <Text


                        style={{
                            color:'white',
                            fontSize:20,
                            fontWeight:'bold',
                        }}
                    >저장하기</Text>
                </TouchableOpacity>

          </View>
          </TouchableOpacity>

         </Animated.View >

      </View>
    );
  }