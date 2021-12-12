// In App.js in a new project

import * as React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet,ScrollView ,FlatList, TouchableHighlight, acti} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Logo from './components/Logo'
import InfinityItem from './components/infinityItem';
import Details from './components/Details';

function HomeScreen({ navigation}) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    let page = Math.random() * 42;
    fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  
  return (
    <View>
      <Logo/>
        <FlatList
          data={data.results}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <TouchableHighlight onPress={() => navigation.navigate('Details', {id: item.id, name: item.name, status: item.status, species: item.species, location: item.location, episode: item.episode})}>
              <InfinityItem name={item.name} id={item.id}/>
            </TouchableHighlight>
          )}
        />   
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
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;