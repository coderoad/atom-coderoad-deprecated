import {compose} from 'redux';
import {mergePersistedState} from 'redux-localstorage';
import rootReducer from '../reducers';
import createStoreWithMiddleware from './middleware';

const initialState = {};

const reducer = compose(
  mergePersistedState()
)(rootReducer);

const store: Redux.Store = createStoreWithMiddleware(
  reducer, initialState
);
export default store;
