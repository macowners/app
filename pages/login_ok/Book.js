import { ChangeEvent, Fragment, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Button,
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  TextInput,
  TextInputChangeEventData,
  TouchableOpacity,
  View,
} from "react-native";
import axios from "axios";

export default function App() {
  const [type, setType] = useState(0); // 0 -> 교재명, 1 -> 강의명
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [value, setValue] = useState("");
  const [result, setResult] = useState(0);
  const [win, setWin] = useState(false);

  const Submit = async () => {
    if (type) {
      await axios
        .post(
          `http://localhost:3000/api/user/calculate-study-schedule-S`,
          { courseCount: +value, remainingDays: +date },
          { "Content-Type": "application/json" }
        )
        .then((resp) => {
          console.log(resp.data);
          setResult(resp.data.daysPerCourse);
          setWin(1);
        });
    } else {
      await axios
        .post(
          `http://localhost:3000/api/user/calculate-study-schedule-P`,
          { pageCount: +value, remainingDays: +date },
          { "Content-Type": "application/json" }
        )
        .then((resp) => {
          console.log(resp.data);
          setResult(resp.data.daysPerPage);
          setWin(1);
        });
    }
  };

  return (
    <Fragment>
      {win ? (
        <View
          style={{
            width: 400,
            height: 600,
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
          }}
        >
          <View style={styles.notification}>
            <Text style={styles.result}>
              {!type
                ? `오늘은 ${result}장 만큼 풀이해야 할 것 같아요.`
                : `오늘은 ${result}개의 강의를 시청해야 해요.`}
            </Text>
            <View
              style={{
                borderRadius: 50,
                width: 100,
                height: 40,
                backgroundColor: "#009BFF",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 30,
              }}
              onPress={() => setWin(0)}
            >
              <Text
                style={{ color: "white", fontWeight: "bold" }}
                onPress={() => setWin(0)}
              >
                알겠어요!
              </Text>
            </View>
          </View>
        </View>
      ) : (
        <View style={styles.container}>
          <Text style={styles.title}>공부량 분배 서비스</Text>

          <View style={styles.sels}>
            <TouchableOpacity
              style={!type ? styles.lc : styles.l}
              onPress={() => setType(0)}
            >
              <Text style={{ color: !type ? "white" : "#009BFF" }}>문제집</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={type ? styles.rc : styles.r}
              onPress={() => setType(1)}
            >
              <Text style={{ color: type ? "white" : "#009BFF" }}>강의</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.fieldc}>
            <Text style={styles.p}>{type ? "강의명" : "교재명"}</Text>
            <TextInput
              placeholder="입력해주세요"
              style={styles.field}
              value={name}
              onChangeText={(text) => setName(text)}
            />
          </View>

          <View style={styles.fieldc}>
            <Text style={styles.p}>
              {type ? "강의 시청 일수" : "문제집 풀이 일수"}
            </Text>
            <TextInput
              placeholder="입력해주세요"
              style={styles.field}
              value={date}
              onChangeText={(text) => setDate(text)}
            />
          </View>

          <View style={styles.fieldc}>
            <Text style={styles.p}>
              {type ? "시청할 강의수" : "풀이할 장 수"}
            </Text>
            <TextInput
              placeholder="입력해주세요"
              style={styles.field}
              value={value}
              onChangeText={(text) => setValue(text)}
            />
          </View>

          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              Submit();
            }}
          >
            <Text
              style={{
                color: "white",
              }}
            >
              다음
            </Text>
          </TouchableOpacity>

          <StatusBar style="auto" />
        </View>
      )}
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },

  btn: {
    width: 200,
    height: 50,
    backgroundColor: "#009BFF",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginTop: 80,
  },

  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#009BFF",
    marginBottom: 30,
    marginTop: 30,
  },

  fieldc: {
    width: 200,
    marginBottom: 40,
  },

  p: {
    fontSize: 15,
    fontWeight: "400",
    marginBottom: 10,
    paddingLeft: 10,
    color: "#009BFF",
  },
  p2: {
    fontSize: 15,
    fontWeight: "400",
    marginBottom: 10,
    paddingLeft: 10,
    color: "#00B2FF",
  },

  field: {
    width: 200,
    height: 50,
    paddingLeft: 16,
    backgroundColor: "white",
    borderRadius: 20,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.16,
    shadowRadius: 5.62,
    elevation: 8,
  },

  sels: {
    marginBottom: 80,
    flexDirection: "row",
  },

  l: {
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 50,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    backgroundColor: "white",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.16,
    shadowRadius: 5.62,
    elevation: 8,
    fontSize: 16,
    fontWeight: "500",
  },

  r: {
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 50,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: "white",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.16,
    shadowRadius: 5.62,
    elevation: 8,
  },

  lc: {
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 50,
    backgroundColor: "#009BFF",
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.16,
    shadowRadius: 5.62,
    elevation: 8,
  },

  rc: {
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 50,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: "#009BFF",
    color: "white",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.16,
    shadowRadius: 5.62,
    elevation: 8,
  },

  notification: {
    zIndex: 50,
    width: 300,
    height: 160,
    borderRadius: 20,
    background: "white",
    padding: 30,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E5E5E5",
  },

  result: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
