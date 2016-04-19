import {GLOBALS_SET} from '../../actions/_types';
import {globalsSet} from './set-globals';

// TODO: refactor out globals into state
const _globals = {
  dir: null,
  win: null
};

export default function globalReducer(globals = _globals,
  action: CR.Action): CR.Coderoad {
  switch (action.type) {
    case GLOBALS_SET:
      let coderoad = Object.assign({}, globalsSet(action.payload.packageJson), window.coderoad);
      window.coderoad = coderoad;
      return coderoad;
    default:
      return globals;
  }
}
