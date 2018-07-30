import {combineReducers} from 'redux';

import authReducer from './authReducer';
import pointReducer from './pointsReducer';

export default combineReducers({
	auth: authReducer,
	points: pointReducer
});