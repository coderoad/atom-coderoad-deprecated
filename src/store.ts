import configureStore from './options/configureStore';
import reducer from './reducers';

export default configureStore({
  reducer,
  devMode: false,
});
