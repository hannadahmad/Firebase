/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {useEffect} from 'react';
 import { useSelector, useDispatch } from 'react-redux';
 import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import auth from '@react-native-firebase/auth';
 import {setLoginState} from '../Actions/NavigationAction'

 //importing Views
 import Login from '../Views/Login'
 import Dashboard from '../Views/Dashboard';
 import Signup from '../Views/Signup'
 
 const Stack = createNativeStackNavigator();

 const Navigation = () => {

  const dispatch = useDispatch();

//dispatching to update state
dispatch(setLoginState());

 //fetching state from Store
 const IsLoggedIn = useSelector(state => 
  state.user.isLoggedIn);

 return (
 <NavigationContainer>
 
 <Stack.Navigator>
 
   { (IsLoggedIn) ? (
     <Stack.Screen name="Dashboard" component={Dashboard} /> ):

    ( <Stack.Screen name="Login" component={Login} />,
      <Stack.Screen name="Signup" component={Signup} />
    )}
 
 </Stack.Navigator>
 
 </NavigationContainer>
 )
 }
 
 export default Navigation;
 