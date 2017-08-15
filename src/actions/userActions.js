import axios from 'axios';

const AUTHENTICATE_USER = 'AUTHENTICATE_USER';
const LOGGING_OUT = 'LOGGING_OUT';
const BASE_URL = 'https://tourny-maker-server.herokuapp.com'

const authenticate = data => ({
  type: AUTHENTICATE_USER,
  payload: data,
});

const removeToken = () => ({
  type: LOGGING_OUT,
});

const deleteUser = () => ({
  type: 'DELETE_USER',
});

export function checkIfAuth() {
  return dispatch => {
    try {
      const token = localStorage.getItem('token');
      const userName = localStorage.getItem('userName');
      const firstName = localStorage.getItem('firstName');
      const lastName = localStorage.getItem('lastName');
      const email = localStorage.getItem('email');
      const _id = localStorage.getItem('_id');
      const role = localStorage.getItem('role');
      if (token && userName) {
        return dispatch(
          authenticate({
            token,
            userName,
            firstName,
            lastName,
            email,
            _id,
            role,
          }),
        );
      }
    } catch (e) {
      throw e;
    }
  };
}

export const loginAction = userInput => async dispatch => {
  const res = await axios.post(
    `${BASE_URL}/api/v1/users/login`,
    userInput,
  );
  localStorage.setItem('token', res.data.token);
  localStorage.setItem('userName', res.data.userName);
  localStorage.setItem('firstName', res.data.firstName);
  localStorage.setItem('lastName', res.data.lastName);
  localStorage.setItem('email', res.data.email);
  localStorage.setItem('_id', res.data._id);
  localStorage.setItem('role', res.data.role);
  return dispatch(authenticate(res.data));
};

export const signUp = userInput => async dispatch => {
  const res = await axios.post(
    `${BASE_URL}/api/v1/users/signup`,
    userInput,
  );
  localStorage.setItem('token', res.data.token);
  localStorage.setItem('userName', res.data.userName);
  localStorage.setItem('firstName', res.data.firstName);
  localStorage.setItem('lastName', res.data.lastName);
  localStorage.setItem('email', res.data.email);
  localStorage.setItem('_id', res.data._id);
  localStorage.setItem('role', res.data.role);
  return dispatch(authenticate(res.data));
};

export const updateAction = (
  id,
  userInput,
) => async dispatch => {
  const res = await axios.patch(
    `/api/v1/users/me/${id}`,
    userInput,
  );
  localStorage.setItem('userName', res.data.userName);
  localStorage.setItem('firstName', res.data.firstName);
  localStorage.setItem('lastName', res.data.lastName);
  return dispatch(authenticate(res.data));
};

export const logout = () => async dispatch => {
  localStorage.removeItem('token');
  localStorage.removeItem('userName');
  localStorage.removeItem('firstName');
  localStorage.removeItem('lastName');
  localStorage.removeItem('email');
  localStorage.removeItem('_id');
  localStorage.removeItem('role');
  return dispatch(removeToken());
};

export const deleteAction = id => async dispatch => {
  await axios.delete(`/api/v1/users/me/${id}`);
  localStorage.removeItem('token');
  localStorage.removeItem('userName');
  localStorage.removeItem('firstName');
  localStorage.removeItem('lastName');
  localStorage.removeItem('email');
  localStorage.removeItem('_id');
  localStorage.removeItem('role');
  return dispatch(deleteUser());
};
