import {editorInsert, editorOpen, editorSave, editorSet, editorWriteFileFromContent, editorWriteFileFromFile} from '../../../actions';
import store from '../../../store';
import { getCommand, getOptions, getParams } from './parser';

const Type = {
  OPEN: 'open',
  SET: 'set',
  INSERT: 'insert',
  OPEN_CONSOLE: 'openConsole',
  WRITE: 'write',
  WRITE_FROM_FILE: 'writeFromFile',
};

// parse task string for command/params
export default function handleActionString(
  actionString: string
): Promise<any> {
  return new Promise((resolve, reject) => {
    if (typeof actionString !== 'string') {
      reject(actionString);
    }
    const command: string = getCommand(actionString);
    const params: string[] = getParams(actionString);

    switch (command) {

      case Type.OPEN:
        const obj = getOptions(params[0]);
        const file: string = obj.param;
        const options: Object = obj.options;
        if (params.length === 1) {
          store.dispatch(editorOpen(file, options));
          resolve();
        }
        break;

      case Type.SET:
        if (params.length === 1) {
          const content = params[0];
          setTimeout(() => {
            store.dispatch(editorSet(content));
            resolve();
          });
        }
        break;

      case Type.INSERT:
        if (params.length === 1) {
          const content: string = params[0];
          setTimeout(() => {
            store.dispatch(editorInsert(content));
            resolve();
          });
        }
        break;

      // case Type.OPEN_CONSOLE:
      //   if (params.length === 0) {
      //     setTimeout(function() {
      //       store.dispatch(editorDevTools());
      //       resolve(true);
      //     });
      //   }
      //   break;

      case Type.WRITE:
      case Type.WRITE_FROM_FILE:
        if (params.length === 2) {

          // write
          if (command === 'write') {
            const [to, content] = params;
            store.dispatch(editorWriteFileFromContent(to, content));

          // writeFromFile
          } else if (command === 'writeFromFile') {
            const [to, from] = params;
            store.dispatch(editorWriteFileFromFile(to, from));
          }
          resolve();
        }
        reject('Invalid write params');
        break;

      default:
        console.log('Invalid editor action command');
        reject(false);
    }
  }).catch((err) => {
    console.error('Error handling action string', err);
  });
}

function isValidPath(filePath: string): boolean {
  // should not go above users tutorial directory for security reasons
  return !filePath.match(/^\.\./);
}
