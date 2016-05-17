import {unlink} from 'fs';
import fileExists from 'node-file-exists';
import {getEditor} from './editor';

export function openFolder(): void {
  atom.open();
}

export function save() {
  getEditor().then(editor => editor.save());
}

export function open(file: string, options = {}): Promise<any> {
  return new Promise((resolve, reject) => {
    // delete file first, to avoid bug
    if (fileExists(file)) {
      unlink(file);
    }
    // delay necessary since opening a file is slow
    const openTimeout = 200;
    atom.workspace.open(file, options);
    setTimeout(() => resolve(), openTimeout);
  });
}
