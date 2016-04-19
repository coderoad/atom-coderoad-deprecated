import {createStore} from 'redux';
import reducer from '../reducers';

export let store: Redux.Store = createStore(reducer, {});
