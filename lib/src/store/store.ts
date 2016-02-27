// import finalCreateStore from './middleware';
import {createStore} from 'redux';
import {getInitialState} from './initialState';
// import {batchedSubscribe} from 'redux-batched-subscribe';
import reducer from '../reducers/reducer';

// const createStoreWithBatching = batchedSubscribe(
//   fn => fn()
// )(finalCreateStore);

export const initialState = getInitialState();

export let store: Redux.Store = createStore(reducer, initialState);
// export const store: Redux.Store = createStore(reducer, initialState);

export const dispatch: Redux.Dispatch = store.dispatch;
