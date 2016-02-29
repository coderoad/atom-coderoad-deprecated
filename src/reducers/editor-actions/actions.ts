import * as Editor from '../../atom/editor';
import {parseParams} from './parser';

const EditorAction = {
  open: 'open',
  set: 'set',
  insert: 'insert'
};

export function getCommand(actionString: string): string {
  // content before bracket
  let command = actionString.substring(0, actionString.indexOf('('));
  if (!command.length) {
    console.log('Error loading editor action command ', actionString);
  } else {
    return command;
  }
}


export function getParams(actionString: string): string[] {
  // content in brackets, split by comma
  let command = getCommand(actionString);
  let params = actionString.substring(command.length + 1, actionString.length - 1); // trim brackets
  if (!params.length) {
    console.error('Error loading editor action params ', actionString);
    return null;
  }
  let paramsList:string[] = parseParams.getParams(params);
  return paramsList;
}

function createObjectFromKeyValString(string: string): Object {
  let keyValList: string[] = string.split(/[:,]/);
  let obj = {};
  for (let i = 0; i < keyValList.length; i += 2) {
    let key = keyValList[i].trim();
    let val = keyValList[i + 1].trim();
    if (!val.match(/^["'].+["']$/)) {
      // not a string
      val = JSON.parse(val);
    } else {
      // string, remove extra quotes
      val = val.substring(1, val.length - 1);
    }
    obj[key] = val;
  }
  return obj;
}

export function getOptions(paramString: string): { param: string, options: Object } {
  let hasOptions = paramString.match(/\{(.+)?\}/);
  let options = {};
  let param = paramString;
  if (!!hasOptions) {
    options = createObjectFromKeyValString(hasOptions[1]);
    param = paramString.split(/, ?{/)[0];
  }
  return {
    options,
    param
  };
}

export function editorActions(actionString: string): Promise<void> {
  return new Promise((resolve, reject) => {
    let command: string = getCommand(actionString);
    let params: string[] = getParams(actionString);
    switch (command) {
      case EditorAction.open:
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
      case EditorAction.set:
        if (params.length === 1) {
          let content = params[0];

          setTimeout(function() {
            Editor.set(content);
            resolve(true);
          });
        }
        break;
      case EditorAction.insert:
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
      default:
        console.log('Invalid editor action command');
        reject(false);
    }
  }).catch((err) => {
    console.error('Error with editor', err);
  });
}
