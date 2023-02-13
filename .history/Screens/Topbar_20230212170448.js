import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AntDesign, Ionicons } from '@expo/vector-icons';

const Topbar = () => {
    return (
        <View style={styles.container}>
            <View style={styles.topbar}>
                <View style={{ flexDirection: 'row' }}>
                    <Ionicons style={{}} name="chevron-back" size={24} color="blue" />
                    <Text style={{fontSize:18}}>Discover</Text>
                </View>
                <Text style={{fontSize:18,paddingRight:10}}>My Feed</Text>
                <AntDesign name="reload1" size={24} color="black" />
            </View>
        </View>
    )
}

export default Topbar

const styles = StyleSheet.create({
    container: {
        flex: 0.5,
        borderWidth: 1,
        justifyContent: 'center'
    },
    topbar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})