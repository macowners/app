import { View,Platform,Dimensions,  SafeAreaView,
  ScrollView,StyleSheet,ImageBackground ,Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Ionicons } from '@expo/vector-icons';

const widths = Dimensions.get('window').width;
const heights = Dimensions.get('window').height;
const image = {uri: 'https://legacy.reactjs.org/logo-og.png'};

export default function HomeScreen() {

    return (
      <View style={{ flex: 1, 
      padding:15,
      paddingTop: Platform.OS == 'ios' ? heights * 0.07 : heights * 0.05,
      
      }}>
          <View>
              <TextInput
                  style={{
                    width:widths* 0.9,
                    backgroundColor:'#e9e9e9',
                    borderRadius:30,
                    fontSize:15,
                    padding:widths * 0.04,
                    
                  }}
                   placeholder="검색어를 입력하세요"
                   
              ></TextInput>
              
              <Ionicons
                name="search-outline"
                style={{
                  position:'absolute',
                  fontSize:widths * 0.08,
                  marginRight:widths * 0.02,
                  right: widths * 0.04 + widths * 0.01,
                  top:widths * 0.04 / 2,
                  color:'gray'
                }}
              >

              </Ionicons>
          </View>


          <SafeAreaView 
            style={{
              marginTop:heights * 0.04,
              
            }}
          >

            <ScrollView>
                <View
                  style={{
                    flexDirection:'row',
                    flexWrap:'wrap',
                    justifyContent:'space-between'

                  }}
                >
                  <View
                    style={{
                      shadowColor: "#000",
                      shadowOffset: {
                        width: 0,
                        height: 2,
                      },
                      shadowOpacity: 0.25,
                      shadowRadius: 3.84,
                      elevation: 5,
                    }}
                  >

                    <ImageBackground
                    source={image} 
                      style={{
                        width: widths * 0.44,
                        height: heights * 0.3,
                        borderRadius:10,
                        marginBottom:heights * 0.03,
                    
                        overflow:'hidden'
                      }}
                    >
                      <View
                        style={{
                          backgroundColor:'white',
                          width: widths * 0.44,
                          height: heights * 0.3 / 1.5 ,
                          position:'absolute',
                          bottom:0,
                          borderRadius:10,
                          padding:10
                        }}
                      >
                          <Text
                            style={{
                              
                              fontSize:15,
                              fontWeight:'bold',
                              color:'#272727',
                              marginBottom:heights * 0.01
                            }}
                          >
                              수학문제집 풀 사람
                          </Text>

                          
                          <View
                            style={{
                              flexDirection:'row',
                              alignItems:'center'
                            }}
                          >
                              <Ionicons
                                name="people-outline"
                                style={{
                                  fontSize:20,
                                  marginRight:widths * 0.02
                                }}
                              ></Ionicons>

                              <Text
                                 style={{
                                  fontSize:12
                                }}
                              >0 / 7</Text>
                          </View>

                          <View
                            style={{
                              flexDirection:'row',
                              alignItems:'center'
                            }}
                          >
                              <Ionicons
                                name="color-wand-outline"
                                style={{
                                  fontSize:20,
                                  marginRight:widths * 0.02
                                }}
                              ></Ionicons>

                              <Text
                                 style={{
                                  fontSize:12
                                }}
                              >수학</Text>
                          </View>

                          <View
                            style={{
                              flexDirection:'row',
                              alignItems:'center'
                            }}
                          >
                              <Ionicons
                                name="book-outline"
                                style={{
                                  fontSize:20,
                                  marginRight:widths * 0.02
                                }}
                              ></Ionicons>

                              <Text
                                style={{
                                  fontSize:12
                                }}
                              >수학의 자신감</Text>
                          </View>
                      </View>
                    </ImageBackground>

                    
                  </View>




                 
                  
                  

                 
                  
                  </View>
            </ScrollView>

          </SafeAreaView>
      </View>
    );
  }
  

  const styles = StyleSheet.create({

  })