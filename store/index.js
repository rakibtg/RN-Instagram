import { createStore, applyMiddleware } from 'redux';
import schema from './schema';
import rootReducer from './reducers';

const middlewares = [];

if (__DEV__) {
  const { createLogger } = require('redux-logger');
  const logger = createLogger({
    collapsed: true,
    stateTransformer: state => {
      let immutableNewState = {}
      Object.keys(state).map(index => {
        const _state = state[index]
        if(_state.toJS) {
          immutableNewState[index] = _state.toJS()
        } else {
          immutableNewState[index] = _state
        }
      })
      return immutableNewState
    },
  })
  middlewares.push(logger)
}

const initStore = () => createStore(
  rootReducer,
  schema,
  applyMiddleware(...middlewares)
)

export const store = initStore()