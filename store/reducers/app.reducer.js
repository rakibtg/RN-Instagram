export default (state = null, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload
      }
    case 'SET_ACTIVE_SCREEN':
      return {
        ...state,
        activeScreen: action.payload
      }
    default:
      return state
  }
}