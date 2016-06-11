// import {tutorialUpdate} from './utils/update';
import {tutorials} from 'coderoad-cli';
import {TUTORIALS_FIND} from './types';

export default function tutorialsReducer(
  t = [], action: Action
): Tutorial.Info[] {
  switch (action.type) {

    // case TUTORIAL_UPDATE:
    //   tutorialUpdate(action.payload.title);
    /* falls through */

    case TUTORIALS_FIND:
      const tuts = tutorials(action.payload.dir);
      return tuts ? tuts : t;

    default:
      return t;
  }
}
