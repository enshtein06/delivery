import {
	LOAD_POINTS_START, 
	LOAD_POINTS_SUCCESS, 
	LOAD_POINTS_FAIL, 
	LOAD_CITIES_SUCCESS,
	LOAD_CITIES_START, 
	LOAD_CITIES_FAIL,
	SORTING_CRITERIALS_CHANGED
} from './types';

export const pointsLoadingStart = () => ({
	type: LOAD_POINTS_START
});

export const pointsLoadingSuccess = (points) => {
	return {
		type: LOAD_POINTS_SUCCESS,
		payload: points
	};
}

export const pointsLoadingFailed = ( ) => ({
	type: LOAD_POINTS_FAIL
});

export const citiesLoadingStart = () => ({
	type: LOAD_CITIES_START
});

export const citiesLoadingSuccess = (cities) => {
	const arrayOfKeys = Object.keys(cities);
	const citiesArray = [];
	arrayOfKeys.forEach(key => citiesArray.push(cities[key]));
	return {
		type: LOAD_CITIES_SUCCESS,
		payload: citiesArray
	}
}

export const citiesLoadingFailed = () => {
	return {
	type: LOAD_CITIES_FAIL
}};

export const pointsSortingChangeCriteria = (sortingCritirias) => ({
	type: SORTING_CRITERIALS_CHANGED,
	payload: sortingCritirias
})