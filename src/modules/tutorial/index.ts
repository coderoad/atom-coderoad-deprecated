import { join } from 'path';

import { TUTORIAL_SET } from './types';
import { tutorialConfig } from './utils/config';

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
      let {info, pages, final} = require(coderoadJsonPath);

      // return tutorial (info, pages) & tutorial package.json
      return {
        name: packageJson.name,
        version,
        info,
        pages,
        packageJson,
        config,
        final,
      };

    default:
      return t;
  }
}
