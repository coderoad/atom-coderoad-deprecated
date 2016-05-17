import ParseParams from './parse-params';

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
  let parser = new ParseParams();
  let command = getCommand(actionString);
  let params = actionString.substring(command.length + 1, actionString.length - 1); // trim brackets
  if (!params.length) {
    console.error('Error loading editor action params ', actionString);
    return null;
  }
  let paramsList: string[] = parser.getParams(params);
  return paramsList;
}

function createObjectFromKeyValString(text: string): Object {
  let keyValList: string[] = text.split(/[:,]/);
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
    param,
  };
}
