interface Window {
  coderoad: CR.Coderoad;
}

interface PackageJson {
  name: string;
  main: string;
  version: string;
  dependencies?: Object;
  devDependencies?: Object;
  config: CR.Config;
  bugs?: {
    url: string;
  };
  repo?: {
    url: string;
  };
}

interface ObjectConstructor {
  assign(target: any, ...sources: any[]): any;
  values(obj: Object): any[];
}

interface IntrinsicAttributes {
  index: number;
  style: Object;
  className: string;
  targetOrigin: string;
  anchorOrigin: string;
  onClick: () => any;
  primaryText: string;
  primaryTogglesNestedList: any;
}

type fileType = 'js'|'jsx'|'ts'|'py';

interface Process {
  resourcesPath: string;
}
