import {open, set, insert} from '../../atom/editor';
import {openDevTools} from '../../atom/actions';
import {getCommand, getParams, getOptions} from './action-helpers';

const Type = {
  OPEN: 'open',
  SET: 'set',
  INSERT: 'insert',
  OPEN_CONSOLE: 'openConsole',
};

export function editorActions(actionString: string): Promise<void> {
  return new Promise((resolve, reject) => {
    let command: string = getCommand(actionString);
    let params: string[] = getParams(actionString);
    switch (command) {
      case Type.OPEN:
        let obj = getOptions(params[0]);
        let file = obj.param;
        let options = obj.options;
        if (params.length === 1) {
          open(file, options);
          setTimeout(function() {
            resolve();
          }, 100);
        }
        break;
      case Type.SET:
        if (params.length === 1) {
          let content = params[0];

          setTimeout(function() {
            set(content);
            resolve(true);
          });
        }
        break;
      case Type.INSERT:
        if (params.length === 1) {
          // let obj = getOptions(params[0]);
          let content: string = params[0];
          // let options: object = obj.options;
          setTimeout(function() {
            insert(content, {});
            resolve(true);
          });
        }
        break;
      case Type.OPEN_CONSOLE:
        if (params.length === 0) {
          setTimeout(function() {
            openDevTools();
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
