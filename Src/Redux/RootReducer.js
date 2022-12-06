import {combineReducers} from 'redux';
import HomeReducer from './Reducer/HomeReducer';
const Rootreducer = combineReducers({
  HomeData: HomeReducer,
});

export default Rootreducer;
