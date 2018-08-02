import {createSelector} from 'reselect';
import {BY_NAME_INCREASING} from './actions/types';

const getPoints = (state) => state.get('points').get('points').toJS();
const getSortingCriterials = (state) => state.get('points').get('sortingCritirias').toJS();

export const getSortedPoints = createSelector(
	[getSortingCriterials, getPoints],
	(criterials, points) => {
		const sortByTheCity = points.filter(point => criterials[1].toUpperCase() === point.City.toUpperCase());
		return sortByTheCity.sort((a, b) => {
			if(criterials[0] === BY_NAME_INCREASING) {
				return (
					a.Name.toUpperCase() === b.Name.toUpperCase() ? 0 : (a.Name.toUpperCase() > b.Name.toUpperCase() ? 1 : -1)
				);
			}
			return (
				a.Name.toUpperCase() === b.Name.toUpperCase() ? 0 : (a.Name.toUpperCase() > b.Name.toUpperCase() ? -1 : 1)
			);
		})
	}
);

const selectPoint = (state, props) => {return props.match.params.code.toUpperCase()};

export const getPoint = createSelector(
	[selectPoint, getPoints],
	(code, points) => {
		return points.find(point => code === point.Code.toUpperCase());
	}
)