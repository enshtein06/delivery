import {
	LOAD_POINTS_START, 
	LOAD_POINTS_SUCCESS, 
	LOAD_POINTS_FAIL, 
	LOAD_CITIES_SUCCESS,
	POINTS_SORTING,
	BY_NAME_INCREASING,
	SORTING_CRITERIALS_CHANGED
} from '../actions/types';

const initialState = {
	points: [],
	selectedPoint: {},
	cities: [],
	sortedPoints: [],
	sortingCritirias: [BY_NAME_INCREASING, "Санкт-Петербург"],
	loading: false, 
	error: false
}

export default (state = initialState, action) => {
	switch (action.type) {
		case LOAD_POINTS_START:
			return {...state, loading: true}
		case LOAD_POINTS_SUCCESS: 
			return {
				...state,
				points: action.payload,
				loading: false,
				error: false
			}
		case LOAD_POINTS_FAIL:
			return {
				...state,
				error: true,
				loading: false
			}
		case LOAD_CITIES_SUCCESS:
			return {
				...state,
				cities: action.payload
			}
		case POINTS_SORTING:
			return {
				...state,
				sortedPoints: action.payload
			}
		case SORTING_CRITERIALS_CHANGED:
			return {
				...state,
				sortingCritirias: action.payload
			}
		default:
			return state;
	}
}