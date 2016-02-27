// import {compose, applyMiddleware, createStore } from 'redux';
// // Redux Devtools: https://github.com/gaearon/redux-devtools
// // import {DEV_MODE} from '../_base';
// // import { devTools, persistState } from 'redux-devtools';
//
// // const thunk = require('redux-thunk');
// const createLogger = require('redux-logger');
//
// /**
//  * Add Middleware
//  * - redux-thunk
//  */
// const logger = createLogger({
//   predicate: (getState, action) => true
// });
// 
// /**
//  * With Devtools
//  */
// export default compose(
//   applyMiddleware(
//     // thunk,
//     logger
//   )
//   // devTools(),
//   // persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
//   )(createStore);
