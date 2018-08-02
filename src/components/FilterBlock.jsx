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
		const {city, name} = this.state;
		//this.props.pointsSorting(points, [name, city]);
		this.props.pointsSortingChangeCriteria([name, city]);
	}
	render () {
		let renderModel = (<p>Loading...</p>)
		//console.log(this.props.cities)
		if(this.props.cities.size > 0) {
			renderModel = (
				<form onSubmit={this.handleSubmit}>
					<select value={this.state.city} onChange={this.handleCityChange} >
						{this.props.cities.toJS().map((city, index) => (
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
	cities: state.get("points").get("cities"),
	criteria: state.get("points").get("sortingCritirias")
})

export default connect(mapStateToProps, pointsActions)(FilterBlock);