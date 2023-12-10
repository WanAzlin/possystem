import { StyleSheet,Image} from 'react-native';
import { Text, View } from '../../components/Themed';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      
      <Image style={styles.iBF4}
      source={require("../../assets/images/no-results.png")} /> 
      <Text style={styles.title1}>No Result Found..</Text>
      
      
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    
  },
  iBF4: {
    width: 200,
    height:200,
    marginTop: 100,
    marginLeft: 20, 
  },
  title1: {
    fontSize: 30,
    paddingTop: 10,
    marginLeft: 13,
    color: "#AEAEAE",
    fontWeight: "bold",
  },
  
});
