// import {tutorialUpdate} from './utils/update';
import {tutorials} from 'coderoad-cli';
import {TUTORIALS_FIND} from './types';

export default function tutorials(
  t = [], action: Action
): Tutorial.Info[] {
  switch (action.type) {

    // case TUTORIAL_UPDATE:
    //   tutorialUpdate(action.payload.name);
    /* falls through */

    case TUTORIALS_FIND:
      const {dir} = action.payload;
      const tuts = tutorials(dir);
      return tuts ? tuts : t;

    default:
      return t;
  }
}
