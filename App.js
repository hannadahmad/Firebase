/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import Navigation from './Navigation/Navigation'
 import { Provider, useSelector } from 'react-redux';
 import { Store, Persistor } from './Store';
 import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';

 const Stack = createNativeStackNavigator();

 const App = () => {
   return (
  <Provider store={Store}>
   <Navigation />
   </Provider>
   )
 }
 
 export default App;
 