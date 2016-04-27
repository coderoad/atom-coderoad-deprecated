import {compose, createStore} from 'redux';
import rootReducer from '../reducers';
// import createStoreWithMiddleware from './middleware';

const initialState = {};

const store: Redux.Store = createStore(
  rootReducer, initialState
);
export default store;
