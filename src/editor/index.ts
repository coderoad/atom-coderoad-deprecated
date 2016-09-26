import * as action from './actions';
import { directory } from './utils/directory';
import { getFromScope, tokenizeLines } from './utils/grammar';
import {
  isAboveMinVersion, issuesPath, minVersion, name,
  versionFailMessage, versionLabel
} from './utils/setup';
import Subscriptions from './utils/subscriptions';
import {addRightPanel} from './utils/ui';

const editor = {
  action,
  directory,
  name,
  grammar: {
    getFromScope,
    tokenizeLines,
  },
  version: {
    minVersion,
    label: versionLabel,
    failMessage: versionFailMessage,
    isAboveMinVersion,
  },
  issuesPath,
  Subscriptions,
  addRightPanel,
};

export default editor;
