const initialState = {
  tournamentName: '',
  numberOfTeams: 0,
  minimumNumPlayers: 0,
  startDate: '',
  countryState: '',
  address: '',
  city: '',
  zipCode: 0,
}

export default (state = initialState, action) => {
  switch(action.type){
    case 'CREATE_TOURNAMENT':
      return {
        ...state,
        tournamentName: action.payload.tournamentName,
        numberOfTeams: action.payload.numberOfTeams,
        minimumNumPlayers: action.payload.minimumNumPlayers,
        startDate: action.payload.startDate,
        countryState: action.payload.state,
        address: action.payload.address,
        city: action.payload.city,
        zipCode: action.payload.zipCode
      }
    default:
      return state
  }
}
