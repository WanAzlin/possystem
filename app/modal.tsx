import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Image } from 'react-native';
import { Text, View } from '../components/Themed';

export default function ModalScreen() {
  return (
    <View style={styles.container}>
     
      <Image style={styles.pic}
      source={require("../assets/images/library.png")} /> 
       <Text style={styles.title}>Navigate your way</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <View style ={{flexDirection: "row"}}> 
      <Image style={styles.pic1}
      source={require("../assets/images/discount-2.png")} />
      <View style={styles.box1}>
      <Text style={styles.title1p}>Topic 1</Text>
      <Text style={styles.title1p2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </Text>
      </View>
      
      </View>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <View style ={{flexDirection: "row"}}> 
      <Image style={styles.pic1}
      source={require("../assets/images/choose.png")} />
      <View style={styles.box1}>
      <Text style={styles.title1p}>Topic 2</Text>
      <Text style={styles.title1p2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </Text>
      </View>
      
      </View>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <View style ={{flexDirection: "row"}}> 
      <Image style={styles.pic1}
      source={require("../assets/images/discounts.png")} />
      <View style={styles.box1}>
      <Text style={styles.title1p}>Topic 3</Text>
      <Text style={styles.title1p2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </Text>
      </View>
      
      </View>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <View style ={{flexDirection: "row"}}> 
      <Image style={styles.pic1}
      source={require("../assets/images/subscription-business-model.png")} />
      <View style={styles.box1}>
      <Text style={styles.title1p}>Topic 4</Text>
      <Text style={styles.title1p2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </Text>
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
  title1p2: {
    fontSize: 10,
    
    paddingTop: 5,
    marginRight: 20,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  pic: {
    width: 130,
    height: 130,
    
  },
  pic1: {
    width: 60,
    height: 60,
    marginLeft: 50,
  },
});
