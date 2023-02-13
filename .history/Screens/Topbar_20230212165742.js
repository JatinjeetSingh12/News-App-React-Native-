import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

const Topbar = () => {
  return (
    <View style={styles.container}>
        <Text>Discover</Text>
      <Text>News</Text>
      <AntDesign name="reload1" size={24} color="black" />

    </View>
  )
}

export default Topbar

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        borderWidth:1
    }
})