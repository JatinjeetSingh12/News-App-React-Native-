import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const Discover = () => {
    return (
        <View>
            <View style={{al}}>
                <TextInput onChangeText={(text)=>{console.log(text)}} style={{width:300,height:30,borderWidth:1,}} />
            </View>
        </View>
    )
}

export default Discover

const styles = StyleSheet.create({})