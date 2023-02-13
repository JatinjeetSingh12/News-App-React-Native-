import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Homepage from './Screens/Homepage';
import Topbar from './Screens/Topbar';
import Topbar from './Topbar'


const Homepage = () => {
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