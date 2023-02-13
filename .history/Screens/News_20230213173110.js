import { ScrollView, StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React, { useContext, useEffect, useState,Linking } from 'react'
import NewsContext from '../context/NewsContext';
import Itemscreen from './Itemscreen';

const News = () => {
    const [article, setarticle] = useState([]);

    const windowheight = Dimensions.get('window').height;

    const context = useContext(NewsContext);
    const { category } = context


    const fetchnews = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=26fd3a8b82f14d0a8394d95169631e3f`;
        const data = await fetch(url);
        let parseddata = await data.json()
        setarticle(parseddata.articles)
    }

    useEffect(() => {
        fetchnews();
    }, [category])

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{}}>
                {article.map((item) => {
                    return (
                        <View style={{ marginVertical: 10, height: windowheight }}>
                            <Image style={{ width: '100%', height: 300,  }} source={{ uri: item.urlToImage }} />
                            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                            <Text>{item.publishedAt}</Text>
                            <Text>{item.author}</Text>
                            </View>
                            <Text style={{ fontSize: 20,fontWeight:'500',marginVertical:5 }}>{item.title}</Text>
                            <Text style={{fontSize:19}}>{item.content}</Text>
                            <Text onPress={()=> Linking.openURL('http://google.com')} style={{color:'red',fontSize:20}}>Read More</Text>
                        </View>
                    )
                })}
            </View>
        </ScrollView>
    )
}

export default News

const styles = StyleSheet.create({})