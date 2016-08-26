import {routeSet} from '../../selectors';
import {TUTORIAL_SET} from './types';

export function tutorialSet({name, version}): ReduxThunk.ThunkInterface {
  return (dispatch, getState) => {
    const {dir} = getState();
    dispatch({ type: TUTORIAL_SET, payload: {name, dir, version }});
    dispatch(routeSet('progress'));
  };
}
