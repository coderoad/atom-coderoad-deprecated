import {unlink} from 'fs';
import {fileExists} from '../../../services/exists';
import {getEditor} from './editor';

// delay necessary since opening a file is slow
const openTimeout = 200;

export function openFolder(): void {
  atom.open();
}

export function save() {
  getEditor().then(editor => editor.save());
}

export function open(filePath: string, options = {}): Promise<any> {
  return new Promise((resolve, reject) => {
    // delete file first, to avoid bug
    if (fileExists(filePath)) {
      unlink(filePath);
    }
    atom.workspace.open(filePath, options);
    setTimeout(() => {
      resolve();
    }, openTimeout);
  });
}
