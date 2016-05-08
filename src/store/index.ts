import { applyMiddleware, createStore } from 'redux';
import reducer from '../reducers';
import * as createLogger from 'redux-logger';

const devMode = true;
let store = null;

if (devMode) {
  const logger = createLogger();
  store = createStore(
    reducer,
    applyMiddleware(logger)
  );
} else {
  const initialState = {};
  store = createStore(reducer, initialState);
}
export default store;
