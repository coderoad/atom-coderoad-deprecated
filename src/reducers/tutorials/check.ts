import {join} from 'path';
import {readFileSync} from 'fs';
import {fileExists} from '../../services/exists';
import {isTutorial, tutorialError} from './is-tutorial';
import store from '../../store';
import {canUpdateTutorial} from './update';

export function searchForTutorials(deps: Object): Tutorial.Info[] {
  if (!!deps && Object.keys(deps).length > 0) {
    const dir = store.getState().dir;
    return (Object.keys(deps)
      .filter((name: string) => isTutorial(name))
      .map(function(name: string) {
        const pathToTutorialPackageJson = join(
          dir, 'node_modules', name, 'package.json'
        );

        // no package.json
        if (!fileExists(pathToTutorialPackageJson)) {
          console.log(`Error with ${name}: no package.json file found. ${tutorialError}`);
          return {
            name,
            version: 'NOT INSTALLED'
          };
        }

        let tutorialPackageJson = JSON.parse(readFileSync(pathToTutorialPackageJson, 'utf8'));
        const version = tutorialPackageJson.version;

        return {
          name,
          version,
          latest: !canUpdateTutorial(name, version)
        };
      }));
  } else {
    return [];
  }
}
