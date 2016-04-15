import {store} from '../store/store';
import {SET_ROUTE} from './actionTypes';
import {loadTutorials} from './actions';

let previous = null;

/* Navigation */
export function setRoute(route: string): CR.Action|void {
  if (route && route !== previous) {

    // preloading for routes
    switch (route) {
      case 'tutorials':
        store.dispatch(loadTutorials());
    }

    previous = route;
    return { type: SET_ROUTE, payload: { route } };
  }
}
