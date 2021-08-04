import React, { useState } from 'react';
import {Text, View, Button} from 'react-native';  
import loginDesign from '../Stylesheet/loginDesign'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {Login} from '../Actions/NavigationAction'

//main funtion
const Dashboard = () => {
  const screen = useSelector(state => 
    state.user.data);

const dispatch = useDispatch();
    const logOut = () => {
       
        dispatch(SetScreenToLogin())
        console.log('screen is now ' + screen)
    }

return (

      <View style={loginDesign.mainView}>

    <Text style={loginDesign.textView}>User Dashboard</Text>
    <Text style={loginDesign.textView}>Welcome Hannad</Text>
    <View style={loginDesign.buttonView}>
      <Button color='teal' title="Log Out" onPress={logOut} />
    </View>

    </View>
    
)};
 
export default Dashboard;