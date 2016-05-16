declare namespace CR {

  interface Info {
    title: string;
    description: string;
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

  interface State {
    dir: string;
    route: string;
    tutorialInfo: Tutorial.Info;
    windowToggle: boolean;
    pagePosition: PagePosition;
    package: PackageJson;
    page: Page;
    progress: Progress;
    tasks: Task[];
    taskTests: string[];
    taskPosition: number;
    hintPosition: number;
    taskActions: string[];
    alert: Alert;
    tutorial: Tutorial;
    tutorials: Tutorial.Info[];
    testRun: boolean;
    checks: Checks;
  }

  interface Tutorial {
    name: string;
    info: Tutorial.Info;
    pages: CR.Page[];
    packageJson: PackageJson;
    config: Tutorial.Config;
  }

  type PagePosition = number;

  interface Progress {
    completed: boolean;
    pages: boolean[];
  }

  type TaskTest = string[];

  interface Alert {
    message: string;
    action: string;
    open?: boolean;
    duration?: number;
    color: string;
  }

  interface Checks {
    passed?: boolean;
    system: {
      passed?: boolean;
      node: boolean;
      npm: boolean;
      xcode: boolean;
    };
    setup: {
      passed?: boolean;
      hasDir: boolean;
      hasPackageJson: boolean;
      hasTutorial: boolean;
    };
  }

}
