import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Topbar from './Topbar'

const Homepage = () => {
    return (
        <View style={styles.container}>
            <Topbar s />
            <View style={{flex:2}}>
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