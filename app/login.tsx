import { StyleSheet, Pressable, Image  } from 'react-native';
import { Text, View, } from '../components/Themed';
import { Link,  } from 'expo-router';
export default function TabOneScreen() {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>LOG IN</Text>
      <Image style={styles.stretch1}
      
      source={require("../assets/images/s1.png")} />
      <Text style={styles.title2}>Email</Text>
      <View style={styles.box1}>
      <Text style={styles.text1}>wannurulazlin@gmail.com </Text>
      </View>
      <Text style={styles.title3}>Password</Text>
      <View style={styles.box2}>
      <Text style={styles.text1}>***** </Text>
      </View>

      
      <View style={styles.container1}>     
      <Link href="/frame" asChild>
              <Pressable>
                {({ pressed }) => (
                  <Text style={styles.title}>Login Here</Text>
                )}
              </Pressable>
 </Link>
 </View>
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
   marginRight:280,
  },
  title3: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 10,
    color: '#FFFFFF',
   marginRight: 250,
   
  },
  text1: {
    fontSize:  18,
    
    paddingRight:20,
    color: '#FAF9F9',
    
  },
});
