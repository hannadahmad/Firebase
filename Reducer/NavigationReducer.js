
import * as t from '../Actions/NavigationAction'

export const initialState = {
isLoggedIn:false
  };

  export const fetchLoginState = (state = initialState, action) => {
    switch (action.type) {
    
      case t.SET_LOGIN_STATE:
        return {
            ...state,
            isLoggedIn: action.payload,
            };
      default:
        return state;
    }
  };