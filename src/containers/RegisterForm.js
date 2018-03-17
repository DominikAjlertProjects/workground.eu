import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

export default class RegisterForm extends Component {
    static contextTypes = {
        router: PropTypes.object
    }

    constructor(props, context) {
        super(props, context);

        this.state = {
            login: '',
            password: '',
            email: '',
            companyName: '',
            errorFields: {
                login: '',
                password: ''
            }
        }

        this.handleSignInClick = this.handleSignInClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSignInClick(event) {
      console.log("Registering user!");
    }

    handleChange(event) {
      this.setState({
        [event.target.name]: event.target.value,
      });
    }

    render() {
      const { login, password, email, companyName } = this.state;
        return(
          <div className="login__form">
            <form className="form">
              <div className="form__group animate-none">
                <input name="login" placeholder="Login" className="form__input" value={login} onChange={this.handleChange} type="text" />
                <label className="form__label">Login</label>
              </div>

              <div className="form__group animate-none">
                <input name="password" placeholder="Password" className="form__input" value={password} onChange={this.handleChange} type="password" />
                <label className="form__label">Password</label>
              </div>

              <div className="form__group animate-none">
                <input name="email" placeholder="Email" className="form__input" value={email} onChange={this.handleChange} type="email" />
                <label className="form__label">Email</label>
              </div>
{/*
              <div className="form__group">
                <input name="companyName" placeholder="Company name" className="form__input" value={companyName} onChange={this.handleChange} type="text" />
                <label className="form__label">Company name</label>
              </div> */}

              <div className="form__group">
                <a href="" className="btn btn-white btn-white-outline btn-signUp" onClick={this.handleSignInClick}>Sign In</a>
              </div>
            </form>
          </div>
        );
    }
}
