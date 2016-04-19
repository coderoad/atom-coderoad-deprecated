import {store} from '../store';
import {ROUTE_SET} from './_types';
import {tutorialsFind} from './tutorial';

let previous = null;

/* Navigation */
export function setRoute(route: string): CR.Action|void {
  if (route && route !== previous) {

    // preloading for routes
    switch (route) {
      case 'tutorials':
        store.dispatch(tutorialsFind());
    }

    previous = route;
    return { type: ROUTE_SET, payload: { route } };
  }
}
