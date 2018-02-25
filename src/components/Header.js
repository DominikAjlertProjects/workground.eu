import React, { Component } from 'react';
import logo from '../assets/img/logo.png';
import PropTypes from 'prop-types';

export default class Header extends Component {

  static contextTypes = {
    router: PropTypes.object
  }

  constructor(props, context) {
    super(props, context);

    this.proceedToLogin = this.proceedToLogin.bind(this);
  }

  proceedToLogin(event) {
    console.log("Event", event);
      this.context.router.history.push('/login');
  }

  render() {
    return (
      <header className="header">
        <div className="logo-box">
          <img src={logo} alt="Logo" className="logo" />
        </div>

        <div className="text-box">
          <h1 className="heading-primary">
            <span className="heading-main">Workground</span>
            <span className="heading-sub">playgroud of ideas</span>
          </h1>

          <a className="btn btn-white" onClick={this.proceedToLogin}>Begin the journey</a>
        </div>
      </header>
    );
  }
}
