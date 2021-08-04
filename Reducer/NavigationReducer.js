
import * as t from '../Actions/NavigationAction'

export const initialState = {
data:''
  };

  export const setNavigationStatus = (state = initialState, action) => {
    switch (action.type) {
    
      case t.SET_NAVIGATION_STATUS:
        return {
            ...state,
            data: action.payload,
            };
      default:
        return state;
    }
  };