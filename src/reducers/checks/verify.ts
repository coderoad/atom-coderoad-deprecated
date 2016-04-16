import {npmMinVersion, nodeMinVersion} from './check-system';
// import {hasDirectory} from './check-setup';
import RootPackage from '../../services/root-package';

const result = (x) => x;
function allTrue(obj: Object): boolean {
  return Object.values(obj).every((x) => x === true);
}

function hasTutorialDep(): boolean {
  const tutorials = RootPackage.getTutorials();
  return !!tutorials && tutorials.length > 0;
}

export default function verifySetup(): CR.Checks {
  let dir = !!window.coderoad.dir;
  let packageJson = false;
  let tutorial = false;

  RootPackage.set();

  if (dir) {
    packageJson = !!RootPackage.get();
  }
  if (dir && packageJson) {
    tutorial = hasTutorialDep();
  }

  let checks: CR.Checks = {
    system: {
      node: !!nodeMinVersion(),
      npm: !!npmMinVersion()
    },
    setup: {
      dir, packageJson, tutorial
    }
  };

  checks.system.passed = allTrue(checks.system);
  checks.setup.passed = allTrue(checks.setup);
  checks.passed = checks.system.passed && checks.setup.passed;
  return checks;
}
