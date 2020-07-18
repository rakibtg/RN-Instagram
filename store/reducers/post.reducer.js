export default (state = null, action) => {
  switch (action.type) {
    case 'SET_POSTS':
      return {
        ...state,
        posts: action.payload
      }
    default:
      return state
  }
}