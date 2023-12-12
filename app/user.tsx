import { StyleSheet, Pressable, Image } from 'react-native';
import { Text, View, } from '../components/Themed';
import { Link,  } from 'expo-router';
export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <View style ={{flexDirection: "row"}}> 
      <Link href="/profile" asChild>
              <Pressable>
                {({ pressed }) => (
                 <Image style={styles.circle}
                 source={require("../assets/images/unnamed.jpg")} /> 
                )}
              </Pressable>
       </Link>
      
       <Link href="/frame" asChild>
              <Pressable>
                {({ pressed }) => (
                  <Text style={styles.title}>Wan Azlin</Text>
                )}
              </Pressable>
       </Link>
      </View>
      <View style ={{flexDirection: "row"}}>
      <View style={styles.box1}>
      <Image style={styles.stretch}
          source={require("../assets/images/commission.png")} />
      <Text style={styles.paratext1}>Today</Text> 
      <Text style={styles.text1}>RM 500</Text> 

      </View>

      <View style={styles.box2}>
      <Image style={styles.stretch}
          source={require("../assets/images/increase.png")} />
      <Text style={styles.paratext1}>Month</Text> 
      <Text style={styles.text1}>RM 1000</Text> 
      </View>
      </View>
      <View style ={{flexDirection: "row"}}> 
      <View style={styles.boxF}>
      <Image style={styles.iBF1}
      source={require("../assets/images/add-product.png")} /> 
       <Link href="/cSale" asChild>
              <Pressable>
                {({ pressed }) => (
                  <Text style={styles.tBF1}>Create Sale</Text>
                )}
              </Pressable>
       </Link>
      </View>   
      <View style={styles.boxF}>
      <Image style={styles.iBF2}
      source={require("../assets/images/completed.png")} /> 
       <Link href="/addSale" asChild>
              <Pressable>
                {({ pressed }) => (
                  <Text style={styles.tBF2}>Add Sale</Text>
                )}
              </Pressable>
       </Link>
      </View>  
      <View style={styles.boxF}>
      <Image style={styles.iBF3}
      source={require("../assets/images/cost.png")} /> 
       <Link href="/vSale" asChild>
              <Pressable>
                {({ pressed }) => (
                  <Text style={styles.tBF3}>View Sale</Text>
                )}
              </Pressable>
       </Link>
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
    marginLeft: 30,
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
    marginLeft: 5,
    marginRight: 25,
    
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
  boxF: {
    paddingTop: 30,
  },
  iBF1: {
    width: 50,
    height: 50,
  
    marginLeft: 40,
    
  },
  tBF1: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft:18,
    paddingTop: 8,
  },
  iBF2: {
    width: 50,
    height: 50,
  
    marginLeft: 35,
    
  },
  tBF2: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft:25,
    paddingTop: 8,
  },
  iBF3: {
    width: 50,
    height: 50,
  
    marginLeft: 40,
    
  },
  tBF3: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft:25,
    paddingTop: 8,
  },
});
