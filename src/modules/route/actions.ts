import {ROUTE_SET} from './types';
import {tutorialsFind} from './tutorial';

let previous = null;

/* Navigation */
export function routeSet(route: string): ReduxThunk.ThunkInterface {
  if (route && route !== previous) {
    return (dispatch) => {
      previous = route;
      dispatch({ type: ROUTE_SET, payload: { route } });
    };
  }
}
