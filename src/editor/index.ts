import * as action from './actions';
import { directory } from './directory';
import { getGrammar, tokenizeLines } from './grammar';
import {
  editorIssuesPath, editorMinVersion, editorVersionFailMessage,
  editorVersionLabel, minVersion, name
} from './setup';
import Subscriptions from './subscriptions';
import {addRightPanel} from './ui';

const editor = {
  action,
  directory,
  name,
  getGrammar,
  tokenizeLines,
  editorMinVersion,
  editorVersionLabel,
  editorVersionFailMessage,
  editorIssuesPath,
  minVersion,
  Subscriptions,
  addRightPanel,
};

export default editor;
