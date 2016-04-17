import {ROUTE_SET} from '../../actions/_types';
import {store} from '../../store/store';

const defaultRoute: string = 'start';

export default function routeReducer(route = defaultRoute, action: CR.Action): string {
  switch (action.type) {
    case ROUTE_SET:
      const next = action.payload.route;
      return action.payload.route;
    default:
      return route;
  }
}
