import { StyleSheet, Text, View, StatusBar, } from 'react-native';
import NewsContext from './context/NewsContext';
import Homepage from './Screens/Homepage';

export default function App() {

  const [index, setIndex] = useState(1);

  return (
    <NewsContext.Provider>
      <Homepage />
    </NewsContext.Provider>
  );
}


