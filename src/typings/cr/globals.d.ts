interface Window {
  coderoad: CR.Coderoad;
}

interface PackageJson {
  name: string;
  version: string;
  dependencies: Object;
  devDependencies: Object;
  config: CR.Config;
}

interface ObjectConstructor {
  assign(target: any, ...sources: any[]): any;
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
