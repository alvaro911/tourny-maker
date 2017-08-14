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
const FETCH_TOURNAMENTS_BY_USER_ID =
  'FETCH_TOURNAMENTS_BY_USER_ID';

const create = data => ({
  type: CREATE_TOURNAMENT,
  payload: data,
});

const update = data => ({
  type: UPDATE_TOURNAMENT,
  payload: data,
});

const getOne = data => ({
  type: FETCH_TOURNAMENT,
  payload: data,
});

const getAll = data => ({
  type: FETCH_TOURNAMENTS,
  payload: data,
});

const getTournyById = data => ({
  type: FETCH_TOURNAMENTS_BY_USER_ID,
  payload: data,
});

const deleteTourny = id => ({
  type: DELETE_TOURNAMENT,
  id,
});

export const createTournamentAction = args => async dispatch => {
  try {
    const res = await axios.post(
      '/api/v1/tournaments/createTournament',
      args,
    );
    return dispatch(create(res.data));
  } catch (e) {
    console.log({ e });
  }
};

export const getTournamentsActions = () => async dispatch => {
  try {
    const res = await axios.get('/api/v1/tournaments/');
    return dispatch(getAll(res.data));
  } catch (e) {
    console.log({ e });
  }
};

export const getTournamentById = id => async dispatch => {
  const res = await axios.get(`/api/v1/tournaments/${id}`);
  return dispatch(getOne(res.data));
};

export const getTournamentsByUserId = userId => async dispatch => {
  try {
    const res = await axios.get(
      `/api/v1/tournaments/tournamentId/${userId}`,
    );
    return dispatch(getTournyById(res.data));
  } catch (e) {
    console.log({ e });
  }
};

export const deleteTournamentAction = id => async dispatch => {
  try {
    await axios.delete(`/api/v1/tournaments/${id}`);
    return dispatch(deleteTourny(id));
  } catch (e) {
    console.log({ e });
  }
};

export const updateTournament = id => async dispatch => {
  try {
    const res = await axios.patch(
      `/api/v1/tournaments/${id}`,
    );
    return dispatch(update(res.data));
  } catch (e) {
    console.log({ e });
  }
};
