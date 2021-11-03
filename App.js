// In App.js in a new project

import * as React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet,ScrollView ,FlatList, TouchableHighlight} from 'react-native';
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
    fetch('https://rickandmortyapi.com/api/character')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  
  return (
    <View>
      <Logo/>
      <ScrollView>
          <FlatList
            data={data.results}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <TouchableHighlight onPress={() => navigation.navigate('Details', {id: item.id})}>
               <InfinityItem name={item.name} id={item.id}/>
              </TouchableHighlight>
            )}
          />
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
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;