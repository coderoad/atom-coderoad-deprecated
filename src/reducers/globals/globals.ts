import * as Type from '../../actions/actionTypes';
import {setDir, setWin, setGlobals} from './set-globals';

const defaultGlobals: CR.Coderoad = {
  dir: setDir(),
  win: setWin()
};

export default function globalReducer(globals = defaultGlobals, action: CR.Action): CR.Coderoad {
  switch (action.type) {
    case Type.SET_GLOBALS:
      return Object.assign({}, setGlobals(action.payload.packageJson), globals);
    default:
      return globals;
  }
}
