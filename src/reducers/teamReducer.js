const initialState = {
  teamName: '',
  players: [],
  playerName: '',
  playerNumber: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_TEAM':
      return {
        ...state,
        teamName: action.payload.teamName,
        playerName: action.payload.teamName,
        playerNumber: action.payload.playerNumber,
      };
    default:
      return state;
  }
};
