// import finalCreateStore from './middleware';
import {createStore} from 'redux';
// import {batchedSubscribe} from 'redux-batched-subscribe';
import reducer from '../reducers/reducer';

// const createStoreWithBatching = batchedSubscribe(
//   fn => fn()
// )(finalCreateStore);

export let store: Redux.Store = createStore(reducer, {});
// export const store: Redux.Store = createStore(reducer, initialState);
