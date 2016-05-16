import {ROUTE_SET} from './types';

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
