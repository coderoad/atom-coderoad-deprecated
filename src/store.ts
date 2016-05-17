import { applyMiddleware, createStore } from 'redux';
import reducer from './reducers';
import * as createLogger from 'redux-logger';
import thunk from 'redux-thunk';

const middlewares = [thunk];

const devMode = false;
if (devMode) {
  const logger = createLogger();
  middlewares.push(logger);
}

const store: Redux.Store = createStore(
  reducer,
  applyMiddleware(...middlewares)
);

export default store;
