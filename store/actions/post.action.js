import { recentPosts } from '../../constants/data';

export const setPosts = () => {
  return {
    type: 'SET_POSTS',
    payload: recentPosts()
  }
}

export const setActivePost = post => {
  return {
    type: 'SET_ACTIVE_POST',
    payload: post
  }
}

export const resetActivePost = () => {
  return {
    type: 'RESET_ACTIVE_POST',
    payload: null
  }
}