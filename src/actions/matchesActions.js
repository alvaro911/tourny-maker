import axios from 'axios'

axios.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  config.headers.Authorization = token || null;
  return config;
});

const CREATE_MATCHES = 'CREATE_MATCHES'
const GET_MATCHES = 'GET_MATCHES'

const create = data => ({
  type: CREATE_MATCHES,
  payload: data
})

const get = data => ({
  type: GET_MATCHES,
  payload: data
})

export const createMatchesActions = id => async dispatch => {
  try {
    const res = await axios.post(`/api/v1/tournaments/${id}`)
    return dispatch(create(res.data))
  } catch (e) {
    console.log({e});
  }
}

export const getMatchesAction = id => async dispatch => {
  try {
    const res = await axios.get(`api/v1/matches/tournament/${id}`)
    return dispatch(get(res.data))
  } catch (e) {
    console.log({e});
  }
}
