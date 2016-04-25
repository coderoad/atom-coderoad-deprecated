import {npmMinVersion, nodeMinVersion} from './check-system';
import store from '../../store';
import {searchForTutorials} from '../tutorials/check-tutorials';

const result = x => x;
function allTrue(obj: Object): boolean {
  return Object.values(obj).every(x => x === true);
}

export default function setupVerify(): CR.Checks {
  let dir = !!store.getState().dir;
  let packageJson = false;
  let tutorial = false;

  let pj = store.getState().packageJson;

  if (dir) {
    packageJson = !!pj;
  }
  if (dir && packageJson) {
    tutorial = !!searchForTutorials(pj.dependencies).length || !!searchForTutorials(pj.devDependencies).length;
  }

  let checks: CR.Checks = {
    system: {
      node: !!nodeMinVersion(),
      npm: !!npmMinVersion(),
    },
    setup: {
      dir,
      packageJson,
      tutorial,
    }
  };

  checks.system.passed = allTrue(checks.system);
  checks.setup.passed = allTrue(checks.setup);
  checks.passed = checks.system.passed && checks.setup.passed;
  return checks;
}
