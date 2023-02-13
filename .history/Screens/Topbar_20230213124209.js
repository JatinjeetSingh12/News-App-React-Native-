import { StyleSheet, Text, View, StatusBar } from 'react-native'
import React from 'react'
import { AntDesign, Ionicons } from '@expo/vector-icons';

const Topbar = ({ index }) => {
    return (
        <View style={styles.container}>
            {index === 0 ? (
                <View style={styles.topbardiscover}>
                    <Text>Discover</Text>
                    <Text>My Feed</Text>
                </View>
            ) : (

                <View style={styles.topbarnews}>

                    <View style={{ flexDirection: 'row' }}>
                        <Ionicons style={{}} name="chevron-back" size={24} color="blue" />
                        <Text style={{ fontSize: 18 }}>Discover</Text>
                    </View>

                    <View style={{ marginRight: 50 }}>
                        <Text style={{ fontSize: 18 }}>My Feed</Text>
                    </View>

                    <AntDesign name="reload1" size={24} color="black" />
                </View>

            )}

        </View>
    )
}

export default Topbar

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        marginTop: StatusBar.currentHeight
    },
    topbarnews: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 0.5
    },
    d
})