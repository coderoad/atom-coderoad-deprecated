declare namespace CR {

  interface Info {
    title: string;
    description: string;
    completed: boolean;
  }

  interface Chapter extends Info {
    pages: Page[];
  }
  interface Page extends Info {
    explanation?: string;
    tasks?: Task[];
  }
  interface Task extends Info {
    tests?: string[];
    hints?: string[];
    actions?: string[];
  }

  /**
   * Store
   */

  interface State {
    route: string;
    project: Project;
    position: Position;
    page: Page;
    progress: Progress;
    tasks: Task[];
    taskTests: string[];
    taskPosition: number;
    editorActions: string[];
    alert: Alert;
    tutorials: string[];
    runTests: boolean;
  }

  interface Project {
    title: string;
    description: string;
  }

  interface Position {
    chapter: number;
    page: number;
  }

  interface Progress {
    completed: boolean;
    chapters: {
      title: string;
      description: string;
      completed: boolean;
      pages: {
        title: string;
        description: string;
        completed: boolean;
      }[]
    }[];
  }

  interface TestResult {
    pass: boolean;
    taskPosition: number;
    msg?: string;
    timedOut?: boolean;
    change: number;
  }

  type TaskTest = string[];

  interface Alert {
    message: string;
    action: string;
    open?: boolean;
    duration?: number;
  }

  interface Action {
    type: string;
    payload?;
    error?: boolean;
    meta?;
  }

  interface Log {
    open: boolean;
    message: string;
  }

  interface Coderoad {
    dir: string;
    testRunner: string;
    tutorial: string;
    tutorialDir: string;
    tutorialOptions: Object;
    issuesPath: string;
    repo: string;
    edit: boolean;
    runner: any;
  }

  interface Config {
    testDir?: string;
    testSuffix?: string;
    testRunner: string;
    edit?: boolean;
    testRunnerOptions?: Object;
  }

}
