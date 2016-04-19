import {TUTORIAL_SET} from '../../actions/_types';
import TutorialPackage from '../../services/tutorial-package';
import {join} from 'path';
import {tutorialConfig} from './tutorial-config';

const _tutorial = {
  info: null,
  chapters: [],
  packageJson: null,
  config: null
};

export default function tutorialReducer(tutorial = _tutorial,
  action: CR.Action): CR.Tutorial {
  switch (action.type) {
    case TUTORIAL_SET:
      const name: string = action.payload.name;
      const packagePath: string = join(window.coderoad.dir, 'node_modules', name);
      const packageJson: PackageJson = require(join(packagePath, 'package.json'));
      const config: CR.Coderoad = tutorialConfig(packageJson);
      const {project, chapters} = require(join(packagePath, packageJson.main));
      return {
        info: project,
        chapters,
        packageJson,
        config
      };
    default:
      return tutorial;
  }
}
