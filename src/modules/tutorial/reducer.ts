import {join} from 'path';

import {TUTORIAL_SET} from './types';
import {tutorialConfig} from './utils/config';
import configPaths from './utils/config-paths';

const _tutorial: CR.Tutorial = {
  name: null,
  info: null,
  pages: [],
  packageJson: null,
  config: null,
};

const configured = [];

export default function tutorialReducer(
  t = _tutorial, action: Action
): CR.Tutorial {
  switch (action.type) {

    case TUTORIAL_SET:
      const {name, dir} = action.payload;

      // get tutorial package.json
      const packagePath: string = join(dir, 'node_modules', name);
      const packageJson: PackageJson = require(join(packagePath, 'package.json'));

      const config: Tutorial.Config = tutorialConfig(packageJson, dir);
      const coderoadJsonPath = join(packagePath, packageJson.main);
      let {info, pages} = require(coderoadJsonPath);

      // configure test paths to absolute paths. Only once.
      if (configured.indexOf(name) === -1) {
        pages = configPaths(dir, name, config, pages || []);
      }
      configured.push(name);

      // return tutorial (info, pages) & tutorial package.json
      return {
        name: packageJson.name,
        info,
        pages,
        packageJson,
        config,
      };

    default:
      return t;
  }
}
