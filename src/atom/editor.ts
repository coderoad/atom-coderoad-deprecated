import * as fs from 'fs';
import {fileExists} from '../services/exists';

export function setAtomGlobals() {
  if (atom.project.rootDirectories.length > 0) {
    window.coderoad.dir = atom.project.rootDirectories[0].path;
  } else {
    window.coderoad.dir = null;
  }
}

let getEditorCount = 0;

export function save() {
  const editor = findEditor();
  console.log(editor);
  editor.save();
}

export function findEditor() {
  let editor = atom.workspace.getActiveTextEditor();
  if (!editor) {
    getEditorCount += 1;
    setTimeout(function() {
      return findEditor();
    }, 10);
  } else if (getEditorCount > 1000) {
    console.log('Failed to find active editor');
    return undefined;
  } else {
    getEditorCount = 0;
    return editor;
  }
}

export function getEditor() {
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
  });
}

// export function mkrdir(name: string) {}

// export function select() { }

// export function decorate() { }

export function closeAllPanels() {
  var editors: AtomCore.IEditor[] = atom.workspace.getTextEditors();
  editors.forEach((editor: AtomCore.IEditor) => {
    // if (editor !== activeEditor) {
    editor.destroy();
    //  }
  });
}

export function quit() {
  // TODO: quit without destroying ALL subscriptions
}

export function openFolder() {
  atom.open();
}
