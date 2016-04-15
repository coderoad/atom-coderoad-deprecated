import {store} from '../store/store';
import * as Type from './actionTypes';
import * as Action from './actions';

let previous = null;

/* Navigation */
export function setRoute(route: string): CR.Action|void {
  if (route && route !== previous) {

    // preloading for routes
    switch (route) {
      case 'tutorials':
        store.dispatch(Action.loadTutorials());
    }

    previous = route;
    return { type: Type.SET_ROUTE, payload: { route } };
  }
}
