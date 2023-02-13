import { useState } from 'react';
import { StyleSheet, Text, View, StatusBar, useWindowDimensions } from 'react-native';
import { SceneMap, TabView } from 'react-native-tab-view';
import Discover from './Screens/Discover';
import Homepage from './Screens/Homepage';
import News from './Screens/News';
import Topbar from './Screens/Topbar';

export default function App() {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(1);

  const [routes] = useState([
    { key: 'first', title: 'discover' },
    { key: 'second', title: 'news' },
  ]);

  const renderScene = SceneMap({
    first: Discover,
    second: News,
  });


  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={() => { return <Topbar index={index} />  }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight
  },
});
