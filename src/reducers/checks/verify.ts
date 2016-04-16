import {npmMinVersion, nodeMinVersion} from './check-system';
import RootPackage from '../../services/root-package';
import {searchForTutorials} from '../tutorials/check-tutorials';

const result = (x) => x;
function allTrue(obj: Object): boolean {
  return Object.values(obj).every((x) => x === true);
}

export default function setupVerify(): CR.Checks {
  let dir = !!window.coderoad.dir;
  let packageJson = false;
  let tutorial = false;

  RootPackage.set();
  let pj = RootPackage.get();

  if (dir) {
    packageJson = !!pj;
  }
  if (dir && packageJson) {
    tutorial = !!searchForTutorials(pj.dependencies).length || !!searchForTutorials(pj.devDependencies).length;
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
