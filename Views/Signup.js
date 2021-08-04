import React, { useState } from 'react';
import {Text, TextInput, View, StyleSheet, Button, Alert} from 'react-native';  
import loginDesign from '../Stylesheet/loginDesign';
import auth from '@react-native-firebase/auth';
import {useDispatch} from 'react-redux';
import {Login} from './Login'
import {SetScreenToLogin} from '../Actions/NavigationAction'


//main funtion
const Signup = () => {
//set useState
const [identifier, setIdentifier] = useState("");
const [password, setPassword] = useState("");


const userPass = () => {

  const dispatch = useDispatch();
 if (identifier == '' || password == '') {
    Alert.alert('Login Status','Username/Password missing'); 
 }
 else
 {
auth().createUserWithEmailAndPassword(identifier, password).then((response) => {
Alert.alert('Signup Status','Account Created')
dispatch(SetScreenToLogin());
})
.catch((error) => {
    Alert.alert('Signup Status', 'Cannot create account, please try again');
});
 }
}

return (

      <View style={loginDesign.mainView}>

    <Text style={loginDesign.textView}>Sign up here</Text>

    <TextInput placeholder='Enter Email'  placeholderTextColor='teal'  style={loginDesign.txtInputView} onChangeText = {change = (identifier) => setIdentifier(identifier) } />
    <TextInput placeholder='Enter Password' secureTextEntry={true} placeholderTextColor='teal'  style={loginDesign.txtInputView} onChangeText = {change = (password) => setPassword(password) } />

    <View style={loginDesign.buttonView}>
      <Button color='teal' title="Submit" onPress={userPass} />
    </View>

    </View>
    
)};
 
export default Signup;