import {ROUTE_SET} from './types';

const _route = 'start';

/**
 * Sets the route name
 * @param  {} route=_route route name
 * @param  {Action} action redux action
 * @returns string route name
 */
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
