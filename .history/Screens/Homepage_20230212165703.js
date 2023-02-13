import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Topbar from './Topbar'
import { AntDesign } from '@expo/vector-icons';

const Homepage = () => {
    return (
        <View style={styles.container}>
            <Topbar  />
            <View style={{flex:7}}>
                <Text>All news</Text>
            </View>
        </View>
    )
}

export default Homepage

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
})