import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import React, { useContext, useState } from 'react'
import NewsContext from '../context/NewsContext'

const Discover = () => {

    const data = [
        {
            "category": "general",
            "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_M6SzMy82SMHPAcWvpDIZoTiPKYXvhxnswA&usqp=CAU"
        },
        {
            "category": "business",
            "img": "https://s3images.zee5.com/wp-content/uploads/2021/09/getty_180152187_970679970450042_64007.jpeg"

        },
        {
            "category": "entertainment",
            "img": "https://d5zukw8vdn04n.cloudfront.net/wp-content/uploads/2020/10/shutterstock_1149399851.jpg"

        },
        {
            "category": "health",
            "img": "https://www.mapsofindia.com/ci-moi-images/my-india/2021/06/healthcare-trends-2021.jpg"

        },
        {
            "category": "science",
            "img": "https://img.freepik.com/free-vector/science-word-theme_23-2148540555.jpg?w=360"

        },
        {
            "category": "sports",
            "img": "https://img.freepik.com/free-vector/flat-national-sports-day-illustration_23-2148999705.jpg?w=2000"

        },
        {
            "category": "technology",
            "img": "https://transcosmos.co.uk/wp-content/uploads/2015/10/technology-customer-support1.jpg"
        },
    ]

    const sources = [
        {
            "img":"https://yt3.googleusercontent.com/MRywaef1JLriHf-MUivy7-WAoVAL4sB7VHZXgmprXtmpOlN73I4wBhjjWdkZNFyJNiUP6MHm1w=s900-c-k-c0x00ffffff-no-rj",
            "name":"BBC News"
        },
        {
            "img":"https://image.cnbcfm.com/api/v1/image/105490644-1538754174999cnbctv_tvlistinggraphic_bluesite_v001.png?v=1538754309&w=884&h=442&vtcrop=y",
            "name":""
        },
        {
            "img":"https://m.media-amazon.com/images/I/515hrZfxwrL.png",
            "name":""
        },
    ]

    const context = useContext(NewsContext);
    const { setcategory, setIndex,setsource } = context

    const categoryhandle = (item) => {
        setcategory(item);
        setIndex(1);
    }
    
    const sourcehandle = () => {
        setIndex(1);
        setsource(sources)
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
                            <Image style={{ height: 100, width: 100 }} source={{ uri: item.img }} />
                            <Text style={{ fontSize: 20 }}>{item.category}</Text>
                        </TouchableOpacity>
                    )
                }} />

            </View>
            <View>
                <Text style={{ fontSize: 30 }}>Source</Text>
                <View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginVertical: 5 }}>
                        <TouchableOpacity onPress={() => sourcehandle("BBC News")}>
                            <Image style={{ height: 200, width: 190 }} source={{ uri: "https://yt3.googleusercontent.com/MRywaef1JLriHf-MUivy7-WAoVAL4sB7VHZXgmprXtmpOlN73I4wBhjjWdkZNFyJNiUP6MHm1w=s900-c-k-c0x00ffffff-no-rj" }} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => sourcehandle("CNBC")}>
                            <Image style={{ height: 200, width: 190 }} source={{ uri: "https://image.cnbcfm.com/api/v1/image/105490644-1538754174999cnbctv_tvlistinggraphic_bluesite_v001.png?v=1538754309&w=884&h=442&vtcrop=y" }} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                        <TouchableOpacity onPress={() => sourcehandle("Fox News")}>
                            <Image style={{ height: 200, width: 190 }} source={{ uri: "https://m.media-amazon.com/images/I/515hrZfxwrL.png" }} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => sourcehandle("CNN")}>
                            <Image style={{ height: 200, width: 190 }} source={{ uri: "https://cdn.cnn.com/cnn/.e/img/3.0/global/misc/cnn-logo.png" }} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Discover

const styles = StyleSheet.create({})