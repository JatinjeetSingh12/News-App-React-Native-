import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const News = () => {
    const article = [
        {
            "id": 1,
            "author": "MAE ANDERSON",
            "title": "Super Bowl ads use nostalgia, star power and light laughs",
            "description": "Off the field at the Super Bowl, 50-plus marketers are having a battle of their own.  It was a year of change for the Super Bowl since other alcohol ads were...",
            "url": "https://news.yahoo.com/look-lots-cute-animals-humor-000558400.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/aSSjpqDAjmyd9i1T5YSWLA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD03MzU-/https://media.zenfs.com/en/ap.org/05b37a342a34b920afdb4868a79017e3",
            "publishedAt": "2023-02-13T00:05:58Z",
            "content": "NEW YORK (AP) Off the field at the Super Bowl, 50-plus marketers are having a battle of their own.\r\nThey're trying to reach the more than 100 million people tuning into the broadcast on Fox. It's a p… [+4055 chars]"
        },
        {
            "id": 2,
            "author": "MAE ANDERSON",
            "title": "Super Bowl ads use nostalgia, star power and light laughs",
            "description": "Off the field at the Super Bowl, 50-plus marketers are having a battle of their own.  It was a year of change for the Super Bowl since other alcohol ads were...",
            "url": "https://news.yahoo.com/look-lots-cute-animals-humor-000558400.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/aSSjpqDAjmyd9i1T5YSWLA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD03MzU-/https://media.zenfs.com/en/ap.org/05b37a342a34b920afdb4868a79017e3",
            "publishedAt": "2023-02-13T00:05:58Z",
            "content": "NEW YORK (AP) Off the field at the Super Bowl, 50-plus marketers are having a battle of their own.\r\nThey're trying to reach the more than 100 million people tuning into the broadcast on Fox. It's a p… [+4055 chars]"
        },
        {
            "id": 3,
            "author": "Mae",
            "title": "Super Bowl ads use nostalgia, star power and light laughs",
            "description": "Off the field at the Super Bowl, 50-plus marketers are having a battle of their own.  It was a year of change for the Super Bowl since other alcohol ads were...",
            "url": "https://news.yahoo.com/look-lots-cute-animals-humor-000558400.html",
            "urlToImage": "h+jt3PTEyMDA7aD03MzU-/https://media.zenfs.com/en/ap.org/05b37a342a34b920afdb4868a79017e3",
            "publishedAt": "2023-02-13T00:05:58Z",
            "content": "NEW YORK (AP) Off the field at the Super Bowl, 50-plus marketers are having a battle of their own.\r\nThey're trying to reach the more than 100 million people tuning into the broadcast on Fox. It's a p… [+4055 chars]"
        },
    ]
    return (
        <ScrollView>
            <View >

                {article.map((item) => {
                    return (
                        <View key={item.id}>
                            <Image style={{width:'100%',height:200}} source={{uri:item.urlToImage}} />
                            <Text>{item.title}</Text>
                        </View>
                    )
                })}
            </View>
        </ScrollView>
    )
}

export default News

const styles = StyleSheet.create({})