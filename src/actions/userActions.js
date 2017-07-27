import axios from 'axios';

const authenticate = data => ({
  type: 'AUTHENTICATE_USER',
  payload: data,
});

const removeToken = () => ({
  type: 'LOGGING_OUT',
});

export function checkIfAuth() {
  return dispatch => {
    try {
      const token = localStorage.getItem('token');
      if (token) {
        return dispatch(authenticate({ token }));
      }
    } catch (e) {}
  };
}

export const loginAction = userInput => async dispatch => {
  const res = await axios.post(
    '/api/v1/users/login',
    userInput,
  );
  localStorage.setItem('token', res.data.token);
  return dispatch(authenticate(res.data));
};

export const signUp = userInput => async dispatch => {
  const res = await axios.post(
    '/api/v1/users/signup',
    userInput,
  );
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
  console.log('*******************');
  localStorage.removeItem('token');
  return dispatch(removeToken());
};
