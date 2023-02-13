import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const Discover = () => {
    return (
        <View>
            <View style={{alignItems:'center',marginTop:20}}>
                <TextInput
                placeholder='Search for News'
                 onChangeText={(text)=>{console.log(text)}} style={{width:"80%",height:35,borderWidth:1,borderRadius:10,paddingLeft:10}} />
            </View>
            <View>
                <Text style={{fontSize:30}}>Category</Text>
                
            </View>
        </View>
    )
}

export default Discover

const styles = StyleSheet.create({})