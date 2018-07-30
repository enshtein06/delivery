import {AUTH_START, AUTH_SUCCESS, AUTH_FAIL, AUTH_LOGOUT} from './types';

export const authStart = (email, password, isSignup) => {
	const authData = {
		email,
		password,
		returnSecureToken: true,
		isSignup
	}
	return {
		type: AUTH_START,
		payload: authData
	}
};

export const authSuccess = (token, userId) => ({
	type: AUTH_SUCCESS,
	idToken: token,
	userId
});

export const authFail = error => ({
	type: AUTH_FAIL,
	error
});

export const logout = () => {
	localStorage.removeItem('token');
	localStorage.removeItem('expirationDate');
	localStorage.removeItem('userId');
	return {
		type: AUTH_LOGOUT
	}
};