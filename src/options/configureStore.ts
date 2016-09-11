import { applyMiddleware, createStore } from 'redux';
import * as createLogger from 'redux-logger';
import thunk from 'redux-thunk';

const configureStore = ({reducer, devMode}) => {

  let middlewares = [thunk];

  // use logger if devMode
  if (devMode) {
    const logger = (createLogger as any)();
    middlewares.push(logger);
  } else {
    process.env.NODE_ENV = 'production';
  }

  // create store with middlewares
  const store: Redux.Store<any> = createStore(
    reducer,
    applyMiddleware(...middlewares)
  );

  return store;
};

export default configureStore;
