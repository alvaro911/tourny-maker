const initialState = {
  token: '',
  isLogged: false,
  userName: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'AUTHENTICATE_USER':
      return {
        ...state,
        token: action.payload.token,
        isLogged: true,
        userName: action.payload.userName,
      };
    case 'LOGGING_OUT':
      return {
        ...state,
        token: '',
        isLogged: false,
        userName: '',
      };
    default:
      return state;
  }
};
