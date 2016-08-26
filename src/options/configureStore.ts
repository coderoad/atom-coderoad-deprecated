import { applyMiddleware, createStore } from 'redux';
import * as createLogger from 'redux-logger';
import thunk from 'redux-thunk';

const configureStore = ({reducer, devMode}) => {

  const middlewares = [thunk];

  // use logger if devMode
  if (devMode) {
    const logger = createLogger();
    middlewares.push(logger);
  } else {
    process.env.NODE_ENV = 'production';
  }

  // create store with middlewares
  const store: Redux.Store = createStore(
    reducer,
    applyMiddleware(...middlewares)
  );

  return store;
};

export default configureStore;
