const initialState = {
  matches: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_MATCH_BY_ID':
    case 'MATCH_END':
      return {
        ...state,
        matches: [action.payload],
      };
    case 'GET_MATCHES':
      return {
        ...state,
        matches: [...action.payload],
      };
    default:
      return state;
  }
};
