import perfumesReducer from './perfumesReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  perfumes: perfumesReducer
});

export default rootReducer;