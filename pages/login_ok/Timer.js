import { Audio } from 'expo-av';
import { Text, View,Image,Dimensions,Platform,StyleSheet,Animated,Keyboard,PanResponder,TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import * as React from 'react';

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,

} from "react-native-chart-kit";

import { Ionicons } from '@expo/vector-icons';

import rain from '../../assets/rain.mp3';
import nature from '../../assets/nature.mp3';
import tide from '../../assets/tide.mp3';
import waterfall from '../../assets/waterfall.mp3';
import backPng from '../../assets/Timer.png'

const widths = Dimensions.get('window').width;
const heights = Dimensions.get('window').height;

function widthMedia(size){
  return size * widths
}

function heighMedia(size){
  return size * widths
}




export default function Time() {
  const timeCheck = React.useRef(false);
  const [bottomSheet,setBottomSheet] = React.useState(true);

  


  const [hour,setHour] = React.useState(0);
  const [minate,setMinate] = React.useState(0);

  const musicArr = [rain,nature,tide,waterfall];
  const [musicNumber,setMusicNumber] = React.useState(4);


    

    const [sound, setSound] = React.useState();
    const [studyTime,setStudyTime] =React.useState(0);
    const [musicName,setMusicName] =React.useState('tree');
    const studyRef = React.useRef(1);
    const timerSecond = React.useRef(0);
    const fadeAnim = React.useRef(new Animated.Value(heights)).current;


 
    const panResponder = React.useRef(
      PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onMoveShouldSetPanResponder: () => false,
       
        onPanResponderMove: (event, gestureState)=>{
          
          fadeAnim.setValue(gestureState.moveY)
        },
        onPanResponderRelease: (event, gestureState) => {
          if(gestureState.moveY > heights * 0.5 ||  gestureState.vy > 1.5) {
            
              Down()
              setBottomSheet(false)
          }
          
        
      }
      }),
    ).current;

    const TimerStart = () =>{
      setInterval(() => {
       
          if(timeCheck.current){
            setStudyTime((studyRef.current += 0.1))
        
            if(timerSecond.current == parseInt(studyRef.current)){
              timeCheck.current =false;
              timerSecond.current = 1;
              studyRef.current = 0;
              setStudyTime(0);
              setHour(0)
              setMinate(0)
              alert('공부 시간이 끝났습니다.');
            } 
          }

          
        
      }, 100);
    }
    
    React.useEffect(()=>{
      TimerStart()
    },[]);
    const Up = () => {
      setBottomSheet(!bottomSheet)
      Animated.timing(fadeAnim, {
        toValue: heights / 2 - heights * 0.15,
        duration: 500,
        useNativeDriver: true,
      }).start();
      
    };

    const Down = () => {
      setBottomSheet(!bottomSheet)
      Animated.timing(fadeAnim, {
        toValue: heights,
        duration: 500,
        useNativeDriver: true,
      }).start();
     
    };

    async function playSound(i) {
      console.log('Loading Sound');

     if(musicNumber != i){
        const { sound } = await Audio.Sound.createAsync(musicArr[i],{
          isLooping: true
        }
        );
        setSound(sound);

        console.log('Playing Sound');
        await sound.playAsync();
        setMusicNumber(i);
      }
      else{
        setMusicNumber(4);
        stop();
      }
    }

  React.useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  async function stop() {
    if(sound){
      console.log('stop Sound');
     await sound.stopAsync();
    }
  }

    return (
        <View
          style={{
            flex:1,
            paddingTop: Platform.OS == 'ios' ? heights * 0.09 : heights * 0.025,
            backgroundColor:'white',
            alignItems:'center',
            
          }}
        >
           <Text
              style={{
                fontSize:widths * 0.09,
                marginBottom:heights * 0.01,
                textAlign:'left',
                fontWeight:'bold',
                color:'#555'
            
              }}
            >
              뽀모도로
            </Text>
     
          <TouchableOpacity activeOpacity={0.8} onPress={()=>{

            if(bottomSheet){
              Up()
           
            }
            else{
              Down()
              
            }  
          }}>

                  {/* <Image source={backPng} style={{
                    width:widths * 0.7,
                    height:widths * 0.7,
                    position:'absolute',
                    
                 
                  }}/> */}

              <PieChart data={[
              {
              name: 'Seoul',
              population: studyTime,
              color: '#4B89DC',
              legendFontColor: 'black',
              legendFontSize: 15,
              },

              {
              name: 'Toronto',  
              population:timerSecond.current - studyRef.current,
              color: '#f5f5f5',
              legendFontColor: 'black',
              legendFontSize: 15,
              },
              ]}

              width={widths * 0.7}
              height={widths * 0.7}
              paddingLeft={widths * 0.7 / 4}
              chartConfig={{ backgroundColor: '#194ad1',
              backgroundGradientFrom: '#f74871',
              backgroundGradientTo: '#ffbc47',
              decimalPlaces: 2,
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: {
              borderRadius: 16,
              
              },

              }}
              hasLegend={false}

              accessor="population"
              backgroundColor='transparent'
              
             
              absolute
              />
                
                <View
                
                style={{
                  width:widths * 0.5,
                  height:widths * 0.5,
                  position:'absolute',
                  backgroundColor:'white',
                  borderRadius:2000,
                  top:widths * 0.7 / 2 - widths * 0.25,
                  left: widths * 0.7 / 2 - widths * 0.25,
                
                }}>
                  
                </View>
              <Text
                style={{
                  position:'absolute',
                  left:widths * 0.7 / 2 - widths * 0.25,
                  top: widths * 0.7 / 2 - widths * 0.05,
                  fontSize:30,
                  width:widths * 0.5,
                  textAlign:"center",
              
                  color:'#555',
                }}
              >
                타이머
               
                {/* {hour == 0 ? '00' : hour - parseInt(parseInt(minate - parseInt(parseInt(studyTime)  %60) / 60) / 60)}:{minate == 0 ? '00' :minate -  parseInt(parseInt(studyTime) / 60) -1 }:{minate == 0 ? '00' : 59 - parseInt(parseInt(studyTime)  %60)+1} */}
              </Text>
          </TouchableOpacity>

        <View
          style={{
            width: widths * 0.7,

          }}
        >
            <Text
              style={{
                fontSize:widths * 0.05,
                marginTop:heights * 0.04,
                marginBottom:heights * 0.02,
              
              }}
            >
              백색 소음
            </Text>

            <TouchableOpacity style={[styles.musicBox,{backgroundColor:musicNumber == 0 ? '#252525' : 'white',
            borderWidth:1,
            borderColor: musicNumber == 0 ? 'transparent' : '#eee'   
          }] } onPress={
             ()=>playSound(0)
            }  activeOpacity={1}>
                 
                 <View 
                    style={{
                      flexDirection:'row',
                      alignItems:'center'
                    }}
                  >
                      <Ionicons
                      name= {'rainy-outline'}
                      style={{
                        fontSize:widths * 0.05,
                        color: musicNumber == 0 ? 'white' : '#0097C7',
                        marginRight:widths * 0.02
                      }}
                    >
                    </Ionicons>
                    
                    <Text
                    style={{
                      color: musicNumber == 0 ? 'white' : '#555'
                    }}
                  >비</Text>

                  </View>
                <Ionicons
                  name= {musicNumber == 0 ? 'pause-outline' : 'play-outline'}
                  style={{
                    fontSize:widths * 0.06,
                    color: musicNumber == 0 ? 'white' : '#888'
                  }}
                >

                </Ionicons>
            </TouchableOpacity>

            <TouchableOpacity  style={[styles.musicBox,{backgroundColor:musicNumber == 1 ? '#252525' : 'white',borderWidth:1,
            borderColor: musicNumber == 1 ? 'transparent' : '#eee'    }] } onPress={()=>playSound(1)}  activeOpacity={0.5}

            >
                  <View 
                    style={{
                      flexDirection:'row',
                      alignItems:'center'
                    }}
                  >
                      <Ionicons
                      name= {'leaf-outline'}
                      style={{
                        fontSize:widths * 0.05,
                        color: musicNumber == 1 ? 'white' : 'green',
                        marginRight:widths * 0.02
                      }}
                    >
                    </Ionicons>
                    
                    <Text
                    style={{
                      color: musicNumber == 1 ? 'white' : '#555'
                    }}
                  >자연</Text>

                  </View>

                  <Ionicons
                   name= {musicNumber == 1 ? 'pause-outline' : 'play-outline'}
                  style={{
                    fontSize:widths * 0.06,
                    color: musicNumber == 1 ? 'white' : '#888'
                  }}
                >


                </Ionicons>
            </TouchableOpacity>

            <TouchableOpacity  style={[styles.musicBox,{backgroundColor:musicNumber ==  2 ? '#252525' : 'white',borderWidth:1,
           borderColor: musicNumber == 2 ? 'transparent' : '#eee'    }] } onPress={()=>playSound(2)}  activeOpacity={0.5}>
            <View 
                    style={{
                      flexDirection:'row',
                      alignItems:'center'
                    }}
                  >
                      <Ionicons
                      name= {'water-outline'}
                      style={{
                        fontSize:widths * 0.05,
                        color: musicNumber == 2 ? 'white' : '#73A2BF',
                        marginRight:widths * 0.02
                      }}
                    >
                    </Ionicons>
                    
                    <Text
                    style={{
                      color: musicNumber == 2 ? 'white' : '#555'
                    }}
                  >파도</Text>

                  </View>

                  <Ionicons
                   name= {musicNumber == 2 ? 'pause-outline' : 'play-outline'}
                  style={{
                    fontSize:widths * 0.06,
                    color: musicNumber == 2 ? 'white' : '#888'
                  }}
                >

                </Ionicons>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.musicBox,{backgroundColor:musicNumber == 3 ? '#252525' : 'white',borderWidth:1,
           borderColor: musicNumber == 3 ? 'transparent' : '#eee'    }] } activeOpacity={0.5} onPress={()=>playSound(3)}>
                  
                  <View 
                    style={{
                      flexDirection:'row',
                      alignItems:'center'
                    }}
                  >
                      <Ionicons
                      name= {'earth-outline'}
                      style={{
                        fontSize:widths * 0.06,
                        color: musicNumber == 3 ? 'white' : '#1F6BBA',
                         marginRight:widths * 0.02
                      }}
                    >
                    </Ionicons>
                    
                    <Text
                    style={{
                      color: musicNumber == 3 ? 'white' : '#555'
                    }}
                  >폭포</Text>

                  </View>
                
                  <Ionicons
                  name= {musicNumber == 3 ? 'pause-outline' : 'play-outline'}
                  style={{
                    fontSize:widths * 0.06,
                    color: musicNumber == 3 ? 'white' : '#888'
                  }}
                >

                </Ionicons>
            </TouchableOpacity>

        </View>

                  
        <Animated.View

         
          {...panResponder.panHandlers}
          style={{
           
            
            transform: [{
              translateY: fadeAnim,     
              
            }],
            position:'absolute',
            top:0, 
            alignItems:'center',
       
          }}

         >

          
          <View
            style={{
              paddingTop: heights * 0.02,
              width:widths - widths * 0.05,
              height:heights,
              backgroundColor:'white',
              borderRadius:widths * 0.08,
              borderWidth:1,
              borderColor:'#ddd',
              alignItems:'center',
              
            }}
          >

          <View
              style={{
                width: widths,
                height: 25,
                alignItems:'center'
              }}
          >
               <View
              style={{
                width: widths * 0.3,
                height: 10,
                backgroundColor:'#e5e5e5',
                borderRadius:20,
              }}
              >

              </View>
          </View>
          <TouchableOpacity
            activeOpacity={1}
            style={{
            marginTop:heights * 0.03,
            width:widths,
            height:heights,
            alignItems:'center',
            
            
          }}
          
          >

            <View
              style={{
                flexDirection:'row',
                alignItems:'center'
              }}
            >
                <Text
                  style={{
                    fontWeight:'bold',
                    marginRight:widths * 0.05,
                    fontSize:40
                  }}
                >
                    {
                      hour > 9 ? hour : "0"+hour

                    }시
                </Text>

                <View>
                    <Ionicons
                      name='caret-up-outline'
                      style={{
                        fontSize:widths * 0.06,
                        color: 'black',
                        fontSize:50
                      }}

                      onPress={()=>{
                        if(hour < 23){
                          setHour(hour + 1)
                        }
                      }}
                    >

                    </Ionicons>


                    <Ionicons
                      name= 'caret-down-outline'
                      style={{
                        fontSize:widths * 0.06,
                        color: 'black',
                        fontSize:50
                      }}

                      onPress={
                        ()=>{
                          if(hour != 0){
                            setHour(hour - 1)
                          }
                        }
                      }
                    >

                    </Ionicons>
                </View>
            </View>


            <View
              style={{
                flexDirection:'row',
                alignItems:'center',
                marginTop:heights * 0.02,
                marginBottom:heights * 0.05
              }}
            >
                <Text
                  style={{
                    fontWeight:'bold',
                    marginRight:widths * 0.05,
                    fontSize:40
                  }}
                >
                    {
                       minate > 9 ? minate : "0"+minate
                    }분
                </Text>

                <View>
                    <Ionicons
                      name='caret-up-outline'
                      style={{
                        fontSize:widths * 0.06,
                        color: 'black',
                        fontSize:50
                      }}

                      onPress={()=>{
                        if(minate < 59){
                          setMinate(minate +1)
                        }
                      }}
                    >

                    </Ionicons>


                    <Ionicons
                      name= 'caret-down-outline'
                      style={{
                        fontSize:widths * 0.06,
                        color: 'black',
                        fontSize:50
                      }}

                      onPress={
                        ()=>{
                          if(minate != 0){
                            setMinate(minate - 1)
                          }
                        }
                      }
                    >

                    </Ionicons>
                </View>
            </View>


            <View style={{
                
                width: widths * 0.7,
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
                        width:widths * 0.33,
                        height: heights * 0.07,
                    }}

                    onPress={
                     ()=>{
                      Down()
                     }
                      
                    }
                >
                    <Text
                      style={{
                        color:'#555',
                        fontSize:18,
                        fontWeight:'bold',
                       
                    }}
                    >취소</Text>
                </TouchableOpacity>

                <TouchableOpacity
                 style={{
                    borderRadius: widths,
                    alignItems:'center',
                    justifyContent:'center',
                    backgroundColor:'black',
                    width:widths * 0.33,
                    height: heights * 0.07,
                }}
                onPress={
                    ()=>{
                      timerSecond.current =(hour * 3600+ minate * 60);
                      
                      timeCheck.current = true;
                      
                      Down();
                    
                    }
                }
                >
                    <Text


                        style={{
                            color:'white',
                            fontSize:17,
                            fontWeight:'bold',
                        }}
                    >타이머 시작</Text>
                </TouchableOpacity>

          </View>
          </TouchableOpacity>

          </View>
         </Animated.View >
        </View>
    );
  }






  const styles = StyleSheet.create({
    musicBox:{

      height:heighMedia(0.13),
      marginTop: heighMedia(0.03),
      paddingLeft:widths * 0.05,
      paddingRight:widths * 0.05,
      borderRadius:widthMedia(1),
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      

    }
  })

