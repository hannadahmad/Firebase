/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {useEffect} from 'react';
 import { useSelector } from 'react-redux';
 import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import auth from '@react-native-firebase/auth';
 

 //importing Views
 import Login from '../Views/Login'
 import Dashboard from '../Views/Dashboard';
 import Signup from '../Views/Signup'
 
const authenticationState = auth().currentUser



 const Stack = createNativeStackNavigator();

 const Navigation = () => {
 //fetching state from Store
 const screen = useSelector(state => 
  state.user.data);
 //fetching state from the store
console.log('This is ' + screen)
 return (
 <NavigationContainer>
 
 <Stack.Navigator>
 
   { (screen=='' || screen=='login') ? (
     <Stack.Screen name="Login" component={Login} />
  
    ) : (screen =='dashboard') ? (
      <Stack.Screen name="Dashboard" component={Dashboard} /> )
      : (
    <Stack.Screen name="Signup" component={Signup} />
    
   )}
 
 </Stack.Navigator>
 
 </NavigationContainer>
 )
 }
 
 export default Navigation;
 