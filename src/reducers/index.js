//import {combineReducers} from 'redux';
import {combineReducers} from 'redux-immutable';

import authReducer from './authReducer';
import pointReducer from './pointsReducer';

export default combineReducers({
	auth: authReducer,
	points: pointReducer
});