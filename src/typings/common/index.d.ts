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
