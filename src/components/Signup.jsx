import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as authActions from '../actions/auth';

import './Auth.css';

class Signup extends Component {
	state = {
		email: "",
		password: "",
		isSignup: false
	}
	emailChange = e => {
		this.setState({email: e.target.value})
	}
	passwordChange = e => {
		this.setState({password: e.target.value})
	}
	handleSubmit = e => {
		e.preventDefault();
		const {email, password, isSignup} = this.state;
		this.props.authStart(email, password, isSignup);
	}
	changeAuth(arg) {
		this.setState({isSignup: arg});
	}
	render () {
		return (
			<div className="authForm">
				<ul>
					<li className={"registration " + (this.state.isSignup ? "active" : "")} onClick={() => this.changeAuth(true)}>Регистрация</li>
					<li className={!this.state.isSignup ? "active" : ""} onClick={() => this.changeAuth(false)}>Уже есть аккаунт</li>
				</ul>
				<div>
					<form onSubmit={this.handleSubmit}>
						<div>
							<label>
								Email Address<span>*</span>
							</label>
							<input onChange={this.emailChange} value={this.state.email} type="email" required autocompleted="off" />
						</div>
						<div>
							<label>
								Password<span>*</span>
							</label>
							<input onChange={this.passwordChange} value={this.state.password} type="password" required autocompleted="off" />
						</div>
						<button type="submit">{this.state.isSignup ? "Зарегистрироваться" : "Войти"}</button>
					</form>
				</div>
			</div>
		)
	}
};

export default connect(null, authActions)(Signup);