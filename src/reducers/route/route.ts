import {SET_ROUTE} from '../../actions/actionTypes';
import {store} from '../../store/store';

const defaultRoute: string = 'tutorials';

export default function routeReducer(route = defaultRoute, action: CR.Action): string {
  switch (action.type) {
    case SET_ROUTE:
      const next = action.payload.route;
      return action.payload.route;
    default:
      return route;
  }
}
