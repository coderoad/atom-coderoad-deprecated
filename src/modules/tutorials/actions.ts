import {alertOpen} from '../alert/actions';
import {TUTORIALS_FIND, TUTORIALS_UPDATE, TUTORIAL_UPDATE, TUTORIAL_VERSION} from './types';
export {tutorialSet} from '../tutorial/actions';

export function tutorialUpdate(title: string):
  Redux.ThunkAction<any, {}, {}> {
  return (dispatch) => {
    dispatch({ type: TUTORIAL_UPDATE, payload: { title }});

    // alert instructions
    const alert = {
      message: `run \`npm install --save-dev ${title}\``,
      action: 'note',
      duration: 3000,
    };
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

export function tutorialVersion({name, latest}): Action {
  return { type: TUTORIAL_VERSION, payload: { name, latest } };
}
