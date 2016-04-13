import * as Type from '../../actions/actionTypes';
import verifySetup from './verify';

const defaultChecks = {
  passed: false,
  system: {
    node: false,
    npm: false
  },
  setup: {
    dir: false,
    packageJson: false,
    tutorial: false
  }
};

export default function checksReducer(checks = defaultChecks, action: CR.Action): CR.Checks {
  switch (action.type) {
    case Type.VERIFY_SETUP:
      return verifySetup();
    default:
      return checks;
  }
}
