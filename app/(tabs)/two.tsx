import { StyleSheet } from 'react-native';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
      <Text style={styles.title}>December 23</Text>
      </View>
      <Text style={styles.title1}>07 Dec, 07:28</Text>
      <View style ={{flexDirection: "row"}}>
      <Text style={styles.p1}>Sale 1</Text>
      <Text style={styles.p1p}>RM 100</Text>
      </View>
      <Text style={styles.p1p2}>Online Transfer</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 30,
    marginLeft: 20,
  },
  title1: {
    fontSize: 15,
    fontWeight: 'bold',
    paddingTop: 30,
    marginLeft: 20,
    color: "#AEAEAE"
  },
  p1: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 8,
    marginLeft: 20,
  },
  p1p: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 8,
    marginLeft: 240,
   
  },
  p1p2: {
    fontSize: 15,
    fontWeight: 'bold',
    paddingTop: 8,
    marginLeft: 20,
    color: "#AEAEAE"
  },
  box1:{
    borderRadius: 20,
    backgroundColor: "#AEAEAE",
    paddingBottom: 20,
  
  },
});
