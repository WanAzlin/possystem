import { StyleSheet, Pressable, Image  } from 'react-native';
import { Text, View, } from '../components/Themed';
import { Link,  } from 'expo-router';
export default function TabOneScreen() {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>DAFTAR AKAUN</Text>
      
      <Text style={styles.title2}>Full Name</Text>
      <View style={styles.box1}>
      <Text style={styles.text1}>Wan Nurul Azlin  </Text>
      </View>
      <Text style={styles.title3}>Email</Text>
      <View style={styles.box2}>
      <Text style={styles.text2}>wan@</Text>
      </View>
      <Text style={styles.title4}>Password</Text> 
      <View style={styles.box2}>
      <Text style={styles.text2}>***** </Text>
      </View>
      <Text style={styles.title4}>Reconfirm</Text> 
      <View style={styles.box2}>
      <Text style={styles.text2}>***** </Text>
      </View>
      <View style={styles.container1}>     
      <Link href="/login" asChild>
              <Pressable>
                {({ pressed }) => (
                  <Text style={styles.title}>Login Here</Text>
                )}
              </Pressable>
      </Link>            
 </View>

 <Link href="/frame" asChild>
    <Pressable>
       {({ pressed }) => (
         <Text style={styles.title5}>Already have an account? Log in</Text>
   )}
</Pressable>
</Link>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 80,
    backgroundColor: "black",

  },
  container1: {
    margin: 10,
    marginRight: 15,
    justifyContent: "center",
    borderRadius: 10,
    borderColor:'#DE8E03',
    borderWidth: 2,
    paddingHorizontal: 100,
    alignSelf: "center",
    paddingVertical: 2,
    backgroundColor: '#DE8E03',
    marginTop: 20, 

  },
  box1: {
    margin: 10,
    marginRight: 15,
    
    borderRadius: 10,
    backgroundColor: '#8E8B8B',
    borderWidth: 2,
    paddingHorizontal: 55,
    
    paddingTop: 15,
    paddingBottom: 15,
  },
  box2: {
    margin: 10,
    marginRight: 15,
    
    borderRadius: 10,
    backgroundColor: '#8E8B8B',
    borderWidth: 2,
    paddingHorizontal: 140,
    
    paddingTop: 15,
    paddingBottom: 15,
  },
  stretch1: {
    width: 300,
    height: 250,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 10,
    color: '#FFFFFF',
    paddingBottom: 10,
    paddingHorizontal: 23,
  },
  title2: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 30,
    color: '#FFFFFF',
   marginRight:250,
  },
  title3: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 10,
    color: '#FFFFFF',
   marginRight: 300,
   
  },
  title4: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 10,
    color: '#FFFFFF',
   marginRight: 250,
   
  },
  title5: {
    fontSize: 15,
    
    
    color: '#FFFFFF',
    paddingTop: 12,
 
  },
  text1: {
    fontSize:  18,
    paddingHorizontal: 50,
    color: '#FAF9F9',
    
  },
  text2: {
    fontSize:  18,
    paddingRight:20,
    color: '#FAF9F9',
    
  },
});
