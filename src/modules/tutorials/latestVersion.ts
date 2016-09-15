import {isAboveVersion} from '../../utils/compareVersions';
import fetch from '../../utils/fetch';

const npmApiCall = name => `https://registry.npmjs.org/${name}`;

/**
 * Checks that current tutorial version is >= latest version
 * via the NPM registry
 * @param  {} {name
 * @param  {} version}
 * @param  {string} current
 * @returns Promise
 */
function isLatestVersion({name, version}): Promise<boolean> {
  return (fetch(npmApiCall(name))
    .then((res: string) => {
      if (res) {
        const latest = JSON.parse(res)['dist-tags'].latest;
        // check that current tutorial version >= latest version
        return isAboveVersion(version, latest);
      }
      return false;
    })
  );
}
export default isLatestVersion;
