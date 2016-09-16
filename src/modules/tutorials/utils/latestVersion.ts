import store from '../../../store';
import {isAboveVersion} from '../../../utils/compareVersions';
import {json, status} from '../../../utils/fetch';
import {tutorialVersion} from '../actions';

const npmApiCall = name => `https://registry.npmjs.org/${name}`;

function getLatest(version, data: Object): boolean {
  return data['dist-tags'].latest;
}

/**
 * Checks that current tutorial version is >= latest version
 * via the NPM registry
 * 
 * triggers an update by dispatching "tutorialVersion"
 * 
 * @param  {} {name
 * @param  {} version}
 * @param  {string} current
 * @returns Promise
 */
function isLatestVersion({name, version}): void {
  window.fetch(npmApiCall(name))
    .then(status)
    .then(json)
    .then(getLatest.bind(this, version))
    .then(latest => {
      if (!isAboveVersion(version, latest)) {
        store.dispatch(tutorialVersion({name, latest}));
      }
    })
    .catch((err) => console.log(`Error fetching tutorial "${name}": ${err}`));
}

export default isLatestVersion;
