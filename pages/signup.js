import { View, Text, StyleSheet, Dimensions, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const widths = Dimensions.get("window").width;
const heights = Dimensions.get("window").height;
// const navigation = useNavigation();

let nameValue = "";
let eamilValue = "";
let passwordValue = "";

function widthMedia(size) {
  return size * widths;
}

function heighMedia(size) {
  return size * widths;
}

function Signup({ navigation }) {
  const Post = async () => {
    fetch("http://localhost:3000/api/sign/up", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: nameValue,
        email: eamilValue,
        password: passwordValue,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.status == 200) {
          alert("로그인에 성공하였습니다.");
          navigation.pop();
        }
        // navigation.navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View
      style={{
        paddingTop: heights * 0.1,
        alignItems: "center",
        width: widths,
        height: heights,
      }}
    >
      <TextInput
        onChangeText={(newText) => (nameValue = newText)}
        style={styles.textInput}
        placeholder="이름 입력"
      />

      <TextInput
        onChangeText={(newText) => (eamilValue = newText)}
        style={styles.textInput}
        placeholder="이메일 입력"
      />

      <TextInput
        onChangeText={(newText) => (passwordValue = newText)}
        style={styles.textInput}
        placeholder="비밀번호 입력"
      />

      <TouchableOpacity
        style={{
          width: widthMedia(0.9),
          height: heighMedia(0.15),
          backgroundColor: "#FC7611",
          alignItems: "center",
          justifyContent: "center",
          padding: 10,
          borderRadius: 10,
          marginTop: heighMedia(0.8),
        }}
        onPress={Post}
      >
        <Text
          style={{
            color: "white",
            fontSize: 25,
            fontWeight: "bold",
            alignSelf: "center",
          }}
        >
          회원가입
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          width: widthMedia(0.9),
          height: heighMedia(0.15),
          backgroundColor: "#FFAB48",
          alignItems: "center",
          justifyContent: "center",
          padding: 10,
          borderRadius: 10,
          marginTop: heighMedia(0.05),
        }}
        onPress={() => navigation.pop()}
      >
        <Text
          style={{
            color: "white",
            fontSize: 25,
            fontWeight: "bold",
          }}
        >
          돌아가기
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: "#e9e9e9",
    marginTop: widthMedia(0.05),
    height: heighMedia(0.15),
    width: widthMedia(0.9),
    padding: widthMedia(0.03),
    borderRadius: 10,
  },
});

export default Signup;
