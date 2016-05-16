import {SETUP_VERIFY} from './types';
import setupVerify from './utils/verify';

const _checks: CR.Checks = {
  passed: false,
  system: {
    node: false,
    npm: false,
    xcode: false,
  },
  setup: {
    hasDir: false,
    hasPackageJson: false,
    hasTutorial: false,
  }
};

export default function checks(
  checks = _checks, action: Action
): CR.Checks {
  switch (action.type) {

    case SETUP_VERIFY:
      const {dir, packageJson} = action.payload;
      return setupVerify(dir, packageJson);

    default:
      return checks;
  }
}
