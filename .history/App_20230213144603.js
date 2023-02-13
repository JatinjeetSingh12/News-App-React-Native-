import { useState } from 'react';
import { StyleSheet, Text, View, StatusBar, useWindowDimensions } from 'react-native';
import { SceneMap, TabView } from 'react-native-tab-view';
import NewsContext from './context/NewsContext';
import Discover from './Screens/Discover';
import News from './Screens/News';

export default function App() {
 

  return (
    <NewsContext></NewsContext>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight
  },
});
