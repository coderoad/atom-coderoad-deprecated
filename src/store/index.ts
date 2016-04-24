import {compose} from 'redux';
import {mergePersistedState} from 'redux-localstorage';
import rootReducer from '../reducers';
import createStoreWithMiddleware from './middleware';

const initialState = {};

const reducer = compose(
  mergePersistedState()
)(rootReducer);

export let store: Redux.Store = createStoreWithMiddleware(
  reducer, initialState
);
