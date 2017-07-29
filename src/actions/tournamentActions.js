import axios from 'axios';

axios.defaults.headers[
  'Authorization'
] = localStorage.getItem('token');

const CREATE_TOURNAMENT = 'CREATE_TOURNAMENT';
const UPDATE_TOURNAMENT = 'UPDATE_TOURNAMENT';
const DELETE_TOURNAMENT = 'DELETE_TOURNAMENT';
const FETCH_TOURNAMENTS = 'FETCH_TOURNAMENTS';
const DELETE_ALL_TOURNAMENTS = 'DELETE_ALL_TOURNAMENTS';

const create = data => ({
  type: CREATE_TOURNAMENT,
  payload: data,
});

const update = data => ({
  type: UPDATE_TOURNAMENT,
  payload: data,
});

const get = data => ({
  type: FETCH_TOURNAMENTS,
  payload: data,
});

// const delete = id => ({
//   type: DELETE_TOURNAMENT,
//   id
// })

const deleteAll = () => ({
  type: DELETE_ALL_TOURNAMENTS,
});

export const createTournamentAction = args => async dispatch => {
  const res = await axios.post(
    '/api/v1/tournaments/createTournament',
    args,
  );
  return dispatch(create(res.data));
};

export const getTournamentsActions = () => async dispatch => {
  const res = await axios.get('/api/v1/tournaments/');
  return dispatch(get(res.data));
};
