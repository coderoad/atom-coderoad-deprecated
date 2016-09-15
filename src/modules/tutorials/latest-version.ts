import fetch from '../../utils/fetch';

const apiCall = name => `https://registry.npmjs.org/${name}`;

function getLatestVersion(name: string, current: string): Promise<boolean> {
  return fetch(apiCall(name))
    .then((res: string) => {
      if (res) {
        JSON.parse(res)['dist-tags'].latest;
        return true;
      }
      return false;
    });
}
