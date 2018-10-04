import { combineReducers } from 'redux';
import mobiles from './reducers/mobiles';
import { routerReducer } from 'react-router-redux';
export default combineReducers({
  mobiles,
  router: routerReducer
});
