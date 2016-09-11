interface PackageJson {
  name: string;
  main: string;
  version: string;
  dependencies?: Object;
  devDependencies?: Object;
  config: Tutorial.Config;
  bugs?: {
    url: string;
  };
  repo?: {
    url: string;
  };
}
