const initialState = {
  isLogged: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'AUTHENTICATE_USER':
      return {
        ...state,
        isLogged: true,
        ...action.payload,
      };
    case 'LOGGING_OUT':
    case 'DELETE_USER':
      return initialState;
    default:
      return state;
  }
};
