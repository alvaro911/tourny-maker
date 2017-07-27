const initialState = {
  token: '',
  isLogged: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'AUTHENTICATE_USER':
      return {
        ...state,
        token: action.payload.token,
        isLogged: true,
      };
    case 'LOGGING_OUT':
      return {
        ...state,
        token: '',
        isLogged: false,
      };
    default:
      return state;
  }
};
