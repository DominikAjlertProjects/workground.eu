import config from '../config';
import routes from '../backend-routes';
import axios from 'axios';

export const login = async (user) => {
    const response = await axios.post(`${config.nodeUrl}${routes.login}`, user).catch((err) => console.log("Err occurred", err));
    
    return {
      type: 'LOGIN',
      payload: response,
    };
}