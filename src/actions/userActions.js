import axios from 'axios';

const AUTHENTICATE_USER = 'AUTHENTICATE_USER';
const LOGGING_OUT = 'LOGGING_OUT';

const authenticate = data => ({
  type: AUTHENTICATE_USER,
  payload: data,
});

const removeToken = () => ({
  type: LOGGING_OUT,
});

export function checkIfAuth() {
  return  dispatch => {
    try {
      const token =  localStorage.getItem('token');
      const userName =  localStorage.getItem('userName')
      const firstName = localStorage.getItem('firstName')
      const lastName = localStorage.getItem('lastName')
      const email = localStorage.getItem('email')
      if (token && userName) {
        return dispatch(authenticate({ token, userName, firstName, lastName, email }));
      }
    } catch (e) {
      throw(e)
    }
  };
}

export const loginAction = userInput => async dispatch => {
  const res = await axios.post(
    '/api/v1/users/login',
    userInput,
  );
  localStorage.setItem('token', res.data.token);
  localStorage.setItem('userName', res.data.userName)
  localStorage.setItem('firstName', res.data.firstName)
  localStorage.setItem('lastName', res.data.lastName)
  localStorage.setItem('email', res.data.email)
  return dispatch(authenticate(res.data));
};

export const signUp = userInput => async dispatch => {
  const res = await axios.post(
    '/api/v1/users/signup',
    userInput,
  );
  localStorage.setItem('token', res.data.token);
  localStorage.setItem('userName', res.data.userName)
  localStorage.setItem('firstName', res.data.firstName)
  localStorage.setItem('lastName', res.data.lastName)
  localStorage.setItem('email', res.data.email)
  return dispatch(authenticate(res.data));
};

export const update = userInput => async dispatch => {
  const res = await axios.patch(
    '/api/v1/users/me/',
    userInput,
  );
  return dispatch(authenticate(res.data));
};

export const logout = () => async dispatch => {
  localStorage.removeItem('token');
  localStorage.removeItem('userName');
  localStorage.removeItem('firstName');
  localStorage.removeItem('lastName');
  localStorage.removeItem('email');
  return dispatch(removeToken());
};
