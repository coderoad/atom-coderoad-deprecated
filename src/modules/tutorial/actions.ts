import {TUTORIAL_SET} from './types';
import {routeSet} from 'core-coderoad';

export function tutorialSet({name, version}): ReduxThunk.ThunkInterface {
  return (dispatch, getState) => {
    const {dir} = getState();
    dispatch({ type: TUTORIAL_SET, payload: {name, dir, version }});
    dispatch(routeSet('progress'));
  };
}
