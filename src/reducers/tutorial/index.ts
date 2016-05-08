import {TUTORIAL_SET} from '../../actions/_types';
import {join} from 'path';
import {tutorialConfig} from './tutorial-config';

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
      const {name, dir} = action.payload;
      const packagePath: string = join(dir, 'node_modules', name);
      const packageJson: PackageJson = require(join(packagePath, 'package.json'));
      const config: Tutorial.Config = tutorialConfig(packageJson, dir);
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
