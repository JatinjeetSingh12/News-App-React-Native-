import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View,Image } from 'react-native'
import React, { useContext, useState } from 'react'
import NewsContext from '../context/NewsContext'

const Discover = () => {

    const data = [
        {
            "category": "general",
            "img":""
        },
        {
            "category": "business",
            "img":""
            
        },
        {
            "category": "entertainment",
            "img":""
            
        },
        {
            "category": "health",
            "img":"https://www.mapsofindia.com/ci-moi-images/my-india/2021/06/healthcare-trends-2021.jpg"
            
        },
        {
            "category": "science",
            "img":""
            
        },
        {
            "category": "sports",
            "img":"https://img.freepik.com/free-vector/flat-national-sports-day-illustration_23-2148999705.jpg?w=2000"
            
        },
        {
            "category": "technology",
            "img":""
        },
    ]

    const context = useContext(NewsContext);
    const { setcategory, setIndex } = context

    const categoryhandle = (item) => {
        setcategory(item);
        setIndex(1);
    }

    return (
        <View>
            <View style={{ alignItems: 'center', marginTop: 20 }}>
                <TextInput
                    placeholder='Search for News'
                    onChangeText={(text) => { console.log(text) }} style={{ width: "80%", height: 35, borderWidth: 1, borderRadius: 10, paddingLeft: 10 }} />
            </View>
            <View>
                <Text style={{ fontSize: 30 }}>Category</Text>
                <FlatList showsHorizontalScrollIndicator={false} data={data} horizontal={true} renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => categoryhandle(item.category)} style={{ paddingHorizontal: 10 }}>
                            <Image source={{uri:item.img}} />
                            <Text style={{ fontSize: 20 }}>{item.category}</Text>
                        </TouchableOpacity>
                    )
                }} />
            </View>
        </View>
    )
}

export default Discover

const styles = StyleSheet.create({})