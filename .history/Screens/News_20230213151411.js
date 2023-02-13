import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import NewsContext from '../context/NewsContext';

const News = () => {
    const [article, setarticle] = useState([]);

    const context = useContext(NewsContext);
    const {category} = context

    const fetchnews = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${}&apiKey=26fd3a8b82f14d0a8394d95169631e3f`;
        const data = await fetch(url);
        let parseddata = await data.json()
        setarticle(parseddata.articles)
    }

    useEffect(() => {
        fetchnews();
    }, [])

    return (
        <ScrollView>
            <View style={{ alignItems: 'center' }} >

                {article.map((item) => {
                    return (
                        <View key={item.id} style={{ width: '96%', marginVertical:10 }}>
                            <Image style={{ width: '100%', height: 250 }} source={{ uri: item.urlToImage }} />
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