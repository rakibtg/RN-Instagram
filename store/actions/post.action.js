import { recentPosts } from '../../constants/data';
import { profileDataChunk } from '../../helpers';

export const setPosts = () => {
  return {
    type: 'SET_POSTS',
    payload: recentPosts()
  }
}