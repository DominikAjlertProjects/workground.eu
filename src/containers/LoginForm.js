import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

export default class LoginForm extends Component {
    static contextTypes = {
        router: PropTypes.object
    }

    constructor(props, context) {
        super(props, context);

        this.state = {
            login: '',
            password: '',
            errorFields: {
                login: '',
                password: ''
            }
        }

        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleLoginClick(event) {
      event.preventDefault();
      console.log("Logging user!");
    }

    handleChange(event) {
      console.log("Event.target.name", event.target.name);
      console.log("Event. target.value", event.target.value);
      this.setState({
        [event.target.name]: event.target.value,
      });
    }

    render() {
      const { login, password } = this.state;
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

              <div className="form__group">
                <a href="" className="btn btn-white btn-white-outline btn-login" onClick={this.handleLoginClick}>Login</a>
              </div>
            </form>
          </div>
        );
    }
}
