import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const Discover = () => {

    const data = [
        {
            "category":"genral",

        },
        {
            "category":"business",

        },
        {
            "category":"entertainment",

        },
        {
            "category":"health",

        },
        {
            "category":"science",

        },
        {
            "category":"sports",

        },
        {
            "category":"technology",
        },
    ]

    return (
        <View>
            <View style={{ alignItems: 'center', marginTop: 20 }}>
                <TextInput
                    placeholder='Search for News'
                    onChangeText={(text) => { console.log(text) }} style={{ width: "80%", height: 35, borderWidth: 1, borderRadius: 10, paddingLeft: 10 }} />
            </View>
            <View>
                <Text style={{ fontSize: 30 }}>Category</Text>
                <FlatList data={data} horizontal={true} renderItem={({item})=>{
                    return(
                        <Too style={{paddingHorizontal:10}}>
                            <Text style={{fontSize:20}}>{item.category}</Text>
                        </Too>
                    )
                }} />
            </View>
        </View>
    )
}

export default Discover

const styles = StyleSheet.create({})