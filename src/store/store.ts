import {createStore} from 'redux';
import reducer from '../reducers/reducer';

export let store: Redux.Store = createStore(reducer, {});
