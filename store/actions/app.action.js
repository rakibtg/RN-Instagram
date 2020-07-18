import { user } from '../../constants/data';

export const setUser = () => {
  return {
    type: 'SET_USER',
    payload: user()
  }
}

export const setGalleryHeight = height => {
  return {
    type: 'SET_GALLERY_HEIGHT',
    payload: height
  }
}