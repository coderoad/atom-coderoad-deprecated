import {
  TUTORIALS_FIND, TUTORIAL_UPDATE, TUTORIAL_SET
} from './_types';
import {progressLoad, routeSet, alertOpen} from './index';

export function tutorialSet(name: string): ReduxThunk.ThunkInterface {
  return (dispatch, getState) => {
    const {dir} = getState();
    dispatch({ type: TUTORIAL_SET, payload: {name, dir }});
    dispatch(progressLoad());
    dispatch(routeSet('progress'));
  };
}

export function tutorialUpdate(name: string): ReduxThunk.ThunkInterface {
  return (dispatch, getState) => {
    const alert = {
      message: `run \`npm install --save-dev ${name}\``,
      action: 'note',
      duration: 3000,
    };
    dispatch({ type: TUTORIAL_UPDATE, payload: { name }});
    dispatch(alertOpen(alert));
  };
}

export function tutorialsFind(): ReduxThunk.ThunkInterface {
  return (dispatch, getState) => {
    const {packageJson, dir} = getState();
    dispatch({ type: TUTORIALS_FIND, payload: { packageJson, dir } });
  };
}
