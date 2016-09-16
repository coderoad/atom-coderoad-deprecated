// import {tutorialUpdate} from './utils/update';
import {TUTORIALS_FIND, TUTORIALS_UPDATE, TUTORIAL_VERSION} from './types';
import isLatestVersion from './utils/latestVersion';
import {tutorials} from 'coderoad-cli';

/**
 * tutorial reducer
 * loads list of installed tutorials in 
 * package.json && node_modules
 * 
 * tutorials must include a package.json file
 * with a "main" key pointing at the "coderoad.json" file
 * 
 * @param  {} t=[]
 * @param  {Action} action
 * @returns Tutorial
 */
export default function tutorialsReducer(
  t = [], action: Action
): Tutorial.Info[] {
  switch (action.type) {

    // case TUTORIAL_UPDATE:
    //   tutorialUpdate(action.payload.title);
    /* falls through */

    case TUTORIALS_FIND:
      const tuts = tutorials({ dir: action.payload.dir });
      return tuts ? tuts : t;

    case TUTORIALS_UPDATE:
      return t.map((tutorial: Tutorial.Info) => {
        const { name, version } = tutorial;
        isLatestVersion({name, version});
        return tutorial;
      });

    case TUTORIAL_VERSION:
      const { name, latest } = action.payload;
      return t.map((tutorial: Tutorial.Info) => {
        if (tutorial.name === name) {
          tutorial.isLatest = false;
          tutorial.latest = latest;
        }
        return tutorial;
      });

    default:
      return t;
  }
}
