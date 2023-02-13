import { StyleSheet, Text, View, StatusBar, useWindowDimensions } from 'react-native';
import Homepage from './Screens/Homepage';


export default function App() {
  const layout = useWindowDimensions
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
