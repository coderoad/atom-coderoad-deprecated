import {TUTORIAL_SET} from './types';
import {progressLoad, routeSet} from '../../actions';

export function tutorialSet(name: string): ReduxThunk.ThunkInterface {
  return (dispatch, getState) => {
    const {dir} = getState();
    dispatch({ type: TUTORIAL_SET, payload: {name, dir }});
    dispatch(progressLoad());
    dispatch(routeSet('progress'));
  };
}
