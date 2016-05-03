import {open, set, insert, openDevTools} from '../../atom/editor';
import {getCommand, getParams, getOptions} from './parser';

const Type = {
  OPEN: 'open',
  SET: 'set',
  INSERT: 'insert',
  OPEN_CONSOLE: 'openConsole',
};

export default function editorActionReducer(
  actionString: string
): Promise<void> {
  return new Promise((resolve, reject) => {
    const command: string = getCommand(actionString);
    const params: string[] = getParams(actionString);
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
          const content = params[0];
          setTimeout(function() {
            set(content);
            resolve(true);
          });
        }
        break;

      case Type.INSERT:
        if (params.length === 1) {
          const content: string = params[0];
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
