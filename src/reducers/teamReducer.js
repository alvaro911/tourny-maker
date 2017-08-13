const initialState = {
  teams: []
}

export default(state = initialState, action) => {
  switch (action.type) {
    case 'GET_TEAM':
      return {
        ...state,
        teams: action.payload
      }
    default:
      return state
  }
}
