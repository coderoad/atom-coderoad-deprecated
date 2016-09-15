import {alertOpen} from '../alert/actions';
import {TUTORIALS_FIND, TUTORIALS_UPDATE, TUTORIAL_UPDATE} from './types';
export {tutorialSet} from '../tutorial/actions';

export function tutorialUpdate(title: string):
  Redux.ThunkAction<any, {}, {}> {
  return (dispatch) => {
    const alert = {
      message: `run \`npm install --save-dev ${title}\``,
      action: 'note',
      duration: 3000,
    };
    dispatch({ type: TUTORIAL_UPDATE, payload: { title }});
    dispatch(alertOpen(alert));
  };
}

export function tutorialsUpdate(): Action {
  return { type: TUTORIALS_UPDATE };
}

export function tutorialsFind(): Redux.ThunkAction<any, {dir: string}, {}> {
  return (dispatch, getState) => {
    const {dir} = getState();
    dispatch({ type: TUTORIALS_FIND, payload: { dir } });
    dispatch(tutorialsUpdate());
  };
}
