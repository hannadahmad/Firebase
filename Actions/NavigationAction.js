import { Alert } from 'react-native'; // to show alerts in app
import {useDispatch} from 'react-redux';
export const SET_NAVIGATION_STATUS = "SET_NAVIGATION_STATUS"

// this is what our action should look like which dispatches the "payload" to reducer
const setStatus = (val) => {
  console.log("test here",val)
  return {
    type: SET_NAVIGATION_STATUS,
    payload: val,
  };
};

export const SetScreenToDashboard = () => {
  console.log('dashboard screen set')
  return (dispatch) => {  // don't forget to use dispatch here!
    dispatch(setStatus('dashboard'));
  }  
};

export const SetScreenToLogin = () => {
  console.log('login screen set')
  return (dispatch) => {  // don't forget to use dispatch here!
    dispatch(setStatus('login'));
  }}

  
  export const SetScreenToSignup = () => {
    console.log('sign up screen set')
    return (dispatch) => {  // don't forget to use dispatch here!
      dispatch(setStatus('signup'));
    
    }
    }  
  
