import thunkMiddleware from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { setNavigationStatus } from './Reducer/NavigationReducer';


const rootReducer = combineReducers({
  user: setNavigationStatus,
});
export const Store = createStore(
  rootReducer,
 (applyMiddleware(thunkMiddleware))
);


