import { combineReducers } from 'redux';

import user from './userReducer';
import tournament from './tournamentReducer';
import match from './matchesReducer';
import team from './teamReducer'

export default combineReducers({
  user,
  tournament,
  match,
  team
});
