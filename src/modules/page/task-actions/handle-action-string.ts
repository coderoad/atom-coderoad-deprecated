import {editorInsert, editorOpen, editorSave, editorSet} from '../../../actions';
import store from '../../../store';
import {getCommand, getOptions, getParams} from './parser';

const Type = {
  OPEN: 'open',
  SET: 'set',
  INSERT: 'insert',
  OPEN_CONSOLE: 'openConsole',
};

// parse task string for command/params
export default function handleActionString(
  actionString: string
): Promise<void> {
  return new Promise((resolve, reject) => {
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

      default:
        console.log('Invalid editor action command');
        reject(false);
    }
  }).catch((err) => {
    console.error('Error with editor', err);
  });
}
