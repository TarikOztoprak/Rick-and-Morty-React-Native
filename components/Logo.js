import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native';
function Logo() {
    return (
        <View>
            <Image  style={styles.logo}  source = {require('../assets/logo.png')}/>
        </View>
    
    )
}

const styles = StyleSheet.create({
    logo: {
      width: '100%',
      height: 120,
      marginTop: 20
    }
  });

export default Logo
