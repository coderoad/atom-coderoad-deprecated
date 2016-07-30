declare namespace Tutorial {
  interface Item {
    name: string;
    version: string;
    latest?: boolean;
  }

  interface Info {
    title: string;
    description?: string;
    keywords?: string[];
    version?: string;
  }

  interface Config {
    language?: string;
    dir: string;
    runner: string;
    runnerOptions?: Object;
    run: any;
    testSuffix?: string;
    issuesPath?: string;
    repo?: string;
    edit?: boolean;
  }

  interface Output {
    info: CR.Info;
    pages: CR.Page[];
  }

  interface PJ {
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

  interface RunnerOptions { }

}
