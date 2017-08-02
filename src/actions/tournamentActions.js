import axios from 'axios';

axios.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  config.headers.Authorization = token || null;
  return config;
});

const CREATE_TOURNAMENT = 'CREATE_TOURNAMENT';
const UPDATE_TOURNAMENT = 'UPDATE_TOURNAMENT';
const DELETE_TOURNAMENT = 'DELETE_TOURNAMENT';
const FETCH_TOURNAMENTS = 'FETCH_TOURNAMENTS';
const FETCH_TOURNAMENT = 'FETCH_TOURNAMENT';
const FETCH_TOURNAMENTS_BY_USER_ID = 'FETCH_TOURNAMENTS_BY_USER_ID'

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

const getTournyById = data => ({
  type: FETCH_TOURNAMENTS_BY_USER_ID,
  payload: data,
})

const getById = data => ({
  type: FETCH_TOURNAMENT,
  payload: data,
})

const delete = () => ({
  type: DELETE_TOURNAMENT,
})

export const createTournamentAction = args => async dispatch => {
  try {
    const res = await axios.post(
      '/api/v1/tournaments/createTournament',
      args,
    );
    console.log(res);
    return dispatch(create(res.data));
  } catch (e) {
    console.log({e});
  }
};

export const getTournamentsActions = () => async dispatch => {
  const res = await axios.get('/api/v1/tournaments/');
  return dispatch(get(res.data));
};

export const getTournamentsByUserId = userId => async dispatch => {
  try {
    const res = await axios.get(`/api/v1/tournaments/tournamentId/${userId}`)
    return dispatch(getTournyById(res.data))
  } catch (e) {
    console.log({e});
  }
}

export const getTournamentById = id => async dispatch => {
  try {
    const res = await axios.get(`/api/v1/tournaments/${id}`)
    return dispatch(getById(res.data))
  } catch (e) {
    console.log({e});
  }
}

export const deleteTournamentAction = id => async dispatch => {
  try {
    await axios.delete(`/api/v1/tournaments/${id}`)
    return dispatch(delete())
  } catch (e) {
    console.log({e});
  }
}
