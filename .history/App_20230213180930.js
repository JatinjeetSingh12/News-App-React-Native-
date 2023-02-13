import { useState } from 'react';
import { StyleSheet, Text, View, StatusBar, } from 'react-native';
import NewsContext from './context/NewsContext';
import Homepage from './Screens/Homepage';

export default function App() {

  const [index, setIndex] = useState(1);
  const [source,setsource] = useState()
  const [category, setcategory] = useState("general")
  console.log(source)


  return (
    <NewsContext.Provider value={{ index, setIndex,category,setcategory,source,setsource }}>
      <Homepage />
    </NewsContext.Provider>
  );
}


