import {join} from 'path';
import {tutorialConfig} from './utils/config';
import {TUTORIAL_SET} from './types';
import configPaths from './utils/config-paths';

const _tutorial: CR.Tutorial = {
  title: null,
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
      const {title, dir} = action.payload;
      const packagePath: string = join(dir, 'node_modules', title);
      const packageJson: PackageJson = require(join(packagePath, 'package.json'));
      const config: Tutorial.Config = tutorialConfig(packageJson, dir);
      let {info, pages} = require(join(packagePath, packageJson.main));
      // configure test paths to absolute paths
      pages = configPaths(dir, title, config, pages || []);
      return {
        title: packageJson.name,
        info,
        pages,
        packageJson,
        config,
      };

    default:
      return tutorial;
  }
}
