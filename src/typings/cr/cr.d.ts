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
    tasks?: Task[];
    onPageComplete?: string;
  }
  interface Task {
    description: string;
    tests?: string[];
    hints?: string[];
    actions?: string[];
    completed?: boolean;
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
    hintPosition: number;
    editorActions: string[];
    alert: Alert;
    tutorials: string[];
    runTests: boolean;
    log: Log;
    warning: SetupWarning;
  }

  interface Project {
    title: string;
    description: string;
  }

  interface Position {
    chapter: number;
    page: number;
    completed?: boolean;
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
    completed: boolean;
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
    testRunner?: string;
    tutorial?: string;
    tutorialDir?: string;
    tutorialOptions?: Object;
    issuesPath?: string;
    repo?: string;
    edit?: boolean;
    runner?: any;
    taskPosition?: number;
    win?: boolean;
  }

  interface Config {
    testDir?: string;
    testSuffix?: string;
    testRunner: string;
    edit?: boolean;
    testRunnerOptions?: TestRunnerOptions;
  }

  interface SetupWarning {
    key: string;
    title: string;
    click: () => void;
    text: string;
    verify?: string;
  }

  interface TestRunnerOptions {}

}
