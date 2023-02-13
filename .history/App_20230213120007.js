import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Homepage from './Screens/Homepage';


export default function App() {
  return (
    <Homepage />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight
  },
});
