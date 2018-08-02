import {AUTH_START, AUTH_SUCCESS, AUTH_FAIL, AUTH_LOGOUT} from '../actions/types';
import {Map} from 'immutable';

let initialState = Map({
	token: (localStorage.token ? localStorage.token : null),
	userId: (localStorage.userId ? localStorage.userId : null),
	error: null,
	loading: false
})

export default (state = initialState, action) => {
	switch (action.type) {
		case AUTH_START:
			//return {...state, error: null, loading: true};
			return state.merge({error: null, loading: true});
		case AUTH_SUCCESS:
			return state.merge({
				token: action.idToken, 
				userId: action.userId, 
				error: null, 
				loading: false
			});
		case AUTH_FAIL: 
			return state.set('error', action.error).set('loading', false);
		case AUTH_LOGOUT:
			return state.set('token', null).set('userId', null);
		default:
			return state;
	}
}