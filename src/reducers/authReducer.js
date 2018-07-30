import {AUTH_START, AUTH_SUCCESS, AUTH_FAIL, AUTH_LOGOUT} from '../actions/types';

let initialState = {
	token: (localStorage.token ? localStorage.token : null),
	userId: (localStorage.userId ? localStorage.userId : null),
	error: null,
	loading: false
}

export default (state = initialState, action) => {
	switch (action.type) {
		case AUTH_START:
			return {...state, error: null, loading: true};
		case AUTH_SUCCESS:
			return {
				...state, 
				token: action.idToken, 
				userId: action.userId, 
				error: null, 
				loading: false
			};
		case AUTH_FAIL: 
			return {
				...state,
				error: action.error,
				loading: false
			};
		case AUTH_LOGOUT:
			return {
				...state,
				token: null,
				userId: null
			};
		default:
			return state;
	}
}