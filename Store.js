import thunkMiddleware from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { fetchLoginState } from './Reducer/NavigationReducer';


const rootReducer = combineReducers({
  user: fetchLoginState,
});
export const Store = createStore(
  rootReducer,
 (applyMiddleware(thunkMiddleware))
);


