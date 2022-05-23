import { Appbar } from 'react-native-paper';
import { Avatar } from 'react-native-paper';

const Appbartop = () => (
  <Appbar style={{height : 100, backgroundColor:'#6F00F8'}}>
     <Appbar.Content title="Activity Tracker" titleStyle={{color : "black", fontSize :25, fontWeight:'bold'}}/>
     <Avatar.Image style = {{marginRight:10}} size={72} source={require('../assets/AvatarMaker.png')} />
  </Appbar>
 );

export default Appbartop
