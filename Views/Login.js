import React, { useState } from 'react';
import {Text, TextInput, View, StyleSheet, Button, Alert} from 'react-native';  
import loginDesign from '../Stylesheet/loginDesign';
import { useDispatch, useSelector } from 'react-redux';
import { setLoginState } from '../Actions/NavigationAction';
import auth from '@react-native-firebase/auth'



//main funtion
const Login = () => {

//set useState
const [identifier, setIdentifier] = useState("");
const [password, setPassword] = useState("");
const dispatch = useDispatch()

const userPass = () => {
 if (identifier == '' || password == '') {
    Alert.alert('Login Status','Username/Password missing'); 
 }
 else
 {
auth().signInWithEmailAndPassword(identifier,password).then((response)=> {
if (response.user.uid != null)
{
  Alert.alert('Login status', "Successfull");
  dispatch(setLoginState());
}
}).catch((error) => { Alert.alert('Login status', "Username/password is wrong, please try again");
dispatch(setLoginState());

})}}
 




return (

      <View style={loginDesign.mainView}>

    <Text style={loginDesign.textView}>Login here</Text>

    <TextInput placeholder='Enter Email'  placeholderTextColor='teal'  style={loginDesign.txtInputView} onChangeText = {change = (identifier) => setIdentifier(identifier) } />
    <TextInput placeholder='Enter Password' secureTextEntry={true} placeholderTextColor='teal'  style={loginDesign.txtInputView} onChangeText = {change = (password) => setPassword(password) } />

    <View style={loginDesign.buttonView}>
      <Button color='teal' title="Submit" />
    </View>
    <View style={loginDesign.buttonView}>
      <Button color='teal' title="Sign Up"  />
    </View>
    </View>
    
)};
 
export default Login;