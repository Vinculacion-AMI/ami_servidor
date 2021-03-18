import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './pantallas/login';
import Inicio from './pantallas/inicio';
import Registro from './pantallas/registro';
import Draw from './pantallas/draw';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
const Stack = createStackNavigator();

export default function App() {
  return (
 <NavigationContainer>
    <Stack.Navigator initialRouteName="login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Inicio" component={Inicio} />
      <Stack.Screen name="Registro" component={Registro} />
      <Stack.Screen name="Draw" component={Draw} />
    </Stack.Navigator>
  </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
