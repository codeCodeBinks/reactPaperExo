import { Card, Title, Paragraph } from 'react-native-paper';
import { View } from 'react-native';


const CardElement = ({element}) => (
  <Card style = {{marginTop : 10, borderWidth : 2, borderColor : "black"}}>
    <Card.Content style={{flexDirection : "row", paddingHorizontal : 0}}>
      <Card.Content style = {{flex : 1}}>
          <Paragraph>{element.date}</Paragraph>   
          <Title>{element.activity}</Title>
         <View style={{marginTop : 50}}>
          <Title>Distance</Title>
          <Paragraph>{element.distance}</Paragraph>   
          </View>
      </Card.Content>
      <Card.Content style = {{}}>
          <Card.Cover style = {{width : 140, height: 100}} source={{ uri: element.photo }} />
          <View style = {{marginLeft : 60, marginTop : 10}} >
            <Title>Durée</Title>
            <Paragraph>{element.duree}</Paragraph>  
          </View>
      </Card.Content>
    </Card.Content>
  </Card>
);

export default CardElement;