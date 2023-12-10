import { StyleSheet,Pressable } from 'react-native';
import { Text, View } from '../components/Themed';
import { Link,  } from 'expo-router';
export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>December 23</Text>
      
      <Text style={styles.title1}>07 Dec, 07:28</Text>
      <View style ={{flexDirection: "row"}}>
      <Link href="/daftar" asChild>
              <Pressable>
                {({ pressed }) => (
                 <Text style={styles.p1}>Sale Rahmah</Text>
                )}
              </Pressable>
        </Link>
      <Text style={styles.p1p}>RM 100</Text>
      
      </View>
      <Text style={styles.p1p2}>Online Transfer</Text>
      <Text style={styles.title1}>05 Dec, 12:36</Text>
      <View style ={{flexDirection: "row"}}>
      <Link href="/daftar" asChild>
              <Pressable>
                {({ pressed }) => (
                 <Text style={styles.p1}>Sale Julia</Text>
                )}
              </Pressable>
        </Link>
      <Text style={styles.p1p1}>RM 500</Text>
      </View>
      <Text style={styles.p1p2}>Online Transfer</Text>
      
      <Text style={styles.title}>November 23</Text>
      
      <Text style={styles.title1}>09 Nov, 05:25</Text>
      <View style ={{flexDirection: "row"}}>
      <Link href="/daftar" asChild>
              <Pressable>
                {({ pressed }) => (
                 <Text style={styles.p1}>Sale Maria</Text>
                )}
              </Pressable>
        </Link>
      <Text style={styles.p1p3}>RM 200</Text>
      
      </View>
      <Text style={styles.p1p2}>Online Transfer</Text>
      <Text style={styles.title1}>14 Nov, 7:16</Text>
      <View style ={{flexDirection: "row"}}>
      <Link href="/daftar" asChild>
              <Pressable>
                {({ pressed }) => (
                 <Text style={styles.p1}>Sale Haiyan</Text>
                )}
              </Pressable>
        </Link>
      <Text style={styles.p1p4}>RM 500</Text>
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
    color: "#DE8E03",
  },
  title1: {
    fontSize: 15,
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
    marginLeft: 150,
   
  },
  p1p1: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 8,
    marginLeft: 183,
   
  },
  p1p3: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 8,
    marginLeft: 175,
   
  },
  p1p4: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 8,
    marginLeft: 160,
   
  },
  p1p2: {
    fontSize: 15,
    paddingTop: 8,
    marginLeft: 20,
    color: "#AEAEAE"
  },
  
});
