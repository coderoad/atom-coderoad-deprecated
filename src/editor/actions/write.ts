import {getEditor} from './editor';

/**
 * add text to the active editor
 * @param  {'set'|'insert'} action
 * @param  {string} text
 * @param  {} options={}
 * @result Promise
 */
function write(action: 'set' | 'insert', text: string, options = {}): Promise<any> {
  return getEditor().then((editor: AtomCore.IEditor) => {
    editor.moveToBottom();
    editor[`${action}Text`](text, options);
    editor.insertNewline();
    editor.moveToBottom();
    setCursorPosition(editor);
    editor.save();
  });
}

/**
 * set text
 * https://atom.io/docs/api/v1.10.2/TextEditor#instance-setText
 * @param  {string} text
 */
export function set(text: string) {
  return write('set', text);
}

/**
 * insert text
 * https://atom.io/docs/api/v1.10.2/TextEditor#instance-insertText
 * @param  {string} text
 * @param  {} options={}
 */
export function insert(text: string, options = {}) {
  return write('insert', text, options);
}

const cursor: RegExp = /::>/g;

/**
 * replace ::> with cursor position
 * @param  {AtomCore.IEditor} editor
 */
function setCursorPosition(editor: AtomCore.IEditor) {
  return editor.scan(cursor, (scanned) => {
    editor.setCursorScreenPosition(scanned.range.start);
    scanned.replace('');
    scanned.stop();
  });
}
