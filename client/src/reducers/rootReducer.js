import perfumesReducer from './perfumesReducer';
import userReducer from './userReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  perfumes: perfumesReducer,
  user: userReducer
});

export default rootReducer;