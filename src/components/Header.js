import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loader from './Loader';

export default class Header extends Component {

  static contextTypes = {
    router: PropTypes.object
  }

  constructor(props, context) {
    super(props, context);
    this.state = {
      isLoading: false,
    }

    this.proceedToLogin = this.proceedToLogin.bind(this);
  }

  proceedToLogin(event) {
    event.preventDefault();
    this.setState({
      isLoading: true,
    })
  }

  render() {
    const { isLoading } = this.state;

  return isLoading ? (<Loader />) : (
      <header className="header">
        <div className="text-box">
          <h1 className="heading-primary">
            <span className="heading-primary-main">Workground</span>
            <span className="heading-primary-sub">playgroud of ideas</span>
          </h1>

          <a id="proceedLogin" href="" className="btn btn-white" onClick={this.proceedToLogin}>Begin the journey</a>
        </div>
      </header>
    );
  }
}
