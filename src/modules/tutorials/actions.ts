import {TUTORIALS_FIND, TUTORIAL_UPDATE} from './types';
import {alertOpen} from 'core-coderoad/lib/alert';
export {tutorialSet} from '../tutorial/actions';

export function tutorialUpdate(title: string): ReduxThunk.ThunkInterface {
  return (dispatch, getState) => {
    const alert = {
      message: `run \`npm install --save-dev ${title}\``,
      action: 'note',
      duration: 3000,
    };
    dispatch({ type: TUTORIAL_UPDATE, payload: { title }});
    dispatch(alertOpen(alert));
  };
}

export function tutorialsFind(): ReduxThunk.ThunkInterface {
  return (dispatch, getState) => {
    const {dir} = getState();
    dispatch({ type: TUTORIALS_FIND, payload: { dir } });
  };
}
