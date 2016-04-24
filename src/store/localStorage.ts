import {compose} from 'redux';
import persistState from 'redux-localstorage';
import * as adapter from 'redux-localstorage/lib/adapters/localStorage';
import filter from 'redux-localstorage-filter';

const key = 'coderoad';

const storage = compose(
  filter('nested.key')
)(adapter(window.localStorage));

const localStorage = persistState(storage, key);
export default localStorage
