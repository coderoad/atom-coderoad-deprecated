import {unlink} from 'fs';

import {getEditor} from './editor';
import fileExists from 'node-file-exists';

export function openFolder(): void {
  atom.open();
}

export function save() {
  getEditor().then(editor => editor.save());
}

export function open(file: string, options = {}): Promise<any> {
  return new Promise((resolve, reject) => {
    // delete file first, to avoid bug
    // if (fileExists(file)) {
    //   unlink(file);
    // }
    // delay necessary since opening a file is slow
    const openTimeout = 300;
    atom.workspace.open(file, options);
    setTimeout(() => resolve(), openTimeout);
  });
}

export function scroll(content: string): Promise<void> {
  return getEditor().then((editor: AtomCore.IEditor) => {
    const regex = new RegExp(
      content.replace(/[\\\.\+\*\?\^\$\[\]\(\)\{\}\/\'\#\:\!\=\|]/ig, '\\$&'), 'gm'
    );
    return editor.scan(regex, (scanned) => {
      const {row, column} = scanned.range.start;
      editor.setCursorScreenPosition([row + 1, column]);
      scanned.stop();
    });
  });
}
