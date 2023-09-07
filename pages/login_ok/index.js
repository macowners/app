import { View,StyleSheet,Button,Text,Image,TextInput,StatusBar ,Dimensions ,TouchableOpacity} from "react-native"
import Group from './Group'
import Servay from './Servay'
import Mockup from '../../assets/consul.png'
import Human from '../../assets/TimerHuman.png'
import servay from '../../assets/servay.png'
import team from '../../assets/team.png'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from "@expo/vector-icons";
import bottom from '../../assets/bottom.png'


const widths = Dimensions.get('window').width;
const heights = Dimensions.get('window').height;

    

export default function App(){
    

    const Stack = createStackNavigator();

    return(
        <NavigationContainer independent={true} >
        <Stack.Navigator initialRouteName="Main" screenOptions={{headerShown:false}}>
          <Stack.Screen name="Main" component={Main} />
          <Stack.Screen name="Servay" component={Servay} />
          <Stack.Screen name="Group" component={Group} />
        </Stack.Navigator>
      </NavigationContainer>
    )
}

function Main({navigation}){

    return(
        <View
            style={{
                backgroundColor:'white',
                flex:1,
                alignItems:'center'
            }}
        >
             <View style={styles.prev}>
                <Text
                    style={{ 
                        
                        fontSize: 30,
                        color:"#555",
                        fontWeight:'bold'
                    }}
                >오늘의 공부
                </Text>
                
            </View>

            <View style={styles.recommend}>
                <Image style={styles.mockup} source={Mockup} />
                <View>
                <Text style={styles.qbold}>학업 스트레스 진단</Text>
                <Text  style={styles.q}>을 해보시는 건 어떠신가요?</Text>
                </View>
            </View>

            <View style={styles.recommend2}>
                <Image style={styles.mockup} source={Human} />
                <View>
                <Text style={styles.qbold}>타이머와 백색소음을</Text>
                <Text  style={styles.q}>사용 해보시는 건 어떠신가요?</Text>
                </View>
            </View>
           
            <View
                style={{
                    
                    width: widths * 0.9,
                    marginTop: heights * 0.05,
                    flexDirection:'row',
                    justifyContent:'space-between'
                }}
            >
                <TouchableOpacity
                
                onPress={()=>{
                    navigation.push("Group")
                }}>
                    
                    <View 
                            style={{
                                paddingTop:widths * 0.07,
                                width: widths * 0.43,
                                backgroundColor:'white',
                                height: heights * 0.3,
                                borderRadius:10,
                                shadowColor: "#222",
                                shadowOffset: {
                                width: 0,
                                height: 2,
                                },
                                shadowOpacity: 0.25,
                                shadowRadius: 3.84,
                                elevation: 5,
                                alignItems:'center',
                                 
                            }}
                        >
                            <Text
                                style={{
                                    fontSize:25,
                                    fontWeight:'bold',
                                    marginBottom:heights * 0.03,
                                    color:'#555'
                                }}
                            >
                                스터디 그룹
                            </Text>

                            <Image
                                style={{
                                    width:widths * 0.3,
                                    height:widths * 0.3
                                }}
                                source={team}
                            >

                            </Image>
                        
                        </View>
                </TouchableOpacity>

               <TouchableOpacity
                    onPress={()=>{
                        navigation.push("Servay")
                    }}
                >
                <View 
                        style={{
                            paddingTop:widths * 0.07,
                            width: widths * 0.43,
                            backgroundColor:'white',
                            height: heights * 0.3,
                            borderRadius:10,
                            shadowColor: "#222",
                            shadowOffset: {
                            width: 0,
                            height: 2,
                            },
                            shadowOpacity: 0.25,
                            shadowRadius: 3.84,
                            elevation: 5,
                            alignItems:'center'
                        }}
                    >
                        <Text
                            style={{
                                fontSize:25,
                                fontWeight:'bold',
                                marginBottom:heights * 0.04,
                                color:'#555'
                            }}
                        >
                            설문조사
                        </Text>

                        <Image
                            style={{
                                width:widths * 0.3,
                                height:widths * 0.3,
                     
                            }}
                            source={servay}
                        >

                        </Image>
                    
                    </View>
               
               </TouchableOpacity>
            </View>
            <Image source={bottom} style={{
              width:widths,
              height: heights * 0.3,
              position:'absolute',
                bottom: 0 -heights * 0.1,
                zIndex:-100
            }}/> 
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    title: {
      fontWeight: 'bold',
      marginTop: 6,
      marginLeft: 75,
      fontSize: 18
    },
  
    prev: {
      width: '100%',
      height: 100,
      paddingTop: 70,
      paddingLeft: 20,
      marginBottom: 30,
      backgroundColor:'white',
      flexDirection:'row',
      alignItems:'center'
    },
  
    recommend: {
      width:"90%",
      borderRadius:10,
      zIndex: -1,
      backgroundColor: '#1553C8',
      paddingLeft:30,
      marginTop: 0,
      height: 130,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    recommend2: {
        width:"90%",
        borderRadius:10,
        zIndex: -1,
        backgroundColor: '#F2530D',
        paddingLeft:30,
        marginTop: 10,
        height: 130,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
    
    q: {
      fontWeight: 'bold',
      fontSize: 16,
      color: 'white'
    },
    qbold: {
      fontWeight: 'bold',
      fontSize: 18,
      color: 'white'
    },
    mockup: {
      objectFit: 'contain',
      width: 80,
      marginRight: 30,
      marginLeft: -40
    },
  
    field: {
      width: 100,
      height: 50,
      border: View
    },
  })