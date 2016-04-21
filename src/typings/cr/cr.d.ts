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

interface State {
  dir: string;
  route: string;
  tutorialInfo: Tutorial.Info;
  position: Position;
  package: PackageJson;
  page: Page;
  progress: Progress;
  tasks: Task[];
  taskTests: string[];
  taskPosition: number;
  hintPosition: number;
  editorActions: string[];
  alert: Alert;
  tutorials: Tutorial[];
  testRun: boolean;
  checks: Checks;
}

interface Tutorial {
  name: string;
  info: Tutorial.Info;
  chapters: CR.Chapter[];
  packageJson: PackageJson;
  config: Tutorial.Config;
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

type TaskTest = string[];

interface Alert {
  message: string;
  action: string;
  open?: boolean;
  duration?: number;
}

interface Checks {
  passed?: boolean;
  system: {
    passed?: boolean;
    node: boolean;
    npm: boolean;
  };
  setup: {
    passed?: boolean;
    dir: boolean;
    packageJson: boolean;
    tutorial: boolean;
  };
}

}
