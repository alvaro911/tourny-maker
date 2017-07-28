import { combineReducers } from 'redux';

import user from './userReducer';
import tournament from './tournamentReducer'

export default combineReducers({
  user,
  tournament
});
