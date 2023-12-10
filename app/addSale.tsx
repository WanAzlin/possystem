import { Button, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';



export default class App extends React.Component{
  state ={
    value: 0,
    total_taps: 0,
  
  }

incrementValue1 = () => {
  this.setState({
    value: this.state.value + 100,
    total_taps: this.state.total_taps + 1,
   

  })
  console.log("Value: " + (this.state.value +1))
}
decrementValue1= () => {
  this.setState({
    value: this.state.value - 100,
    total_taps: this.state.total_taps - 1,
   
  })
  console.log("Value: " + (this.state.value +1))
}
resetValue1= () => {
  this.setState({
    value: this.state.value = 0,
    total_taps: this.state.total_taps = 0,
   
  })
  console.log("Value: " + (this.state.value +1))
}
incrementValue2 = () => {
  this.setState({
    value: this.state.value + 50,
    total_taps: this.state.total_taps + 1,
   

  })
  console.log("Value: " + (this.state.value +1))
}
decrementValue2= () => {
  this.setState({
    value: this.state.value - 50,
    total_taps: this.state.total_taps - 1,
   
  })
  console.log("Value: " + (this.state.value +1))
}
resetValue2= () => {
  this.setState({
    value: this.state.value = 0,
    total_taps: this.state.total_taps = 0,
   
  })
  console.log("Value: " + (this.state.value +1))
}
incrementValue3 = () => {
  this.setState({
    value: this.state.value + 80,
    total_taps: this.state.total_taps + 1,
   

  })
  console.log("Value: " + (this.state.value +1))
}
decrementValue3= () => {
  this.setState({
    value: this.state.value - 80,
    total_taps: this.state.total_taps - 1,
   
  })
  console.log("Value: " + (this.state.value +1))
}
resetValue3= () => {
  this.setState({
    value: this.state.value = 0,
    total_taps: this.state.total_taps = 0,
   
  })
  console.log("Value: " + (this.state.value +1))
}


  render(){
      return (
    <View style={styles.container}>
      <View style={styles.topbutton}>
      <View style={{flexDirection:'row'}}>
      <Image style={styles.iBF3}
      source={require("../assets/images/redo.png")} /> 
      <Button  color="#FFFFFF"  onPress={this.resetValue2} title="Reset"/>
      </View>
    </View>

    <View style={styles.saleResult}>
      <Text style={{ fontSize: 60, marginBottom: -20,color: '#FFFFFF',  alignSelf: "center",}}>{"RM "+this.state.value}</Text>
      <Text style={{ fontSize: 15, padding: 20, color: '#FFFFFF', alignSelf: "center",}}>{"Total Sale Added: "+this.state.total_taps}</Text>
    </View>

      
    <View style={styles.cont1}>
      
    <View style={{flexDirection:'row'}}>
     
      <Text style={{ fontSize: 18,paddingRight: 76, paddingTop:8, marginLeft: 10,color: '#FFFFFF'}}>Samping Brunei (RM100) </Text>
      <View style={{flexDirection:'row'}}>
        <View style={styles.mButton1}>
          <Button color='#FFFFFF' onPress={this.decrementValue1}  title="-"/>
         </View>
         <View style={styles.pButton1}>
          <Button color='#FFFFFF'  onPress={this.incrementValue1} title="+"/>
         </View>
      </View>
      </View>   
   </View>
   <View style={styles.cont1}> 
     
   <View style={{flexDirection:'row'}}>
      
      <Text style={{ fontSize: 18, paddingRight: 70, paddingTop:8, marginLeft: 3, color: '#FFFFFF'}}>Samping Exclusive (RM50)</Text>
      <View style={{flexDirection:'row'}}>
        <View style={styles.mButton1}>
          
        <Button color='#FFFFFF' onPress={this.decrementValue2} title="-"/>
         </View>
         <View style={styles.pButton1}>
         <Button color='#FFFFFF' onPress={this.incrementValue2} title="+"/>
         </View>
      </View>
      </View>
      <View style={styles.cont2}>
      <View style={styles.bottomResult}>
      <View style={{flexDirection:'row'}}>
      <Image style={styles.iBF4}
      source={require("../assets/images/debit-card.png")} /> 
      <Text style={{ fontSize: 30, color: '#FFFFFF',  alignSelf: "center",}}>Pay Now</Text>
     </View>
    </View>
         <Text style={{ fontSize: 20, color: '#FFFFFF',   alignSelf: "center",}}>Back</Text>
     
        
      
      
    </View>
   </View>      
        
      
     
    </View>
    
  );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    paddingTop: 20,
  },
  cont1: {
   marginBottom: 20, 
  },
  iBF3: {
    width: 35,
    height:35,
    paddingTop: 20, 
    
    
  },
  iBF4: {
    width: 35,
    height:35,
    marginRight: 8 
    
    
  },
  cont2: {
    
    paddingTop: 150,
  
    
   },
   cont3: {
   
    
    paddingRight: 100,
    
   },
  box1: {
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: "#FEFEFE",
    padding: 18,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 5,
    borderRadius: 6,
    marginTop: 30,
    
  },
  circle1: {
    width: 45,
    height: 45,
    borderRadius: 5,
    marginLeft: 15,
  },
  circle2: {
    width: 45,
    height: 45,
    borderRadius: 5,
    marginLeft:50,
  },
 saleResult: { 
    margin: 10,
    marginRight: 15,
    justifyContent: "center",
    borderRadius: 10,
    borderColor: "#DE8E03",
    borderWidth: 2,
    paddingHorizontal: 80,
    alignSelf: "center",
    paddingVertical: 5,
    backgroundColor: "#DE8E03",
    marginTop: 30,
    marginBottom: 30,
    paddingTop: 20,
  },
  bottomResult: { 
    margin: 10,
    marginRight: 15,
    justifyContent: "center",
    borderColor: "#C70039",
    borderWidth: 2,
    paddingHorizontal: 100,
    alignSelf: "center",
    paddingVertical: 5,
    backgroundColor: "#C70039",
    marginTop: 30,
    borderRadius: 25,
    
  },
  topbutton: { 
    marginRight: 45,
    justifyContent: "center",
    borderRadius: 20,
    borderColor: '#C70039',
    paddingHorizontal: 10,
    alignSelf: "flex-end",
    backgroundColor: "#C70039",
  },
  mButton1: { 
    marginRight: 10,
    borderRadius: 10,
    borderColor: '#DE8E03',
    paddingHorizontal: 10,
    alignSelf: "flex-end",
    backgroundColor: "#DE8E03",
  },
  pButton1: { 
    marginRight: 10,
    borderRadius: 8,
    borderColor: '#DE8E03',
    paddingHorizontal: 10,
    alignSelf: "flex-end",
    backgroundColor: '#DE8E03',
  },
  
});
