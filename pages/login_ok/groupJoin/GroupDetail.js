import { Ionicons } from "@expo/vector-icons";
import { View,Platform,  SafeAreaView,
    ScrollView,StyleSheet,ImageBackground ,Text ,Dimensions,Image} from "react-native";

import backCalPng from '../../../assets/book.png';
const widths = Dimensions.get('window').width;
const heights = Dimensions.get('window').height;
const image = {uri: 'https://textbook.gimmyoung.com/Images/TextBook/TextBook_637980642835283834_0.png'};


export default function App({navigation}){
    return(
        <View style={{
           
            backgroundColor:"#3E82BD"
        }}>
            <ScrollView>
            <View
            style={{
                paddingTop:heights * 0.05,
                backgroundColor:'white',
                
            }}
           >

                <Ionicons
                    onPress={()=>{
                        navigation.pop();
                    }
                    }
                    name="chevron-back-outline"
                    style={{
                        fontSize:50
                    }}
                >
                    
                </Ionicons>
           </View>
           
           <View 
            style={{
                padding:widths * 0.1,
                backgroundColor:'white'
            }}
           >
                <Text
                    style={{
                        fontSize:30,
                        fontWeight:'bold',
                        marginBottom:heights * 0.02
                    }}
                >소개글</Text>

                <View
                    style={{
                        padding: widths * 0.03
                    }}
                >
                     <View 
                        style={{
                            flexDirection:'row',
                            alignItems:'center',
                            marginBottom:heights * 0.02
                        }}
                     >
                       
                            <Image source={backCalPng} style={{
                            width:widths * 0.15,
                            height:widths * 0.15,
                            borderRadius:1000,
                            overflow:'hidden',
                            borderWidth:1,
                            borderColor:'#ddd',
                            marginRight:widths * 0.03,
                        
                            }}/>

                            <Text
                                style={{
                                    fontWeight:'bold',
                                    fontSize:20
                                }}
                            >
                                정찬빈
                            </Text>
                     </View>

                    <Text
                        style={{
                            marginTop:heights * 0.02,
                            marginBottom:heights * 0.02,
                        }}
                    >같이 국어공부 하실분을 찾습니다.</Text>

                    <Text style={{
                        color:'orange'
                    }}>
                        #국어
                    </Text>
                </View>
           </View>

           <View
                    style={{
                        marginTop:heights * 0.02,
                        width:widths,
                        
                        backgroundColor:'white',
                        padding:widths * 0.1,
                      
                    }}
                >

                    <Text
                        style={{
                            fontSize:30,
                            fontWeight:'bold',
                            marginBottom:heights * 0.02
                        }}
                    >
                        학습내용
                    </Text>

                    <View
                    style={{
                        padding: widths * 0.03
                    }}
                >

                        <Text
                            style={{
                                fontWeight:'bold',
                                fontSize:20,
                                marginBottom:heights * 0.03
                            }}
                        >
                            기본교재
                        </Text>
                            
                        <View 
                            style={{
                                flexDirection:'row',
                                justifyContent:'space-between',
                                alignItems:'center'
                            }}
                        >
                            <Image
                                source={image}
                                style={{
                                    width:120,
                                    height:150,
                                }}
                            ></Image>

                           <View style={{
                            width: widths * 0.35
                           }}>
                                <Text
                                    style={{
                                        fontWeight:'bold',
                                        marginBottom:heights * 0.01,
                                    }}
                                >
                                    대표 저자 : 모경환
                                </Text>

                                <Text
                                    style={{
                                        fontSize:12
                                    }}
                                >
                                    1. 국토와 우리 생활{"\n"}
                                    ① 우리 국토의 위치와 영역{"\n"}
                                    ② 우리 국토의 자연환경{"\n"}
                                    ③ 우리 국토의 인문환경
                                </Text>
                                
                           </View>
                        </View>

                    </View>

                </View>
            </ScrollView>

        </View>
    )
}