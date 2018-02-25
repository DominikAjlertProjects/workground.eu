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
            email: '',
            companyName: '',
            errorFields: {
                login: '',
                password: ''
            }
        }
    }

    render() {
        return(
            <header className="login-header">
                <form className="login-form" onSubmit={this.onFormSubmit}>
                    <div className="login-input">
                        <label className="label-input">Login</label>
                        <input className="login-input" placeholder="Login" value={this.state.login} type="text" />
                        <div className="login-errors">{this.state.errorFields.login}</div>
                    </div>
                    <div className="login-input">
                        <label className="label-input">Password</label>
                        <input className="login-input" placeholder="Password" value={this.state.password} type="password" />
                        <div className="login-errors">{this.state.errorFields.password}</div>
                    </div> 
                    <div className="login-input">
                        <label className="label-input">Email</label>
                        <input className="login-input" placeholder="Email" value={this.state.email} type="text" />
                    </div>
                    <div className="login-input">
                        <label className="label-input">Your company name</label>
                        <input className="login-input" placeholder="Company name" value={this.state.companyName} type="text" />
                    </div>  
                </form>
            </header>
        );
    }
}