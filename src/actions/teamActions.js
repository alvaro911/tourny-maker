import axios from 'axios';

axios.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  config.headers.Authorization = token || null;
  return config;
});

const CREATE_TEAM = 'CREATE_TEAM';
const GET_TEAM = 'GET_TEAM';

const createTeam = (data, tournamentId) => ({
  type: CREATE_TEAM,
  payload: data,
  tournamentId,
});

const getTeam = data => ({
  type: GET_TEAM,
  payload: data,
});

export const createTeamAction = (
  userInput,
  tournamentId,
) => async dispatch => {
  const res = await axios.post('/api/v1/teams/createTeam', {
    ...userInput,
    tournament: tournamentId,
  });
  return dispatch(createTeam(res.data, tournamentId));
};

export const getTeamByUserId = id => async dispatch => {
  try {
    const res = await axios.get(`/api/v1/teams/user/${id}`);
    return dispatch(getTeam(res.data));
  } catch (e) {
    console.log({ e });
  }
};
