import {unlink} from 'fs';
import {fileExists} from '../../services/exists';
import {getEditor} from './editor';

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
    resolve(atom.workspace.open(filePath, options));
  });
}
