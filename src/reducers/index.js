import { combineReducers } from 'redux';

import user from './userReducer';
import tournament from './tournamentReducer';
import match from './matchesReducer';

export default combineReducers({
  user,
  tournament,
  match,
});
