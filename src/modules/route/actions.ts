import {ROUTE_SET} from './types';

export function routeSet(route: string): Redux.ThunkAction<any, any, {}> {
  return (dispatch, getState) => {
    if (getState().route !== route) {
      dispatch({ type: ROUTE_SET, payload: { route } });
    }
    return;
  };
}
