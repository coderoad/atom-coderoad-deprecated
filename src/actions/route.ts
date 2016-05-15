import {ROUTE_SET} from './_types';
import {tutorialsFind} from './tutorial';

let previous = null;

/* Navigation */
export function routeSet(route: string): ReduxThunk.ThunkInterface {
  if (route && route !== previous) {
    return (dispatch) => {
      // preloading for routes
      switch (route) {
        case 'tutorials':
          dispatch(tutorialsFind());
      }
      previous = route;
      dispatch({ type: ROUTE_SET, payload: { route } });
    };
  }
}
