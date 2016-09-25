import {unlink} from 'fs';

import {getEditor} from './editor';
import fileExists from 'node-file-exists';

/**
 * Open a new folder in atom
 * @returns void
 */
export function openFolder(): void {
  atom.open();
}

/**
 * Saves the current editor
 * @returns void
 */
export function save(): void {
  getEditor().then(editor => editor.save());
}

/**
 * Opens a file
 * https://atom.io/docs/api/v1.10.2/Workspace#instance-open
 * @param  {string} file file name
 * @param  {} options={} file open options
 * @returns Promise
 */
export function open(file: string, options = {}): Promise<any> {
  return new Promise((resolve, reject) => {
    atom.workspace.open(file, options);
    // resolve when file opens
    // https://atom.io/docs/api/v1.10.2/Workspace#instance-onDidOpen
    atom.workspace.onDidOpen(() => resolve());
  });
}

/**
 * Scroll to cursor position
 * @param  {string} content text editor content
 * @returns Promise
 */
export function scroll(content: string): any {
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
