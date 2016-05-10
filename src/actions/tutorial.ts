import {
  TUTORIALS_FIND, TUTORIAL_UPDATE, TUTORIAL_SET,
  ALERT_TOGGLE
} from './_types';

export function tutorialSet(name: string): ReduxThunk.ThunkInterface {
  return (dispatch, getState): void => {
    const {dir} = getState();
    dispatch({ type: TUTORIAL_SET, payload: { name, dir } });
  };
}

export function tutorialUpdate(name: string): ReduxThunk.ThunkInterface {
  return (dispatch, getState): void => {
    const alert = {
      message: `run \`npm install --save-dev ${name}\``,
      action: 'note',
      duration: 4000,
    };
    dispatch({ type: TUTORIAL_UPDATE, payload: { name } });
    dispatch({ type: ALERT_TOGGLE, payload: { alert } });
  };
}

export function tutorialsFind(): ReduxThunk.ThunkInterface {
  return (dispatch, getState): void => {
    const {packageJson, dir} = getState();
    dispatch({ type: TUTORIALS_FIND, payload: { packageJson, dir } });
  };
}
