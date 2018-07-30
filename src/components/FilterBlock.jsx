import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as pointsActions from '../actions/points';
import {BY_NAME_INCREASING, BY_NAME_DECREASING} from '../actions/types';

class FilterBlock extends Component {
	state = {
		city: "Санкт-Петербург",
		name: BY_NAME_INCREASING
	}
	handleCityChange = (event) => {
		this.setState({city: event.target.value})
	}
	handleNameChange = (event) => {
		this.setState({name: event.target.value})
	}
	handleSubmit = (e) => {
		e.preventDefault();
		const {points} = this.props;
		const {city, name} = this.state;
		this.props.pointsSorting(points, [name, city]);
	}
	render () {
		let renderModel = (<p>Loading...</p>)
		if(this.props.cities.length > 0) {
			const sortedCities = this.props.cities.sort((a, b) => {
			const nameA = a.toUpperCase();
			const nameB = b.toUpperCase();
			return (nameA === nameB ? 0 : (nameA > nameB ? 1 : -1));
		});
			renderModel = (
				<form onSubmit={this.handleSubmit}>
					<select value={this.state.city} onChange={this.handleCityChange} >
						{sortedCities.map((city, index) => (
							<option value={city} key={index}>{city}</option>
						))}
					</select>
					<select value={this.state.name} onChange={this.handleNameChange} >
						<option value={BY_NAME_INCREASING}>В порядке возрастания</option>
						<option value={BY_NAME_DECREASING}>В порядке убывания</option>
					</select>
					<button type="submit">Применить</button>
				</form>
			);
		}
		return (
			<div className="filterBlock">
				<h2>Примените фильтр к поиску</h2>
				{renderModel}
			</div>
		)
	}
}

const mapStateToProps = state => ({
	cities: state.points.cities,
	points: state.points.points,
	criteria: state.points.sortingCritirias
})

export default connect(mapStateToProps, pointsActions)(FilterBlock);