import React, {Component} from 'react';
import requireAuth from './requireAuth';
import Points from './points/points';
import FilterBlock from './FilterBlock';

class HomePage extends Component {
	render () {
		return (
			<div className="homepage">
				<Points />
				<FilterBlock />
			</div>
		);
	}
};

export default requireAuth(HomePage);