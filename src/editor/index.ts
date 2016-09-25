import * as action from './actions';
import { directory } from './directory';
import { getGrammar, tokenizeLines } from './grammar';
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
  getGrammar,
  tokenizeLines,
  isAboveMinVersion,
  version: {
    label: versionLabel,
    failMessage: versionFailMessage, 
  },
  issuesPath,
  minVersion,
  Subscriptions,
  addRightPanel,
};

export default editor;
