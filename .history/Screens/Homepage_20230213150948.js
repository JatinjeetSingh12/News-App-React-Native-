import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React, { useContext,useState } from 'react'
import Topbar from './Topbar';
import Discover from './Discover';
import News from './News';
import { SceneMap, TabView } from 'react-native-tab-view';
import NewsContext from '../context/NewsContext';


const Homepage = () => {

    const layout = useWindowDimensions();

    const context = useContext(NewsContext)

    const {index,setIndex} = 

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
