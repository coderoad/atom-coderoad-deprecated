import * as fs from 'fs';
import {fileExists} from '../services/exists';

export function setAtomGlobals() {
  if (atom.project.rootDirectories.length > 0) {
    window.coderoad.dir = atom.project.rootDirectories[0].path;
    if (navigator.appVersion.indexOf('Win') > -1) {
      window.coderoad.win = true;
    }
  } else {
    window.coderoad.dir = null;
  }
}

let getEditorCount = 0;

export function save() {
  const editor = findEditor();
  editor.save();
}

export function findEditor(): AtomCore.IEditor {
  let editor = atom.workspace.getActiveTextEditor();
  const max = 1000;
  if (!editor) {
    getEditorCount += 1;
    setTimeout(function() {
      return findEditor();
    }, 10);
  } else if (getEditorCount > max) {
    console.log('Failed to find active editor');
    return null;
  } else {
    getEditorCount = 0;
    return editor;
  }
}

export function getEditor(): Promise<AtomCore.IEditor> {
  return new Promise((resolve, reject) => {
    resolve(findEditor());
  });
}

/**
 * Actions in Atom Editor
 * @return {[type]} [description]
 */
export function open(filePath: string, options = {}) {
  // delete file first, to avoid bug
  if (fileExists(filePath)) {
    fs.unlink(filePath);
  }
  atom.workspace.open(filePath, options);
  return true;
}

// Set text, removes any previous content in file
export function set(text: string) {
  return getEditor().then((editor: AtomCore.IEditor) => {
    editor.setText(text);
    editor.insertNewline();
    editor.moveToBottom();
    editor.save();
    setCursorPosition(editor);
  });
}

export function insert(text: string, options = {}) {
  options = Object.assign(options, {
    autoIndent: true
  });
  return getEditor().then((editor: AtomCore.IEditor) => {
    editor.moveToBottom();
    editor.insertText(text, options);
    editor.insertNewline();
    editor.moveToBottom();
    editor.save();
    setCursorPosition(editor);
  });
}

function setCursorPosition(editor: AtomCore.IEditor) {
  editor.scan(/::>/g, function(match) {
    let start = match.range.start;
    match.replace('');
    editor.setCursorScreenPosition(start, { autoscroll: true });
  });
}

// export function mkrdir(name: string) {}

// export function select() { }

// export function decorate() { }
