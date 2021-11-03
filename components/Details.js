import * as React from 'react';
import { View, Text, Image, StyleSheet,ScrollView ,FlatList, TouchableHighlight,Dimensions } from 'react-native';


function Details({ route, navigation }) {
    const { id } = route.params;
    return (
        <View>
            <Image style={styles.img} source = {{uri:`https://rickandmortyapi.com/api/character/avatar/${id}.jpeg`}}/>
            <View style={styles.container}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    img: {
        width: '100%',
        height:  Dimensions.get('window').width,
        marginTop: 24
        },
    container: {
     
    },
    txt:{
      position:'absolute',
      marginLeft: 150,
      marginTop: 45,
      fontSize: 30,
      color: '#D6E053'
    }
 });

export default Details;