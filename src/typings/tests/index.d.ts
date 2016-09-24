declare namespace Test {
  export interface Result {
    pass: boolean;
    taskPosition: number;
    msg?: string;
    timedOut?: boolean;
    change: number;
    completed: boolean;
    error: boolean;
  }

  export interface Config {
    dir: string;
    tutorialDir: string;
    taskPosition: number;
  }

  export interface Log {
    type: string;
    output: any;
  }
}
