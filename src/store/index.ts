import {createStore} from 'redux';
import reducer from '../reducers';

const initialState = {};
const store = createStore(
    reducer, initialState
  );
export default store;
