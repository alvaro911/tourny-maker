const initialState = {
  token: '',
  isLogged: false,
  userName: '',
  email: '',
  name: '',
  lastName: '',
  _id: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'AUTHENTICATE_USER':
      console.log('PAYLOAD ', action.payload);
      return {
        ...state,
        token: action.payload.token,
        isLogged: true,
        userName: action.payload.userName,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        email: action.payload.email,
        _id: action.payload._id
      };
    case 'LOGGING_OUT':
      return initialState;
    case 'DELETE_USER':
      return initialState;
    default:
      return state;
  }
};
