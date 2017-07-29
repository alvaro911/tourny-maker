const initialState = {
  token: '',
  isLogged: false,
  userName: '',
  email: '',
  name: '',
  lastName: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'AUTHENTICATE_USER':
      return {
        ...state,
        token: action.payload.token,
        isLogged: true,
        userName: action.payload.userName,
        name: action.payload.firstName,
        lastName: action.payload.lastName,
        email: action.payload.email,
      };
    case 'LOGGING_OUT':
      return initialState;
    default:
      return state;
  }
};
