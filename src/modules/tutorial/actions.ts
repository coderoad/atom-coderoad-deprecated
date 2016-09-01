import {routeSet} from '../../actions';
import {TUTORIAL_SET} from './types';

export function tutorialSet({name, version}):
  Redux.ThunkAction<any, {dir: string}, {}> {
  return (dispatch, getState) => {
    const {dir} = getState();
    dispatch({ type: TUTORIAL_SET, payload: {name, dir, version }});
    dispatch(routeSet('progress'));
  };
}
