import { StyleSheet, Pressable,  } from 'react-native';
import { Text, View, } from '../components/Themed';
import { Link,  } from 'expo-router';



export default function TabOneScreen() {
    return (
      <View style={styles.container1}>
        <Text style={styles.text1}> Selamat Datang Ke Aplikasi mySale</Text>
        
        <View style={styles.separator} lightColor="#FFFFFF" />
      
        <Text style={styles.text2}> Sila daftar keahlian anda atau login jika sudah memiliki akaun</Text>

        <View style={styles.container2}> 
        <Link href="/login" asChild>
              <Pressable>
                {({ pressed }) => (
                 <Text style={{ fontSize: 20, color: '#FFFFFF',  alignSelf: "center",fontWeight: 'bold',}}>Login Akaun</Text>
                )}
              </Pressable>
          
        </Link>
            
        </View>
        <View style={styles.container3}> 
            <Text style={{ fontSize: 20, color: '#DE8E03',  alignSelf: "center",fontWeight: 'bold',}}>Daftar Akaun</Text>
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
    margin: 10,
    marginRight: 15,
    justifyContent: "center",
    borderRadius: 10,
    borderColor:'#DE8E03',
    borderWidth: 2,
    paddingHorizontal: 120,
    alignSelf: "center",
    paddingVertical: 15,
    backgroundColor: '#DE8E03',
    marginTop: 350, 
  },
  container3: {
    margin: 10,
    marginRight: 15,
    justifyContent: "center",
    borderRadius: 10,
    borderColor:'#DE8E03',
    borderWidth: 3,
    paddingHorizontal: 120,
    alignSelf: "center",
    paddingVertical: 15,
    marginTop: 10, 
  },
  text1: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#DE8E03',
    paddingRight: 40,
    paddingTop: 50,   
  },
  text2: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    paddingRight: 25,
  
  },

  separator: {
    marginVertical: 10,
    height: 1,
    width: '95%',
    
  },

});


