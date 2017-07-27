import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';

const middlewares = [thunk];

if (process.env.NODE_ENV !== 'production') {
  middlewares.push(createLogger());
}

export default createStore(
  rootReducer,
  undefined,
  compose(
    applyMiddleware(...middlewares),
    window.devToolsExtension
      ? window.devToolsExtension()
      : f => f,
  ),
);
