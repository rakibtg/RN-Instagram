export default (state = null, action) => {
  switch (action.type) {
    case 'SET_POSTS':
      return {
        ...state,
        posts: action.payload
      }
    case 'SET_ACTIVE_POST':
      return {
        ...state,
        activePost: action.payload
      }
    case 'RESET_ACTIVE_POST':
      return {
        ...state,
        activePost: action.payload
      }
    default:
      return state
  }
}