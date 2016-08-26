import { applyMiddleware, createStore } from 'redux';
import * as createLogger from 'redux-logger';
import throttleActions from 'redux-throttle-actions';
import thunk from 'redux-thunk';

const configureStore = ({reducer, devMode, throttle}) => {

  const middlewares = [thunk];

  // use logger if devMode
  if (devMode) {
    const logger = createLogger();
    middlewares.push(logger);
  } else {
    process.env.NODE_ENV = 'production';
  }

  // throttle save
  if (throttle) {
    const toThrottle = Object.keys(throttle);
    toThrottle.forEach((action: string) => {
        middlewares.push(
          throttleActions([].concat(action), throttle[action])
        );
    });
  }

  // create store with middlewares
  const store: Redux.Store = createStore(
    reducer,
    applyMiddleware(...middlewares)
  );

  return store;
};

export default configureStore;
