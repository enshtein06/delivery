import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import * as authActions from '../actions/auth';

class Header extends Component {
	render () {
		return (
			<div className="header">
				<Link to="/" >Home</Link>
				{this.props.token ? <button onClick={this.props.logout}>Logout</button> : null}
			</div>
		)
	}
};

const mapStateToProps = state => ({
	token: state.auth.token
})

export default connect(mapStateToProps, authActions)(Header);