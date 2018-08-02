import React, {Component} from 'react';
import {connect} from 'react-redux';
import Authentication from './Signup';

export default (ChildComponent) => {
	class composedComponent extends Component {
		render () {
			console.log(this.props)
			return (!this.props.isAuth ? <Authentication /> : <ChildComponent {...this.props} />)
		}
	}

	const mapStateToProps = state => ({
		isAuth: state.get('auth').get('token') !== null
	})

	return connect(mapStateToProps)(composedComponent);
}