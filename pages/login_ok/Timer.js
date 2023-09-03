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
  const [timeCheck,setTimeCheck] = React.useState(false)
  const [bottomSheet,setBottomSheet] = React.useState(true);

  const musicArr = [rain,nature,tide,waterfall];
  const [musicNumber,setMusicNumber] = React.useState(4);


    

    const [sound, setSound] = React.useState();
    const [studyTime,setStudyTime] =React.useState(0);
    const [musicName,setMusicName] =React.useState('tree');
    const studyRef = React.useRef(1);

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
          }
          
        
      }
      }),
    ).current;

    

    const Up = () => {
      setBottomSheet(!bottomSheet)
      Animated.timing(fadeAnim, {
        toValue: heights / 2 - heights * 0.1,
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


  React.useEffect(()=>{

    setInterval(() => {
      if(!timeCheck){
        return
      }
      else{
        setStudyTime((studyRef.current += 0.1))
      }
      
    }, 100);

  },[]);

    return (
        <View
          style={{
            flex:1,
            paddingTop: Platform.OS == 'ios' ? heights * 0.05 : heights * 0.025,
            backgroundColor:'white',
            alignItems:'center',
            
          }}
        >

     
          <TouchableOpacity activeOpacity={0.8} onPress={()=>{

            if(bottomSheet){
              Up()
           
            }
            else{
              Down()
              
            }

          
          }}>

             

              <PieChart data={[
              {
              name: 'Seoul',
              population: studyTime,
              color: '#FC5E5E',
              legendFontColor: 'black',
              legendFontSize: 15,
              },

              {
              name: 'Toronto',
              population: 1000 - studyTime,
              color: '#f8fafc',
              legendFontColor: 'black',
              legendFontSize: 15,
              },
              ]}

              width={widths}
              height={widths}
              paddingLeft={widths * 0.25}
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

              <Text
                style={{
                  position:'absolute',
                  left:widths / 2 - widths * 0.5 / 2,
                  top: widths / 2 - widths * 0.05,
                  fontSize:40,
                  width:widths * 0.5,
                  textAlign:"center",
                  fontWeight:'bold',
                  color:'#555'
                }}
              >
                00:00:00
              </Text>
          </TouchableOpacity>

        <View
          style={{
            width: widths * 0.8,

          }}
        >
            <Text
              style={{
                fontSize:widths * 0.05,
                marginTop:heights * 0.01,
                marginBottom:heights * 0.02
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
                    marginRight:widths * 0.03,
                    fontSize:40
                  }}
                >
                    00 시
                </Text>

                <View>
                    <Ionicons
                      name='caret-up-outline'
                      style={{
                        fontSize:widths * 0.06,
                        color: 'black',
                        fontSize:40
                      }}

                      onPress={()=>{
                        console.log("sdad");
                      }}
                    >

                    </Ionicons>


                    <Ionicons
                      name= 'caret-down-outline'
                      style={{
                        fontSize:widths * 0.06,
                        color: 'black',
                        fontSize:40
                      }}
                    >

                    </Ionicons>
                </View>
            </View>


            <View
              style={{
                flexDirection:'row',
                alignItems:'center',
                marginTop:heights * 0.03,
                marginBottom:heights * 0.04
              }}
            >
                <Text
                  style={{
                    fontWeight:'bold',
                    marginRight:widths * 0.03,
                    fontSize:40
                  }}
                >
                    00 분
                </Text>

                <View>
                    <Ionicons
                      name='caret-up-outline'
                      style={{
                        fontSize:widths * 0.06,
                        color: 'black',
                        fontSize:40
                      }}

                      onPress={()=>{
                        console.log("sdad");
                      }}
                    >

                    </Ionicons>


                    <Ionicons
                      name= 'caret-down-outline'
                      style={{
                        fontSize:widths * 0.06,
                        color: 'black',
                        fontSize:40
                      }}
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
                      Down
                    }
                >
                    <Text
                      style={{
                        color:'#555',
                        fontSize:17,
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
                    width:widths * 0.33,
                    height: heights * 0.07,
                }}
                onPress={
                    ()=>{
                       console.log("sdad");
                    }
                }
                >
                    <Text


                        style={{
                            color:'white',
                            fontSize:17,
                            fontWeight:'bold',
                        }}
                    >저장하기</Text>
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

