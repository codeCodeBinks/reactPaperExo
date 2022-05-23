import * as React from 'react';
import { BottomNavigation } from 'react-native-paper';
import Home from '../components/Home'
import Histo from '../components/Histo'
import Ajout from '../components/Ajout'
import Param from '../components/Param'
import { View, Text, StyleSheet } from 'react-native';
import { Touchable } from 'react-native';


const Appbarbottom = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'Home', title: 'Home'},
    { key: 'Histo', title: 'Histo'},
    { key: 'Ajout', title: 'Ajout'},
    { key: 'Param', title: 'Param'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    Home: Home,
    Histo: Histo,
    Ajout: Ajout,
    Param: Param,
  });

  return (
    <BottomNavigation
      style = {{padding : 5}}
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      shifting = {false}    
      /* renderTouchable pour carré gris */
    />
  );
};

export default Appbarbottom;
