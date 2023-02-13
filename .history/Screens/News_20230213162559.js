import { ScrollView, StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import NewsContext from '../context/NewsContext';
import Carousel from 'react-native-snap-carousel';

const News = () => {
    const [article, setarticle] = useState([]);

    const windowheight = Dimensions.get('window').height();

    const context = useContext(NewsContext);
    const { category } = context


    const fetchnews = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=26fd3a8b82f14d0a8394d95169631e3f`;
        const data = await fetch(url);
        let parseddata = await data.json()
        setarticle(parseddata.articles)
    }

    const renderitem = () => {
        return (
            <View>

            </View>
        )
    }

    useEffect(() => {
        fetchnews();
    }, [category])

    return (
        <Carousel
            layout='stack'
            data={article}
            renderItem={renderitem}
            sliderWidth={sliderWidth}
            itemWidth={itemWidth}
        />
    )
}

export default News

const styles = StyleSheet.create({})