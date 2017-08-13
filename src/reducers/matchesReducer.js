const initialState = {
  matches: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_MATCH_BY_ID':
    case 'MATCH_END':
      return {
        ...state,
        matches: [...state, action.payload],
      };
    case 'GET_MATCHES':
      return {
        ...state,
        matches: [...state, action.payload],
      };
    default:
      return state;
  }
};
