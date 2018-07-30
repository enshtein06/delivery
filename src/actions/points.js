import {
	LOAD_POINTS_START, 
	LOAD_POINTS_SUCCESS, 
	LOAD_POINTS_FAIL, 
	LOAD_CITIES_SUCCESS,
	LOAD_CITIES_START, 
	LOAD_CITIES_FAIL,
	POINTS_SORTING,
	BY_NAME_INCREASING,
	SORTING_CRITERIALS_CHANGED
} from './types';

export const pointsLoadingStart = () => ({
	type: LOAD_POINTS_START
});

export const pointsLoadingSuccess = (points) => {
	const sortedPoints = points.sort((a, b) => {
		const nameA = a.Address.toUpperCase();
		const nameB = b.Address.toUpperCase();
		return (nameA === nameB ? 0 : (nameA > nameB ? 1 : -1));
	})
	return {
		type: LOAD_POINTS_SUCCESS,
		payload: sortedPoints
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

export const pointsSorting = (points, sortingCritirias) => {
	const sortedByTheCity = points.filter(point => sortingCritirias[1].toUpperCase() === point.City.toUpperCase());
	const sortedByTheName = sortedByTheCity.sort((a,b) => {
		const nameA = a.Name.toUpperCase();
		const nameB = b.Name.toUpperCase();
		if(sortingCritirias[0] === BY_NAME_INCREASING) {
			return (nameA === nameB ? 0 : (nameA > nameB ? 1 : -1));
		} 
		return (nameA === nameB ? 0 : (nameA > nameB ? -1 : 1));
	});
	return {
		type: POINTS_SORTING,
		payload: sortedByTheName
	}
}

export const pointsSortingChangeCriteria = (sortingCritirias) => ({
	type: SORTING_CRITERIALS_CHANGED,
	payload: sortingCritirias
})