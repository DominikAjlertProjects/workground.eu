import React, { Component } from 'react';
import Loader from './Loader';
export default class Test extends Component {
  state = {
    loading: true
  };

  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 1500); // simulates an async action, and hides the spinner
  }

  render() {
    const { loading } = this.state;

    return (<div>{loading ? <Loader /> : <div>I'm an app!</div>}</div>);
  }
}
