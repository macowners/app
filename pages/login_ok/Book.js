import { ChangeEvent, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { Button, NativeSyntheticEvent, StyleSheet, Text, TextInput, TextInputChangeEventData, TouchableOpacity, View } from 'react-native'

export default function App() {
  const [type, setType] = useState(0) // 0 -> 교재명, 1 -> 강의명
  const [name, setName] = useState("")
  const [date, setDate] = useState(0)

  const Submit = () => {
    console.log('click!')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>공부량 분배 서비스</Text>

      <View style={styles.sels}>
        <TouchableOpacity style={!type ? styles.lc : styles.l} onPress={() => setType(0)}>
          <Button color={!type ? 'white' : '#009BFF'} onPress={() => setType(0)} title='문제집' />
        </TouchableOpacity>

        <TouchableOpacity style={type ? styles.rc : styles.r} onPress={() => setType(1)}>
          <Button color={type ? 'white' : '#009BFF'} onPress={() => setType(1)} title='강의' />
        </TouchableOpacity>
      </View>

      <View style={styles.fieldc}>
        <Text style={styles.p}>{type ? '강의명' : '교재명'}</Text>
        <TextInput placeholder='입력해주세요' style={styles.field} value={name} onChangeText={text => setName(text)} />
      </View>

      <View style={styles.fieldc}>
        <Text style={styles.p}>{type ? '강의 시청 일수 (ex: 5)' : '문제집 풀이 일수 (ex: 5)'}</Text>
        <TextInput placeholder='입력해주세요' style={styles.field} value={date?.toString()} onChangeText={text => setDate(parseInt(text))} />
      </View>

      <TouchableOpacity style={styles.btn} onPress={() => setType(0)}>
        <Button color='white' onPress={Submit} title='다음' />
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },

  btn: {
    width: 200,
    height: 50,
    backgroundColor: '#009BFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginTop: 80
  },

  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#009BFF',
    marginBottom: 30,
  },

  fieldc: {
    width: 200,
    marginBottom: 40
  },

  p: {
    fontSize: 15,
    fontWeight: '400',
    marginBottom: 10,
    paddingLeft: 10,
    color: '#009BFF'
  },
  p2: {
    fontSize: 15,
    fontWeight: '400',
    marginBottom: 10,
    paddingLeft: 10,
    color: '#00B2FF'
  },

  field: {
    width: 200,
    height: 50,
    paddingLeft: 16,
    backgroundColor: 'white',
    borderRadius: 20,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity:  0.16,
    shadowRadius: 5.62,
    elevation: 8
  },

  sels: {
    marginBottom: 80,
    flexDirection: 'row'
  },
  
  l: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 50,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    backgroundColor: 'white',
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity:  0.16,
    shadowRadius: 5.62,
    elevation: 8,
    fontSize: 16,
    fontWeight: '500',
  },

  r: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 50,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: 'white',
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity:  0.16,
    shadowRadius: 5.62,
    elevation: 8,
    
  },

  lc: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 50,
    backgroundColor: '#009BFF',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity:  0.16  ,
    shadowRadius: 5.62,
    elevation: 8,
  },

  rc: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 50,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: '#009BFF',
    color: 'white',
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity:  0.16,
    shadowRadius: 5.62,
    elevation: 8
  }
})