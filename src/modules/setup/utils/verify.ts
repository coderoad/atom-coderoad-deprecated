import {nodeMinVersion, npmMinVersion, requiresXCode} from './check-system';
import {tutorials} from 'coderoad-cli';

function allTrue(obj: Object): boolean {
  return Object.values(obj).every(x => x === true);
}

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
      node: !!nodeMinVersion(),
      npm: !!npmMinVersion(),
      xcode: !!requiresXCode(),
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
