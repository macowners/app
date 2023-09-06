import { View,Platform,Dimensions,  SafeAreaView,
  ScrollView,StyleSheet,ImageBackground ,Text ,TouchableOpacity} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GroupJoin from './groupJoin/GroupJoin'


const widths = Dimensions.get('window').width;
const heights = Dimensions.get('window').height;
const image = {uri: 'https://media.istockphoto.com/id/1261541463/ko/%EC%82%AC%EC%A7%84/%EC%8A%A4%EB%A7%88%ED%8A%B8%ED%8F%B0-%EC%BB%B4%ED%93%A8%ED%84%B0-%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC-%EB%B9%84%EC%A6%88%EB%8B%88%EC%8A%A4-%EC%95%84%EC%9D%B4%EB%94%94%EC%96%B4-%EB%93%B1-%EB%8F%85%EC%84%9C%EB%A5%BC-%ED%86%B5%ED%95%B4-%ED%95%99%EC%8A%B5%ED%95%A0-%EC%88%98-%EC%9E%88%EB%8A%94-%EB%8B%A4%EC%96%91%ED%95%9C-%EC%A7%80%EC%8B%9D%EA%B3%BC-%EC%B9%A0%ED%8C%90-%EB%B0%B0%EA%B2%BD.jpg?s=612x612&w=0&k=20&c=2gpEkCa5Hx4K1Wg1wbXyL3tl9oD7RWBdYfSBkp7_Dz8='};

export default function App() {
  const Stack = createStackNavigator();

  return (

      <NavigationContainer independent={true} >
        <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown:false}}>
          <Stack.Screen name="Login" component={HomeScreen} />
          <Stack.Screen name="Group" component={GroupJoin} />
      
        </Stack.Navigator>
      </NavigationContainer>
   
  );
}


 function HomeScreen({navigation}) {

    return (
      <View style={{ flex: 1, 
      padding:15,
      paddingTop: Platform.OS == 'ios' ? heights * 0.07 : heights * 0.03,    
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
              height: heights * 0.7
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
                      elevation: 1,
                      borderWidth:1,
                      borderColor:"#ddd",
                      overflow:'hidden',
                      borderRadius:10,
                      width: widths * 0.42,
                      height: heights * 0.32,
                    }}
                  >

                    <ImageBackground
                    source={image} 
                      style={{
                        width: widths * 0.42,
                        height: heights * 0.32,
                        
                        marginBottom:heights * 0.03,
                    
                      }}
                    >
                      <View
                        style={{
                          backgroundColor:'white',
                          width: widths * 0.42,
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

          
          <TouchableOpacity
            style={{
              backgroundColor:'white',
              width: widths * 0.9,
              height: heights * 0.07,
              position:'absolute',
              left: widths /2 - widths * 0.45,
              bottom: heights * 0.05,
              alignItems:'center',
              justifyContent:'center',
              borderRadius:10,
              shadowColor: "#3E82BD ",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}
          >
              <Text
                      style={{
                        color:'#3E82BD',
                        fontSize:25,
                        fontWeight:'bold'
                      }}>
                        그룹 만들기</Text>
          </TouchableOpacity>        
      </View>
    );
  }
  

  const styles = StyleSheet.create({

  })