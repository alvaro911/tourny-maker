import axios from 'axios';

axios.defaults.headers[
  'Authorization'
] = localStorage.getItem('token');

const createTeam = data => ({
  type: 'CREATE_TEAM',
  payload: data,
});

export const createTeamAction = userInput => async dispatch => {
  const res = await axios.post('/createTeam', userInput);
  return dispatch(createTeam(res.data));
};
