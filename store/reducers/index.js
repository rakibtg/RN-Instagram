import { combineReducers } from 'redux';
import app from './app.reducer';
import post from './post.reducer';

const appReducer = combineReducers({
  app,
  post
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
}

export default rootReducer;