import {ROUTE_SET} from './types';

/**
 * Sets a route
 * @param  {string} route route name
 * @returns thunk
 */
export function routeSet(route: string): Redux.ThunkAction<any, any, {}> {
  return (dispatch, getState) => {
    if (getState().route !== route) {
      dispatch({ type: ROUTE_SET, payload: { route } });
    }
    return;
  };
}
