const initialState = {
  myFavorites: [],
  characterDetail: {},
  allCharacters: []
}

const reducer = (state = initialState, action) => {
  const newFilter = state.allCharacters.filter(character => character.gender === action.payload)
  switch (action.type) {
    case 'ADD_FAV':
      return { ...state, myFavorites: action.payload, allCharacters: action.payload }
    case 'REMOVE_FAV':
      return { ...state, myFavorites: action.payload, allCharacters: action.payload }
    case 'REMOVE_ALL_FAV':
      return { ...state, myFavorites: action.payload, allCharacters: action.payload }
    case 'CHARACTER_DETAIL':
      return {
        ...state,
        characterDetail: action.payload
      }
    case 'CLEAN_DETAIL':
      return {
        ...state,
        characterDetail: {}
      }
    case 'FILTER':
      return {
        ...state,
        myFavorites: newFilter
      }
    case 'ORDER':
      return {
        ...state,
        myFavorites: state.myFavorites.sort((a, b) => {
          if (a.id > b.id) {
            return action.payload === 'A' ? 1 : -1
          }
          if (a.id < b.id) {
            return action.payload === 'D' ? 1 : -1
          }
          return 0
        })
      }
    case 'RESET':
      return {
        ...state,
        myFavorites: [...state.allCharacters]
      }
    case 'CLEAN_FILTER':
      return {
        ...state,
        myFavorites: [...state.allCharacters]
      }
    default:
      return state
  }
}

export default reducer
