import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Image } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
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
      source={require("../assets/images/discount.png")} />
      <Text style={styles.title1p}>View Sale</Text>
     
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
    marginLeft: 10,
  },
  title1p: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 10,
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
    marginRight: 150,
  },
});
