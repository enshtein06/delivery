import {
	LOAD_POINTS_START, 
	LOAD_POINTS_SUCCESS, 
	LOAD_POINTS_FAIL, 
	LOAD_CITIES_SUCCESS,
	POINTS_SORTING,
	BY_NAME_INCREASING,
	SORTING_CRITERIALS_CHANGED
} from '../actions/types';
import {fromJS, List, Map} from 'immutable';

const initialState = fromJS({
	points: List ([]),
	selectedPoint: Map({}),
	cities: List ([]),
	sortedPoints: List ([]),
	sortingCritirias: List([BY_NAME_INCREASING, "Санкт-Петербург"]),
	loading: false, 
	error: false
});

export default (state = initialState, action) => {
	switch (action.type) {
		case LOAD_POINTS_START:
			return state.set('loading', true);
		case LOAD_POINTS_SUCCESS: 
			return state.merge({
				points: fromJS(action.payload),
				loading: false,
				error: false
			});
		case LOAD_POINTS_FAIL:
			return state.set('error', true).set('loading', false);
		case LOAD_CITIES_SUCCESS:
			const sortedCities = action.payload.sort((a, b) => {
				const nameA = a.toUpperCase();
				const nameB = b.toUpperCase();
				return (nameA === nameB ? 0 : (nameA > nameB ? 1 : -1));
			});
			return state.set('cities', fromJS(sortedCities));
		case POINTS_SORTING:
			return state.set('sortedPoints', fromJS(action.payload));
		case SORTING_CRITERIALS_CHANGED:
			console.log(action.payload)
			return state.set("sortingCritirias", List(action.payload))
		default:
			return state;
	}
}