import { StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import NewsContext from '../context/NewsContext';

const Topbar = ({ index, setIndex }) => {

    const context = useContext(NewsContext);
    const { setcategory } = context

    return (
        <View style={styles.container}>

            {index === 0 ? (

                <View style={styles.topbardiscover}>

                    <MaterialCommunityIcons name="theme-light-dark" size={28} color="#007FFF" />

                    <View style={{ marginRight: 20 }}></View>
                    
                    <Text style={styles.topbardiscovertitle}>Discover</Text>

                    <TouchableOpacity onPress={() => { setIndex(1) }} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 18 }}> Feed</Text>
                        <Ionicons name="chevron-forward" size={24} color="#007FFF" />
                    </TouchableOpacity>

                </View>
            ) : (

                <View style={styles.topbarnews}>

                    <TouchableOpacity onPress={() => { setIndex(0) }} style={{ flexDirection: 'row' }}>
                        <Ionicons style={{}} name="chevron-back" size={26} color="#007FFF" />
                        <Text style={{ fontSize: 20 }}>Discover</Text>
                    </TouchableOpacity>

                    <View style={{ marginRight: 60 }}>
                        <Text style={styles.topbarnewstitle}>My Feed</Text>
                    </View>
                    <TouchableOpacity onPress={()=>{setcategory("general")}}>
                    <AntDesign  style={{ paddingRight: 4 }} name="reload1" size={24} color="#007FFF" />
                    </TouchableOpacity>
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
        borderBottomWidth: 0.5,
        paddingBottom: 8
    },
    topbardiscover: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 0.5,
        paddingBottom: 8
    },
    topbarnewstitle: {
        fontWeight: '500',
        fontSize: 22,
        borderBottomWidth: 5,
        borderBottomColor: '#007FFF',
        borderRadius: 10
    },
    topbardiscovertitle: {
        fontWeight: '500',
        fontSize: 22,
        borderBottomWidth: 5,
        borderBottomColor: '#007FFF',
        borderRadius: 10
    }

})