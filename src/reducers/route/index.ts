import {ROUTE_SET} from '../../actions/_types';
import store from '../../store';

const _route = 'start';

export default function routeReducer(
  route = _route, action: Action
): string {
  switch (action.type) {
    case ROUTE_SET:
      return action.payload.route;
    default:
      return route;
  }
}
