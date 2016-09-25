import * as action from './actions';
import { directory } from './directory';
import { getFromScope, tokenizeLines } from './grammar';
import {
  isAboveMinVersion, issuesPath, minVersion, name,
  versionFailMessage, versionLabel
} from './setup';
import Subscriptions from './subscriptions';
import {addRightPanel} from './ui';

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
