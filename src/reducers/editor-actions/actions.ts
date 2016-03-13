import * as Editor from '../../atom/editor';
import {getCommand, getParams, getOptions} from './action-helpers';

const Type = {
  open: 'open',
  set: 'set',
  insert: 'insert',
  openConsole: 'openConsole'
};

export function editorActions(actionString: string): Promise<void> {
  return new Promise((resolve, reject) => {
    let command: string = getCommand(actionString);
    let params: string[] = getParams(actionString);
    switch (command) {
      case Type.open:
        let obj = getOptions(params[0]);
        let file = obj.param;
        let options = obj.options;
        if (params.length === 1) {
          Editor.open(file, options);
          setTimeout(function() {
            resolve();
          }, 100);
        }
        break;
      case Type.set:
        if (params.length === 1) {
          let content = params[0];

          setTimeout(function() {
            Editor.set(content);
            resolve(true);
          });
        }
        break;
      case Type.insert:
        if (params.length === 1) {
          // let obj = getOptions(params[0]);
          let content: string = params[0];
          // let options: object = obj.options;
          setTimeout(function() {
            Editor.insert(content, {});
            resolve(true);
          });
        }
        break;
      case Type.openConsole:
        if (params.length === 0) {
          setTimeout(function() {
            Editor.openDevTools();
            resolve(true);
          });
        }
        break;
      default:
        console.log('Invalid editor action command');
        reject(false);
    }
  }).catch((err) => {
    console.error('Error with editor', err);
  });
}
