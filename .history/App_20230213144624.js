import { useState } from 'react';
import { StyleSheet, Text, View, StatusBar, useWindowDimensions } from 'react-native';
import { SceneMap, TabView } from 'react-native-tab-view';
import NewsContext from './context/NewsContext';

import Homepage from './Screens/Homepage';

export default function App() {


  return (
    <NewsContext.Provider>
      <Homepage />
    </NewsContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight
  },
});
