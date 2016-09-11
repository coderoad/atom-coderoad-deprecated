import configureMockStore from 'redux-mock-store';

import thunk from 'redux-thunk';
const middlewares = [thunk];

const mockStore = configureMockStore(thunk);
export default mockStore;