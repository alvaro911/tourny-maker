import axios from 'axios';

axios.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  config.headers.Authorization = token || null;
  return config;
});

const createTeam = (data, tournamentId) => ({
  type: 'CREATE_TEAM',
  payload: data,
  tournamentId,
});

export const createTeamAction = (
  userInput,
  tournamentId,
) => async dispatch => {
  console.log(userInput);
  const res = await axios.post('/api/v1/teams/createTeam', {
    ...userInput,
    tournament: tournamentId,
  });
  return dispatch(createTeam(res.data, tournamentId));
};
