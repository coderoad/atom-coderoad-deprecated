import {TUTORIALS_FIND, TUTORIAL_UPDATE} from './types';
import {alertOpen} from '../../actions';

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
