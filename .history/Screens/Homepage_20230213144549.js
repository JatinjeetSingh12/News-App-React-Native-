import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Homepage from './Screens/Homepage';
import Topbar from './Topbar';

import Discover from './Discover';
import News from './News';

const Homepage = () => {

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
      renderTabBar={() => { return <Topbar index={index} setIndex={setIndex} /> }}
    />
    )
}

export default Homepage

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
})