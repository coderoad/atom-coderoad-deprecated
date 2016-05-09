import {
  TUTORIALS_FIND, TUTORIAL_UPDATE, TUTORIAL_SET
} from './_types';

export function tutorialSet(name: string): ReduxThunk.ThunkInterface {
  return (dispatch, getState): void => {
    const {dir} = getState();
    dispatch({ type: TUTORIAL_SET, payload: { name, dir } });
  };
}

export function tutorialUpdate(name: string): Action {
  return { type: TUTORIAL_UPDATE, payload: { name } };
}

export function tutorialsFind(): ReduxThunk.ThunkInterface {
  return (dispatch, getState): void => {
    const {packageJson, dir} = getState();
    dispatch({ type: TUTORIALS_FIND, payload: { packageJson, dir } });
  };
}
