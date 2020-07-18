export default (state = null, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload
      }
    case 'SET_GALLERY_HEIGHT':
      return {
        ...state,
        galleryHeight: action.payload
      }
    default:
      return state
  }
}