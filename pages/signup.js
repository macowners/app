
import { View, Text ,StyleSheet,Dimensions,TextInput} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const widths = Dimensions.get('window').width;
const heights = Dimensions.get('window').height;

function widthMedia(size){
  return size * widths
}

function heighMedia(size){
  return size * widths
}



function Signup({navigation}) {
  return (
    <View
    style={{
      paddingTop:heights*0.1,
      alignItems:'center',
      width:widths,
      height:heights,
    
   
    }}
    >
     <TextInput
      style={styles.textInput}
      placeholder="이름 입력"
     />
     
     <TextInput
      style={styles.textInput}
      placeholder="전화번호 입력"
     />

     <TextInput
     style={styles.textInput}
      placeholder="아이디 입력"
     />

    <TextInput
     style={styles.textInput}
      placeholder="비밀번호 입력"
     />

<TouchableOpacity
        style={{
          width:widthMedia(0.9),
          height:heighMedia(0.15),
      
     
          backgroundColor:'#FC7611',
          alignItems:'center',
          justifyContent:'center',
          padding:10,
          borderRadius:10,
          marginTop:heighMedia(0.5)
        }}
        onPress={
          ()=>navigation.pop()
        }>
        <Text style={{
          color:'white',
          fontSize:25,
          fontWeight:'bold',
          alignSelf:'center'

        }}>
          회원가입
        </Text>
       </TouchableOpacity>

       <TouchableOpacity
        style={{
          width:widthMedia(0.9),
          height:heighMedia(0.15),
          backgroundColor:'#FFAB48',
          alignItems:'center',
          justifyContent:'center',
          padding:10,
          borderRadius:10,
          marginTop:heighMedia(0.05),
          
        }}
        onPress={
          ()=>navigation.pop()
        }>
        <Text style={{
          color:'white',
          fontSize:25,
          fontWeight:'bold'
        }}>
          돌아가기
        </Text>
       </TouchableOpacity>
       

  </View>
  );
}


const styles = StyleSheet.create({
  textInput:{
    backgroundColor:'#e9e9e9',
    marginTop: widthMedia(0.05),
    height: heighMedia(0.15),
    width:widthMedia(0.9),
    padding:widthMedia(0.03),
    borderRadius:10
  }
})

export default Signup;