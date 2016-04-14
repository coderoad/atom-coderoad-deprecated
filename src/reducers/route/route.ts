import * as Type from '../../actions/actionTypes';
import {store} from '../../store/store';
import * as Action from '../../actions/task-actions';

const defaultRoute: string = 'start';

export default function routeReducer(route = defaultRoute, action: CR.Action): string {
  switch (action.type) {
    case Type.SET_ROUTE:
      const next = action.payload.route;
      return action.payload.route;
    default:
      return route;
  }
}
