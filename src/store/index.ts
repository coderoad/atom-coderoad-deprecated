import {createStore, applyMiddleware} from 'redux';
import reducer from '../reducers';
import * as createLogger from 'redux-logger';

const dev = false;

let store: Redux.Store = null;
if (dev) {
  const logger = createLogger();
  store = createStore(
    reducer,
    applyMiddleware(logger)
  );
} else {
  const initialState = {};
  store = createStore(
    reducer, initialState
  );
}
export default store;
