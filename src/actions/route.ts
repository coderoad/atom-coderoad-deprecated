import {store} from '../store';
import {ROUTE_SET} from './_types';
import {tutorialsFind} from './tutorial';

let previous = null;

/* Navigation */
export function routeSet(route: string): Action {
  if (route && route !== previous) {

    // preloading for routes
    switch (route) {
      case 'tutorials':
        store.dispatch(tutorialsFind());
    }

    previous = route;
    return {
      payload: { route },
      type: ROUTE_SET,
    };
  }
}
