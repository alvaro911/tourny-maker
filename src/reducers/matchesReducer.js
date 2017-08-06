const initialState = {
  matches: []
}

export default (state = initialState, action) => {
  switch (action.type){
    case 'GET_MATCHES':
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}
