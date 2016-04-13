import * as Type from '../../actions/actionTypes';
import {setWin, setGlobals} from './set-globals';

// TODO: refactor out globals into state

export default function globalReducer(globals = {}, action: CR.Action): CR.Coderoad {
  switch (action.type) {
    case Type.SET_GLOBALS:
      let coderoad = Object.assign({}, setGlobals(action.payload.packageJson), window.coderoad);
      window.coderoad = coderoad;
      return coderoad;
    default:
      return globals;
  }
}
