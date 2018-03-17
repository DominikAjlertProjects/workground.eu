import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import './assets/icon-font.css';
import App from './App';
import Loader from './components/Loader'
import LoginForm from './containers/LoginForm';
import MainPage from './containers/MainPage'
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxPromise from 'redux-promise';

let store = createStore(reducers);
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          {/* <Route path="/login" component={LoginForm} /> */}
          <Route path="/loader" component={Loader} />
          <Route path="/main" component={MainPage} />
          <Route path="/" component={App} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>, document.getElementById('root')
);

registerServiceWorker();
