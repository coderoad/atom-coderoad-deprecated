declare namespace Tutorial {
  export interface Item {
    name: string;
    version: string;
    isLatest?: boolean;
  }

  export interface Info {
    name: string;
    description?: string;
    keywords?: string[];
    version?: string;
    latest?: string;
    isLatest: boolean;
  }

  export interface Config {
    dir: string;
    language?: string;
    runner: string;
    runnerOptions?: Object;
    run: (options) => any;
    load: (options) => any;
    testSuffix?: string|null;
    issuesPath?: string|null;
    repo?: string|null;
    edit?: boolean;
  }

  export interface Output {
    info: CR.Info;
    pages: CR.Page[];
    final?: CR.Final;
  }

  export interface PJ {
    name: string;
    repository?: Object;
    bugs?: Object;
    config: {
      language: string;
      runner: string;
      runnerOptions: RunnerOptions;
    };
    engines: Object;
    keywords: string[];
    files: string[];
    main: string;
    description: string;
    version: string;
    author?: string;
    authors?: string;
    dependencies?: Object;
    devDependencies?: Object;
    peerDependencies?: Object;
    license?: string;
    contributors?: string[];
  }

  export interface RunnerOptions { }

}
