const env = 'dev'; // toggle on/off logger

import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

const middlewares = [thunk];

if (env && env === 'dev') {
  const createLogger = require('redux-logger');
  const logger = createLogger();
  middlewares.push(logger);
}

const createStoreWithMiddleware = compose(
  applyMiddleware(...middlewares)
)(createStore);

export default createStoreWithMiddleware;
