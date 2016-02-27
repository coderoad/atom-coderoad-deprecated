import {store} from '../_base';
import * as Action from '../actions/actions';

export function setAtomGlobals() {
  if (atom.project.rootDirectories.length > 0) {
    global.coderoad.dir = atom.project.rootDirectories[0].path;
  } else {
    let message = 'Create a new Atom project. In Atom: File > Open > any folder';
    store.dispatch(Action.toggleAlert({ message, action: 'tip', duration: 6000 }));
    console.log(message);
    global.coderoad.dir = false;
  }
}

let getEditorCount = 0;

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

// export function packageDir(packageName: string) {
//     global.coderoad.tutorialDir = path.join(global.coderoad.dir, 'node_modules', packageName);
//     return path.join(global.coderoad.dir, 'node_modules', packageName);
// }

/**
 * Actions in Atom Editor
 * @return {[type]} [description]
 */
export function open(filePath: string, options?: object) {
  atom.workspace.open(filePath, options);
  return true;
}

// Set text, removes any previous content in file
export function set(text: string) {
  getEditor().then((editor) => {
    editor.setText(text);
    editor.insertNewline();
    editor.moveToBottom();
    editor.save();
  });
}

export function insert(text: string, options?: object) {
  options = Object.assign(options, {
    autoIndent: true
  });
  getEditor().then((editor) => {
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
  var editors = atom.workspace.getTextEditors();
  editors.forEach((editor) => {
    // if (editor !== activeEditor) {
    editor.destroy();
    //  }
  });
}

export function quit() {
  // TODO: quit without destroying ALL subscriptions
}
