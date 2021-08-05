import React, { useState } from 'react';
import {Text, View, Button} from 'react-native';  
import loginDesign from '../Stylesheet/loginDesign'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {setLoginState} from '../Actions/NavigationAction'
import auth from '@react-native-firebase/auth'



//main funtion
const Dashboard = () => {

const dispatch = useDispatch();

const uid = auth().currentUser.uid; 
    const logOut = () => {
      console.log("logout pressed")
       auth().signOut().then(() => dispatch(setLoginState()));
    }

return (

      <View style={loginDesign.mainView}>

    <Text style={loginDesign.textView}>User Dashboard</Text>
    <Text style={loginDesign.textView}>Welcome {uid}</Text>
      <Button color='teal' title="Log Out" onPress={logOut} />
    

    </View>
    
)};
 
export default Dashboard;