import { StyleSheet, Pressable, Button  } from 'react-native';
import { Text, View, } from '../components/Themed';
import { Link,  } from 'expo-router';



export default function TabOneScreen() {
    return (
      <View style={styles.container1}>
        <Text style={styles.text1}> Selamat Datang Ke Aplikasi mySale</Text>
        
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <Text style={styles.text2}> Sila daftar keahlian anda atau login jika sudah memiliki akaun</Text>

        <View style={styles.container2}> 
            <Text style={{ fontSize: 30, color: '#FFFFFF',  alignSelf: "center",}}>Daftar Akaun</Text>
        </View>
      </View>
    );
  }
  
const styles = StyleSheet.create({
  container1: {
    flex: 1,
    alignItems: 'center',
  
    backgroundColor: "#050000",
  },
  container2: {
    alignItems: 'center',
    margin: 10,
    marginRight: 15,
    justifyContent: "center",
    borderColor: "#C70039",
    borderWidth: 2,
    paddingHorizontal: 80,
    alignSelf: "center",
    paddingVertical: 105,
    backgroundColor: "#C70039",
  },
  text1: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#DE8E03',
    paddingRight: 50,
    paddingTop: 50,   
  },
  text2: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    paddingRight: 30,
  
  },
  separator: {
    marginVertical: 20,
    height: 1,
    width: '95%',
  },

});


