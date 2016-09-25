import {editor} from '../../../index';
import {hasOrDoesNotRequireXCode, minVersion} from './check-system';
import {tutorials} from 'coderoad-cli';

/**
 * Returns true if all object key values are true
 * @param  {Object} obj
 * @returns boolean
 */
function allTrue(obj: Object): boolean {
  return Object.values(obj).every(x => x === true);
}

/**
 * verifies setup of system & project
 * @param  {string} dir
 * @param  {PackageJson} packageJson
 * @returns CR
 */
export default function setupVerify(
  dir: string, packageJson: PackageJson
): CR.Checks {
  let hasPackageJson = false;
  let hasTutorial = false;
  const hasDir = !!dir;

  if (hasDir) {
    hasPackageJson = !!packageJson;
  }
  if (hasDir && hasPackageJson) {
    hasTutorial = !!tutorials({ dir });
  }

  let checks: CR.Checks = {
    system: {
      node: !!minVersion('node'),
      npm: !!minVersion('npm'),
      xcode: !!hasOrDoesNotRequireXCode,
      editor: !!editor.version.isAboveMinVersion(),
    },
    setup: {
      hasDir,
      hasPackageJson,
      hasTutorial,
    }
  };

  checks.system.passed = allTrue(checks.system);
  checks.setup.passed = allTrue(checks.setup);
  checks.passed = checks.system.passed && checks.setup.passed;
  return checks;
}
