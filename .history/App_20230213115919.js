import { StyleSheet, Text, View } from 'react-native';
import Homepage from './Screens/Homepage';


export default function App() {
  return (
    <Homepage />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
