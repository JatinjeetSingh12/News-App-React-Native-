import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const News = () => {
   const [article]
    return (
        <ScrollView>
            <View style={{alignItems:'center'}} >

                {article.map((item) => {
                    return (
                        <View key={item.id} style={{width:'96%',}}>
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