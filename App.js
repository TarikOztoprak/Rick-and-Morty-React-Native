// In App.js in a new project

import * as React from 'react';
import { View, Text, Image, StyleSheet,ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Logo from './components/Logo'
import InfinityItem from './components/infinityItem';

function HomeScreen() {
  return (
    <View>
      <Logo/>
      <ScrollView>
        <InfinityItem/>
        <InfinityItem/>
        <InfinityItem/>
        <InfinityItem/>
        <InfinityItem/>
        <InfinityItem/>
        <InfinityItem/>
        <InfinityItem/> 
        <InfinityItem/>
        <InfinityItem/>
        <InfinityItem/>
        <InfinityItem/>

      </ScrollView>
     
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{
    headerShown: false
  }}>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;