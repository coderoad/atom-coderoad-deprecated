declare namespace Test {
  interface Result {
    pass: boolean;
    taskPosition: number;
    msg?: string;
    timedOut?: boolean;
    change: number;
    completed: boolean;
  }

  interface Config {
    dir: string;
    tutorialDir: string;
    taskPosition: number;
  }

  interface Log {
    type: string;
    output: any;
  }
}
