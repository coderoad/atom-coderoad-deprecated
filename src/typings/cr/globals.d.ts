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
