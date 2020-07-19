import { user } from '../../constants/data';
import Navigation from '../../nagivation';

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

export const navigate = (screen, data={}) => {
  Navigation(screen, data);
  return {
    type: 'SET_ACTIVE_SCREEN',
    payload: screen
  }
}