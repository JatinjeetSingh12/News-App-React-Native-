import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const Discover = () => {
    return (
        <View>
            <View>
                <TextInput onChangeText={(text)=>{console.log(text)}} />
            </View>
        </View>
    )
}

export default Discover

const styles = StyleSheet.create({})