import { useState } from 'react';
import { StyleSheet, Text, View, StatusBar, useWindowDimensions } from 'react-native';
import Homepage from './Screens/Homepage';


export default function App() {
  const layout = useWindowDimensions();

  const [index,setIndex] = useState(1);

  const [routes] = React.useState([
    { key: 'first', title: 'First' },
    { key: 'second', title: 'Second' },
  ]);


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
