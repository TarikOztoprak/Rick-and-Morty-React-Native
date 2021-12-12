import  React, {useState, useEffect} from 'react';
import { View, Text, Image, StyleSheet, ScrollView, FlatList, TouchableHighlight, Dimensions } from 'react-native';

function Details({ route, navigation }) {
    const { id, name, status, species, location, episode} = route.params;
    const[data, setData] = useState([]);
    useEffect(() => {
        fetch(episode[0])
          .then((response) => response.json())
          .then((json) => setData(json))
          .catch((error) => console.error(error))
      }, []);
    return (
        <View style={[id % 2 == 1 ?  styles.container: styles.container2]}>
            <Image style={styles.img} source = {{uri:`https://rickandmortyapi.com/api/character/avatar/${id}.jpeg`}}/>
            <View style={styles.content}>
                <View style={styles.center}>
                    <Text style={styles.nameTxt}>
                        {name}
                    </Text>
                </View>             
                <Text style={styles.contentTxt}>
                    <View style={[status == 'Alive' ? styles.alive : styles.dead]}/>
                     {status} - {species}
                </Text>
                <Text style={styles.contentTxt}>
                   Last known location: {location.name}
                </Text>
                <Text style={styles.contentTxt}>
                   First seen in: {data.name}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#00AFC7',
        flex: 1
    },
     container2: {
       backgroundColor: '#85C543',
       flex: 1
     },
    img: {
        flex:2
        },
    content: {
        flex:3,
        justifyContent: 'space-evenly',
        paddingLeft: 20
    },
    txt:{
      position:'absolute',
      marginLeft: 150,
      marginTop: 45,
      fontSize: 30,
      color: '#D6E053'
    },
    nameTxt:{ 
        fontSize: 40,
        color: 'white'       
    },
    contentTxt:{
        fontSize: 30,
        color: 'white'
    },
    center:{
        alignItems: 'center'
    },
    alive:{
        height: 20,
        width: 20,
        borderRadius: 20,
        backgroundColor: 'green'
    },
    dead:{
        height: 20,
        width: 20,
        borderRadius: 20,
        backgroundColor: 'red'
    }
 });

export default Details;