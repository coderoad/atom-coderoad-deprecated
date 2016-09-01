declare namespace Tutorial {
  export interface Item {
    name: string;
    version: string;
    latest?: boolean;
  }

  export interface Info {
    title: string;
    description?: string;
    keywords?: string[];
    version?: string;
  }

  export interface Config {
    language?: string;
    dir: string;
    runner: string;
    runnerOptions?: Object;
    run: any;
    load: any;
    testSuffix?: string;
    issuesPath?: string;
    repo?: string;
    edit?: boolean;
  }

  export interface Output {
    info: CR.Info;
    pages: CR.Page[];
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
    contributers?: string[];
  }

  export interface RunnerOptions { }

}
