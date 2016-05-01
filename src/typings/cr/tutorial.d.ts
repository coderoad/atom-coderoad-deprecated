declare namespace Tutorial {
  interface Info {
    name: string;
    version: string;
    latest?: boolean;
    description?: string;
  }

  interface Config {
    dir: string;
    runner: string;
    runnerOptions?: Object;
    run: any;
    testSuffix?: string;
    issuesPath?: string;
    repo?: string;
    edit?: boolean;
  }

  interface RunnerOptions { }

}
