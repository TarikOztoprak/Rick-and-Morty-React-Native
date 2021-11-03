import React from 'react'
import { View,Text, Image, StyleSheet } from 'react-native';
function InfinityItem({name, id}) {
    return (
      <View style={[id % 2 == 1 ?  styles.container: styles.container2]}>
          <Image style={styles.img} source = {{uri:`https://rickandmortyapi.com/api/character/avatar/${id}.jpeg`}}/>
          <Text style={styles.txt}>{name}</Text>
      </View>
    )
}

const styles = StyleSheet.create({
   container: {
       width: '100%',
       height: 130,
       backgroundColor: '#00AFC7',
       color: '#ffffff',
       borderWidth: 1,
       borderColor: '#D6E053'
   },
    container2: {
      width: '100%',
      height: 130,
      backgroundColor: '#85C543',
      color: '#ffffff',
      borderWidth: 1,
      borderColor: '#D6E053'
    },
   img: {
       width: 100,
       height: 100,
       borderRadius: 50,
       marginTop: 14,
       marginLeft: 14
   },
   txt:{
     position:'absolute',
     marginLeft: 150,
     marginTop: 45,
     fontSize: 30,
     color: '#D6E053'
   }
});

export default InfinityItem
