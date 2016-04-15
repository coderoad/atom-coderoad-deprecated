import {SET_GLOBALS} from '../../actions/actionTypes';
import {setGlobals} from './set-globals';

// TODO: refactor out globals into state
const defaultGlobals = {
  dir: null,
  win: null
};

export default function globalReducer(globals = defaultGlobals, action: CR.Action): CR.Coderoad {
  switch (action.type) {
    case SET_GLOBALS:
      let coderoad = Object.assign({}, setGlobals(action.payload.packageJson), window.coderoad);
      window.coderoad = coderoad;
      return coderoad;
    default:
      return globals;
  }
}
