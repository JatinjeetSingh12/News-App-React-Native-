import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const Discover = () => {
    return (
        <View>
            <View style={{alignItems:'center',marginTop:20}}>
                <TextInput
                placeholder='Search for News'
                 onChangeText={(text)=>{console.log(text)}} style={{width:"80%",height:35,borderWidth:1,}} />
            </View>
        </View>
    )
}

export default Discover

const styles = StyleSheet.create({})