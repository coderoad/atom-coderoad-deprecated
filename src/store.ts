import reducer from './reducers';
import {configureStore} from 'core-coderoad';

export default configureStore(
  reducer,
  // devMode
  true,
  // throttled actions
  { TEST_RUN: 800}
);
