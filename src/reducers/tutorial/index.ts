import {TUTORIAL_SET} from '../../actions/_types';
import {join} from 'path';
import {tutorialConfig} from './tutorial-config';
import store from '../../store';

const _tutorial: CR.Tutorial = {
  name: null,
  info: null,
  pages: [],
  packageJson: null,
  config: null,
};

export default function tutorialReducer(
  tutorial = _tutorial, action: Action
): CR.Tutorial {
  switch (action.type) {
    case TUTORIAL_SET:
      const name: string = action.payload.name;
      const dir = store.getState().dir;
      const packagePath: string = join(dir, 'node_modules', name);
      const packageJson: PackageJson = require(join(packagePath, 'package.json'));
      const config: Tutorial.Config = tutorialConfig(packageJson);
      const {info, pages} = require(join(packagePath, packageJson.main));
      return {
        name: packageJson.name,
        info,
        pages,
        packageJson,
        config,
      };
    default:
      return tutorial;
  }
}
