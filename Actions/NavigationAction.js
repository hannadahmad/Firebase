import { Alert } from 'react-native'; // to show alerts in app
import {useDispatch} from 'react-redux';
import auth from '@react-native-firebase/auth'

export const SET_LOGIN_STATE = "SET_LOGIN_STATE"

// this is what our action should look like which dispatches the "payload" to reducer
const setStatus = (val) => {
  return {
    type: SET_LOGIN_STATE,
    payload: val,
  };
};

export const setLoginState = () => {
  console.log('dashboard screen set')
  return (dispatch) => {  // don't forget to use dispatch here!
    dispatch(setStatus(auth().currentUser));
  }  
};
