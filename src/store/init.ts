import {store} from './store';
import * as Action from '../actions/actions';

store.dispatch(Action.setGlobals);
store.dispatch(Action.verifySetup);
