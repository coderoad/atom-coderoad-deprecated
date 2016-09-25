import {SETUP_VERIFY} from '../types';
import setupVerify from '../utils/verify';

export const _checks: CR.Checks = {
  passed: false,
  system: {
    node: false,
    npm: false,
    xcode: false,
    editor: false,
  },
  setup: {
    hasDir: false,
    hasPackageJson: false,
    hasTutorial: false,
  }
};

/**
 * setup and system checks reducer
 * @param  {} checks=_checks
 * @param  {Action} action
 * @returns CR.Checks
 */
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
