const env = 'dev';

import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import * as PouchDB from 'pouchdb';
import {persistentStore} from 'redux-pouchdb';
import reducer from '../reducers';

const db = new PouchDB('coderoad');

const middlewares = [thunk];

if (env && env === 'dev') {
  const createLogger = require('redux-logger');
  const logger = createLogger();
  middlewares.push(logger);
}

const createStoreWithMiddleware = compose(
  applyMiddleware(...middlewares),
  persistentStore(db)
)(createStore);

export let store: Redux.Store = createStoreWithMiddleware(reducer, {});
