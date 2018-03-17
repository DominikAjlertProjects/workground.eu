import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Loader extends Component {

  static contextTypes = {
    router: PropTypes.object
  }

  constructor(props, context) {
    super(props, context);

    this.forwardMain = this.forwardMain.bind(this);
  }

  componentDidMount() {
    this.forwardMain();
  }

  forwardMain() {
    setTimeout(() => {
      this.context.router.history.push('/main');
    }, 4250);
  }

  render() {
    return (
      <div className="center-content animate-fade-in">
        <div class="cssload-preloader cssload-loading mt-24pc mb-medium">
           <span class="cssload-slice"></span>
           <span class="cssload-slice"></span>
           <span class="cssload-slice"></span>
           <span class="cssload-slice"></span>
           <span class="cssload-slice"></span>
           <span class="cssload-slice"></span>
        </div>
        <div className="cssload-container">
          <span className="cssload-primary">Moving on...</span>
      </div>
    </div>
    );
  }
}
