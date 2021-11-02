import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native';
function InfinityItem() {
    return (
        <View style={styles.container}>
          <Image  style={styles.img}  source = {require('../assets/610.png')}/>
          <Text style={styles.txt}>Josh's Sister</Text>
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
   img: {
       width: 128,
       height: 128,
       borderRadius: 64
   },
   txt:{
     position:'absolute',
     marginLeft: 150,
     marginTop: 35,
     fontSize: 30,
     color: 'white'

   }
});

export default InfinityItem
