import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Image } from 'react-native';
import { Text, View } from '../components/Themed';

export default function ModalScreen() {
  return (
    <View style={styles.container}>
     
      <Image style={styles.circle}
      source={require("../assets/images/unnamed.jpg")} /> 
       <Text style={styles.title}>Wan Azlin</Text>
       <Text style={styles.title1p2p}>Original Members since 2018 </Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <View style ={{flexDirection: "row"}}> 
      <Image style={styles.pic2}
      source={require("../assets/images/email.png")} />
      <View style={styles.box1}>
      <Text style={styles.title1p}>Email</Text>
      <Text style={styles.title1p2}>wannurulazlin@gmail.com </Text>
      </View>
      
      </View>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <View style ={{flexDirection: "row"}}> 
      <Image style={styles.pic3}
      source={require("../assets/images/smartphone.png")} />
      <View style={styles.box2}>
      <Text style={styles.title1p}>Phone Number</Text>
      <Text style={styles.title1p2}>013-9882700</Text>
      </View>
      
      </View>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <View style ={{flexDirection: "row"}}> 
      <Image style={styles.pic4}
      source={require("../assets/images/birthday-cake.png")} />
      <View style={styles.box1}>
      <Text style={styles.title1p1}>Birthday Date</Text>
      <Text style={styles.title1p2}>12th March 1998</Text>
      </View>
      
      </View>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <View style ={{flexDirection: "row"}}> 
      <Image style={styles.pic5}
      source={require("../assets/images/home-address.png")} />
      <View style={styles.box1}>
      <Text style={styles.title1p}> Address</Text>
      <Text style={styles.title1p2}> Lorong 3/92B, Taman Kobena  </Text>
      </View>
      
      </View>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
  },
  box1: {
   paddingLeft: 20,
  },
  box2: {
    paddingLeft: 20,
   },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingTop: 20,
  },
  box1p: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingTop: 20,
  },
  title1: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 10,
    marginLeft: 20,
  },
  title1p: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 10,
    marginRight: 20,
  },
  title1p1: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 10,
    marginRight: 30,
  },
  title1p2: {
    fontSize: 10,
    
    paddingTop: 5,
    marginRight: 20,
  },
  title1p2p: {
    fontSize: 15, 
    marginLeft: 10,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  pic1: {
    width: 60,
    height: 60,
    marginLeft: 50,
  },
  pic2: {
    width: 60,
    height: 60,
    marginRight: 30,
  },
  pic3: {
    width: 60,
    height: 60,
    marginRight: 30,
  },
  pic4: {
    width: 60,
    height: 60,
    marginRight: 30,
  },
  pic5: {
    width: 60,
    height: 60,
    marginRight: 25,
  },
});
