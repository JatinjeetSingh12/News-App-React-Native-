import { useState } from 'react';
import { StyleSheet, Text, View, StatusBar, useWindowDimensions } from 'react-native';

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
