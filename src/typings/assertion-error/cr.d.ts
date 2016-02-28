declare module cr {

  /**
   * Data
   */

  interface Info {
    id?: number;
    title: string;
    description: string;
    completed?: boolean;
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
    // hints?: TaskHint;
  }

  interface TaskHint {
    _id: string;
    info: Info;
    tests?: any;
    revealed: boolean;
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
  }

  interface Project {
    title: string;
    description: string;
    version: string;
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
    position: number;
    file?: string;
    msg?: string;
    desc?: string;
  }

  export type TaskTest = string[];

}
