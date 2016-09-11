import { join } from 'path';

import { TUTORIAL_SET } from './types';
import { tutorialConfig } from './utils/config';
import configPaths from './utils/config-paths';

export const _tutorial: CR.Tutorial = {
  name: 'default',
  version: '0.1.0',
  info: {
    title: 'error',
    description: 'Something went wrong. Tutorial not loaded.'
  },
  pages: [],
  packageJson: null,
  config: null,
};

const configured = new Set();

export default function tutorialReducer(
  t = _tutorial, action: Action
): CR.Tutorial {
  switch (action.type) {

    case TUTORIAL_SET:
      const {name, dir, version} = action.payload;

      // get tutorial package.json
      const packagePath: string = join(dir, 'node_modules', name);
      const packageJson: PackageJson = require(join(packagePath, 'package.json'));

      const config: Tutorial.Config = tutorialConfig(packageJson, dir);
      const coderoadJsonPath = join(packagePath, packageJson.main);
      let {info, pages} = require(coderoadJsonPath);

      // configure test paths to absolute paths. Only once.
      if (configured.has(name)) {
        pages = configPaths(dir, name, config, pages || []);
      } else {
        configured.add(name);
      }

      // return tutorial (info, pages) & tutorial package.json
      return {
        name: packageJson.name,
        version,
        info,
        pages,
        packageJson,
        config,
      };

    default:
      return t;
  }
}
