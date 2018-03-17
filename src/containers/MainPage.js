import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

export default class MainPage extends Component {
  static contextTypes = {
      router: PropTypes.object
  }

  constructor(props, context) {
    super(props, context);

    this.state = {
      loginColumnClass: 'col-1-of-2',
      loginClass: 'card__side card__side__front',
      signInColumnClass: 'col-1-of-2',
      signInClass: 'card__side card__side__front',
      cardSideBack1: 'card__side card__side__back',
      cardSideBack2: 'card__side card__side__back',
    };

    this.handleCardClick = this.handleCardClick.bind(this);
  }

  handleCardClick(event) {
    console.log("Event from handleblabla", event.target.name);
    event.preventDefault();
    switch (event.target.name) {
      case 'activeLogin':
        this.setState({
          loginColumnClass: 'col-1-of-2 col-1-of-2__fitAll',
          loginClass: 'card__side card__side__front card__side__front__rotated',
          signInClass: 'card card__zeroWidth',
          signInColumnClass: 'card',
          cardSideBack1: 'card__side card__side__back card__side__back__rotated',
          cardSideBack2: 'display-none',
        });
        break;

      case 'activeSignIn':
      this.setState({
        signInColumnClass: 'col-1-of-2 col-1-of-2__fitAll',
        signInClass: 'card__side card__side__front card__side__front__rotated',
        loginClass: 'card card__zeroWidth',
        loginColumnClass: 'card',
        cardSideBack2: 'card__side card__side__back card__side__back__rotated',
        cardSideBack1: 'display-none',
      });
        break;
    }
  }

  render() {
    const { loginClass, loginColumnClass, signInClass, signInColumnClass, cardSideBack1, cardSideBack2 } = this.state;
    return(
      <div className="main-header">
        <div className="text-box-main">
          <h1 className="heading">
            <span className="heading-main">Please log in or <br />create an account to begin</span>
          </h1>

          <div className="row-main">
            <div className={loginColumnClass}>
              <div className="card">
                <div className={loginClass}>
                  <i className="icon-basic-compass card__side__icon" />
                    <a id="goLogin" name="activeLogin" className="btn btn-white btn__card" onClick={this.handleCardClick} href="">Log in</a>
                </div>
                <div className={cardSideBack1}>
                  <LoginForm />
                </div>
              </div>
            </div>
            <div className={signInColumnClass}>
              <div className="card">
                <div className={signInClass}>
                  <i className="icon-basic-todo-pencil card__side__icon" />
                    <a id="goSignIn" name="activeSignIn" className="btn btn-white btn__card" onClick={this.handleCardClick} href="">Sign up</a>
                </div>
                <div className={cardSideBack2}>
                  <RegisterForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
