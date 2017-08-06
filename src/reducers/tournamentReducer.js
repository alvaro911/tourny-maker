const initialState = {
  tournaments: [],
  userTournaments: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_TEAM':
      return {
        ...state,
        tournaments: state.tournaments.map(
          t =>
            t._id === action.tournamentId
              ? {
                  ...t,
                  teams: [...t.teams, action.payload],
                }
              : t,
        ),
      };
    case 'FETCH_TOURNAMENTS':
      return {
        ...state,
        tournaments: action.payload,
      };
    case 'FETCH_TOURNAMENTS_BY_USER_ID': {
      return {
        ...state,
        userTournaments: action.payload,
      };
    }
    case 'CREATE_TOURNAMENT':
    case 'FETCH_TOURNAMENT':
    case 'CREATE_MATCHES':
      return {
        ...state,
        tournaments: [...state.tournaments, action.payload],
      };
    case 'DELETE_TOURNAMENT':
      return {
        ...state,
        userTournaments: state.userTournaments.filter(
          t => t._id !== action.id,
        ),
      };
    default:
      return state;
  }
};
