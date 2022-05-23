import { StyleSheet, View } from 'react-native';
import Appbartop from './components/Apppbartop';
import Appbarbottom from './components/Appbarbottom';
import Home from './components/Home';

export default function App() {
  return (

    <View style={styles.container}>
      <Appbartop/>
      <Appbarbottom/>
    
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgrey',
 padding : 15,
 marginTop : 30
  },
});
