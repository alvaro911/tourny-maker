import axios from 'axios';

const authenticate = (data) => ({
  type: 'AUTHENTICATE_USER',
  payload: data,
});

let res

export const login = (userInput) => async (dispatch) => {
  res = await axios.post('/api/v1/users/login', userInput);
  return dispatch(authenticate(res.data));
}

export const signUp = (userInput) => async (dispatch) => {
  res = await axios.post('/api/v1/users/signup', userInput);
  return dispatch(authenticate(res.data));
}
