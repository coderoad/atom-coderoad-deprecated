import {fileExists} from '../../services/exists';
import {npmVersionThreeOrLater} from './check-system';
import {hasDirectory, hasPackageJson, hasTutorialDep} from './check-setup';
import {packageJsonExists, loadRootPackageJson, searchForTutorials} from '../tutorials/check-tutorials';
import {createPackageJson, openDirectory, installTutorial} from './setup-actions';
import * as path from 'path';

function allTrue(obj: Object): boolean {
  return Object.values(obj).every((x) => x === true);
}

function result(x) {
  return x;
}

export default function verifySetup(): CR.Checks {
  let checks: CR.Checks = {
    system: {
      node: false,
      npm: !!npmVersionThreeOrLater()
    },
    setup: {
      dir: !!hasDirectory(),
      packageJson: !!hasPackageJson(),
      tutorial: !!hasTutorialDep()
    }
  };

  checks.system.passed = allTrue(checks.system);
  checks.setup.passed = allTrue(checks.setup);
  checks.passed = checks.system.passed && checks.setup.passed;
  return checks;
}
