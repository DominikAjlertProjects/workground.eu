import { combineReducers } from 'redux';
import AuthReducer from './authReducer';
import LoginReducer from './loginReducer';

const rootReducer = combineReducers({
  authenticated: AuthReducer,
  login: LoginReducer,
});

export default rootReducer;
