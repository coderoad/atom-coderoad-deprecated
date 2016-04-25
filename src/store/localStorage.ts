import {compose} from 'redux';
import persistState from 'redux-localstorage';
import * as adapter from 'redux-localstorage/lib/adapters/localStorage';
import filter from 'redux-localstorage-filter';
import {store} from './index';

function getTutorial(): string {
  return store.getState().tutorial.name;
}

const storage = compose(
  filter(['progress'])
)(adapter(window.localStorage));

const localStorage = persistState(storage, `coderoad.${getTutorial()}`);
export default localStorage
