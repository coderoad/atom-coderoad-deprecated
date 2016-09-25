import { directory } from './directory';
import { getGrammar, tokenizeLines } from './grammar';
import {
  editorIssuesPath, editorMinVersion, editorName,
  editorVersionFailMessage, editorVersionLabel, minVersion
} from './setup';
import Subscriptions from './subscriptions';
import {addRightPanel} from './ui';

const editor = {
  directory,
  getGrammar,
  tokenizeLines,
  editorName,
  editorMinVersion,
  editorVersionLabel,
  editorVersionFailMessage,
  editorIssuesPath,
  minVersion,
  Subscriptions,
  addRightPanel
}

export default editor;
