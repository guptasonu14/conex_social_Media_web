import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE } from './userSlice';
import axios from 'axios';

export const loginUser = (credentials) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_START });

    // Assuming you have an API endpoint for user login
    const response = await axios.post("https://conex-clone.onrender.com/auth/login", credentials);

    // Assuming the response.data includes user information with userId
    const userData = response.data;

    dispatch({ type: LOGIN_SUCCESS, payload: userData });
  } catch (error) {
    console.error('Login failed:', error);
    dispatch({ type: LOGIN_FAILURE });
  }
};
