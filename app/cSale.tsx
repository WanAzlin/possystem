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
    <View style={{flexDirection:'row'}}>
    <View style={styles.box1}> 
    <Image style={styles.iB1}
      source={require("../assets/images/samping1.jpg")} /> 
      <Text style={{ fontSize: 15, marginBottom: -20,color: '#FFFFFF',  alignSelf: "center",}}>{"RM "+this.state.value}</Text>
    </View> 
    
   
    <View style={styles.box2}> 
    <Image style={styles.iB2}
      source={require("../assets/images/samping2.jpg")} /> 
    <Text style={{ fontSize: 15, marginBottom: -20,color: '#FFFFFF',  alignSelf: "center",}}>{"RM "+this.state.value}</Text>

    </View> 
    </View>    
    <View style={{flexDirection:'row'}}>
    <View style={{flexDirection:'row'}}>
      <View style={styles.mButton1}>
          <Button color='#FFFFFF' onPress={this.decrementValue1}  title="-"/>
         </View>
         <Text style={{ fontSize: 20, paddingTop: 35, color: '#FFFFFF', paddingRight:30}}>{+this.state.total_taps}</Text>
         <View style={styles.pButton1}>
         <Button color='#FFFFFF' onPress={this.incrementValue1} title="+"/>
         </View>
      </View> 
      <View style={{flexDirection:'row'}}>
      <View style={styles.mButton3}>
          <Button color='#FFFFFF' onPress={this.decrementValue3}  title="-"/>
         </View>
         <Text style={{ fontSize: 20, paddingTop: 35, color: '#FFFFFF', paddingLeft:30}}>{+this.state.total_taps}</Text>
         <View style={styles.pButton4}>
         <Button color='#FFFFFF' onPress={this.incrementValue3} title="+"/>
         </View>
         
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
  iBF3: {
    width: 35,
    height:35,
    paddingTop: 20,   
  },
  iB1: {
    width: 205,
    height:230,
    borderRadius: 10,   
  },
  iB2: {
    width: 205,
    height:230,
    alignItems: 'center', 
    borderRadius: 10,  
  },
  topbutton: { 
    marginRight: 10,
    justifyContent: "center",
    borderRadius: 20,
    borderColor: '#C70039',
    paddingHorizontal: 10,
    alignSelf: "flex-end",
    backgroundColor: "#C70039",
  },
  box1: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'flex-start',
    borderRadius: 10,
    marginTop: 20,
    marginRight: 10,
  },
  box2: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'flex-start',
    marginRight: 1,
    borderRadius: 10,
    marginTop: 20,
  },
  mButton1: { 
    marginRight: 30,
    borderRadius: 10,
    borderColor: '#DE8E03',
    paddingHorizontal: 10,
    marginTop: 30,
    backgroundColor: "#DE8E03",
  },
  pButton1: { 
    marginRight: 10,
    borderRadius: 8,
    borderColor: '#DE8E03',
    paddingHorizontal: 10,
    marginTop: 30,
    backgroundColor: '#DE8E03',
  },
  mButton3: { 
    marginLeft: 30,
    borderRadius: 10,
    borderColor: '#DE8E03',
    paddingHorizontal: 10,
    marginTop: 30,
    backgroundColor: "#DE8E03",
  },
  pButton4: { 
    marginLeft: 30,
    borderRadius: 8,
    borderColor: '#DE8E03',
    paddingHorizontal: 10,
    marginTop: 30,
    backgroundColor: '#DE8E03',
  },
});
