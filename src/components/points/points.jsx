import React, {Component} from 'react';
import {connect}from 'react-redux';
import {Link} from 'react-router-dom';
import * as pointsActions from '../../actions/points';
import requireAuth from '../requireAuth';

class Points extends Component {
	constructor(props) {
		super(props);
		this.props.citiesLoadingStart();
	}

	render () {
		const {points, sortedPoints, criteria} = this.props;
		let renderModel = (<p>Loading...</p>);
		if(this.props.points.length > 0) {
			if(this.props.sortedPoints.length > 0) {
				renderModel = sortedPoints.map(point => (
					<Link key={point.Code} to={`/points/${point.Code}`}>
						<h3>{point.Name}</h3>
						<p>{point.FullAddress}</p>
					</Link>
				))
			} else {
				this.props.pointsSorting(points, criteria);
			}
			
		}
		return (
			<div className="pointsList">
				{renderModel}
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		points: state.points.points,
		cities: state.points.cities,
		sortedPoints: state.points.sortedPoints,
		criteria: state.points.sortingCritirias
	}
}

export default requireAuth(connect(mapStateToProps, pointsActions)(Points));