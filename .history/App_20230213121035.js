import { useState } from 'react';
import { StyleSheet, Text, View, StatusBar, useWindowDimensions } from 'react-native';
import { SceneMap } from 'react-native-tab-view';
import Homepage from './Screens/Homepage';


export default function App() {
  const layout = useWindowDimensions();

  const [index,setIndex] = useState(1);

  const [routes] = useState([
    { key: 'first', title: 'discover' },
    { key: 'second', title: 'news' },
  ]);

  const renderScene = SceneMap({
    first: Dis,
    second: SecondRoute,
  });


  return (
    <View style={styles.container}>
    <Homepage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight
  },
});
