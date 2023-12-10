import { StyleSheet, Pressable, Image } from 'react-native';
import { Text, View, } from '../../components/Themed';
import { Link,  } from 'expo-router';
export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.box3}>
      <View style ={{flexDirection: "row"}}> 
      <Image style={styles.circle}
      source={require("../../assets/images/user.png")} /> 
       <Link href="/frame" asChild>
              <Pressable>
                {({ pressed }) => (
                  <Text style={styles.title}>Guest</Text>
                )}
              </Pressable>
       </Link>
      </View>
      </View>
      <View style ={{flexDirection: "row"}}>
      <View style={styles.box1}>
      <Image style={styles.stretch}
          source={require("../../assets/images/commission.png")} />
      <Text style={styles.paratext1}>Today</Text> 
      <Text style={styles.text1}>RM 0.00</Text> 

      </View>

      <View style={styles.box2}>
      <Image style={styles.stretch}
          source={require("../../assets/images/increase.png")} />
      <Text style={styles.paratext1}>Month</Text> 
      <Text style={styles.text1}>RM 0.00</Text> 
      </View>
      </View>
     


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    paddingTop: 30,
  },
  box3: {
    marginLeft: 20,
    
  },

  cont: {
    marginLeft: 30,
    backgroundColor: "#DE8E03",
   
  },
  circle: {
    width: 45,
    height: 45,
    borderRadius: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft:13,
    paddingTop: 12,
  },
  text1: {
    fontWeight: 'bold',
    textAlign: "center",
    marginTop: 10,
    fontSize:30,
    
  },
  paratext1: {
    color:"#EFEFEF",
    marginTop: 13,
    fontSize:18,
  },
  text2: {
    marginTop: 13,
    fontSize:30,
  },
  stretch: {
    width: 35,
    height: 35,
    backgroundColor: "#DE8E03",
  },
  box1: {
    marginLeft: 20,
    marginRight: 20,
    
    backgroundColor: "#DE8E03",
    padding: 18,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 5,
    borderRadius: 6,
    marginTop: 50,
    paddingHorizontal: 25,
   
  },

  box2: {
    
    marginLeft: 5,
    backgroundColor: "#DE8E03",
    padding: 18,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 5,
    borderRadius: 6,
    marginTop: 50,
    paddingHorizontal: 25,
  },
});
