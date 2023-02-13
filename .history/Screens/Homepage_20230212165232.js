import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Topbar from './Topbar'

const Homepage = () => {
    return (
        <View>
            <Topbar />
            <View>
                <Text>All news</Text>
            </View>
        </View>
    )
}

export default Homepage

const styles = StyleSheet.create({})