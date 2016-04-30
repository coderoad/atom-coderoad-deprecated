import {getEditor} from './editor';

function write(action: 'set' | 'insert', text: string, options = {}) {
  return getEditor().then((editor: AtomCore.IEditor) => {
    editor.moveToBottom();
    editor[`${action}Text`](text, options);
    editor.insertNewline();
    editor.moveToBottom();
    setCursorPosition(editor);
    editor.save();
  });
}

// Set text, removes any previous content in file
export function set(text: string) {
  return write('set', text);
}

export function insert(text: string, options = {}) {
  return write('insert', text, options);
}

const cursor: RegExp = /::>/g;
function setCursorPosition(editor: AtomCore.IEditor) {
  return editor.scan(cursor, (scanned) => {
    editor.setCursorScreenPosition(scanned.range.start);
    scanned.replace('');
    scanned.stop();
  });
}
