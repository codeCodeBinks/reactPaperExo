import { View, Text } from "react-native"
import CardElement from "./CardElement"
import data from '../db/db.json'
import { ScrollView } from "react-native";

function Home() {
console.log(data);



  return (
    <View style ={{height : "90%"}}>
      <View style = {{padding : 10}}>
        <Text style={{fontSize : 30, fontWeight:"bold", marginLeft:16,marginBottom:4 }}>Home</Text>
  <ScrollView>
   {data.map((el,i) => <CardElement element = {el} key={i}/>)}
   </ScrollView>
        </View>
   </View>
  )
}

export default Home