import axios from 'axios';

axios.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  config.headers.Authorization = token || null;
  return config;
});

const BASE_URL = 'https://tourny-maker-server.herokuapp.com'

const CREATE_MATCHES = 'CREATE_MATCHES';
const GET_MATCHES = 'GET_MATCHES';
const GET_MATCH_BY_ID = 'GET_MATCH_BY_ID';
const MATCH_END = 'MATCH_END';

const create = data => ({
  type: CREATE_MATCHES,
  payload: data,
});

const get = data => ({
  type: GET_MATCHES,
  payload: data,
});

const getOne = data => ({
  type: GET_MATCH_BY_ID,
  payload: data,
});

const updateRes = data => ({
  type: MATCH_END,
  payload: data,
});

export const createMatchesActions = id => async dispatch => {
  try {
    const res = await axios.post(
      `${BASE_URL}/api/v1/tournaments/${id}`,
    );
    return dispatch(create(res.data));
  } catch (e) {
    console.log({ e });
  }
};

export const getMatchesAction = id => async dispatch => {
  try {
    const res = await axios.get(
      `${BASE_URL}/api/v1/matches/tournament/${id}`,
    );
    return dispatch(get(res.data));
  } catch (e) {
    console.log({ e });
  }
};

export const getMatchById = id => async dispatch => {
  try {
    const res = await axios.get(
      `${BASE_URL}/api/v1/matches/match/${id}`,
    );
    return dispatch(getOne(res.data));
  } catch (e) {
    console.log({ e });
  }
};

export const finalRes = (id, args) => async dispatch => {
  try {
    const res = await axios.patch(
      `${BASE_URL}/api/v1/matches/${id}`,
      args,
    );
    return dispatch(updateRes(res.data));
  } catch (e) {
    console.log({ e });
  }
};
