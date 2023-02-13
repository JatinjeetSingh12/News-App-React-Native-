import { StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Topbar = ({ index, setIndex }) => {
    return (
        <View style={styles.container}>
            {index === 0 ? (
                <View style={styles.topbardiscover}>
                    <MaterialCommunityIcons name="theme-light-dark" size={28} color="black" />
                    <Text style={{ fontSize: 22, paddingLeft: 70 }}>Discover</Text>
                    <TouchableOpacity onPress={()=>{setIndex(1)}} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 18 }}>My Feed</Text>
                        <Ionicons name="chevron-forward" size={24} color="black" />
                    </TouchableOpacity>

                </View>
            ) : (

                <View style={styles.topbarnews}>

                    <TouchableOpacity onPress={()=>{setIndex(0)}} style={{ flexDirection: 'row' }}>
                        <Ionicons style={{}} name="chevron-back" size={24} color="blue" />
                        <Text style={{ fontSize: 18 }}>Discover</Text>
                    </TouchableOpacity>

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
    topbardiscover: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 0.5

    }
})