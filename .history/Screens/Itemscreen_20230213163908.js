import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Itemscreen = ({item,index}) => {
  return (
    <View>
      <Text>{item.title}</Text>
    </View>
  )
}

export default Itemscreen

const styles = StyleSheet.create({})