import * as Type from '../../actions/actionTypes';

const defaultRoute: string = 'progress';

export default function routeReducer(route = defaultRoute, action: CR.Action): string {
  switch (action.type) {
    case Type.SET_ROUTE:
      return action.payload.route;
    default:
      return route;
  }
}
