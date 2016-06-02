import {TUTORIAL_SET} from './types';
import {routeSet} from 'core-coderoad/lib/route';

export function tutorialSet(name: string): ReduxThunk.ThunkInterface {
  return (dispatch, getState) => {
    const {dir} = getState();
    dispatch({ type: TUTORIAL_SET, payload: {name, dir }});
    dispatch(routeSet('progress'));
  };
}
