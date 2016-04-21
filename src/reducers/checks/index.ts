import {SETUP_VERIFY} from '../../actions/_types';
import setupVerify from './verify';

const _checks = {
  passed: false,
  system: {
    node: false,
    npm: false,
  },
  setup: {
    dir: false,
    packageJson: false,
    tutorial: false,
  }
};

export default function checksReducer(
  checks = _checks, action: Action
): CR.Checks {
  switch (action.type) {
    case SETUP_VERIFY:
      return setupVerify();
    default:
      return checks;
  }
}
