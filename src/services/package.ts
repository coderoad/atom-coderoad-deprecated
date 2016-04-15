import {join} from 'path';
import {setGlobals, projectComplete} from '../actions/actions';
import {store} from '../store/store';
const {cloneDeep, isString} = require('lodash');

function configTestString(config: CR.Config,
  packageName: string, test: string): string {
  if (window.coderoad.win) {
    test = test.split('/').join('\\');
  }
  if (config.testDir) {
    test = join(window.coderoad.dir, 'node_modules', packageName, config.testDir, test);
  } else {
    test = join(window.coderoad.dir, 'node_modules', packageName, test);
  }
  if (config.testSuffix) {
    test += config.testSuffix;
  }
  return test;
}

class PackageService {
  data: { project: any, chapters: any[] };
  packageJson: PackageJson;
  packageName: string;
  constructor() {
    this.packageName = '';
    this.data = {
      project: {},
      chapters: []
    };
    this.packageJson = null;
  }
  selectPackage(packageName: string): void {
    let packagePath = join(window.coderoad.dir, 'node_modules', packageName);
    this.packageJson = require(join(packagePath, 'package.json'));
    store.dispatch(setGlobals(this.packageJson));
    this.data = require(join(packagePath, this.packageJson.main));
    this.packageName = packageName;
  }
  page({chapter, page}: CR.Position): CR.Page {
    return cloneDeep(this.data.chapters[chapter].pages[page]);
  }
  getPackage(): PackageJson {
    return this.packageJson;
  }
  configTaskTests(tasks: CR.Task[]): CR.Task[] {
    let config: CR.Config = this.packageJson.config;
    return !tasks ? [] : tasks.map((task: CR.Task) => {
      if (task.tests) {
        task.tests = task.tests.map((test: string) => {
          // add unique string to tests
          if (isString(test)) {
            return configTestString(config, this.packageName, test);
          } else {
            console.error('Invalid task test', test);
          }
        });
      }
      return task;
    });
  }
  getTasks(position: CR.Position): CR.Task[] {
    let tasks: CR.Task[] = this.page(position).tasks || [];
    tasks = this.configTaskTests(tasks);
    return tasks;
  }
  getPage(position: CR.Position): CR.Page {
    const {title, description, onPageComplete, completed} = this.page(position);
    return {
      title, description, onPageComplete, completed: completed || false
    };
  }
  getSavedPosition(): CR.Position {
    // TODO: resolve to get saved position
    return { chapter: 0, page: 0 };
  }
  getSavedRoute(): string {
    // TODO: resolve to get saved route
    return 'progress';
  }
  getNextPosition({chapter, page}: CR.Position): CR.Position {
    const chapters = this.data.chapters;
    if (page < chapters[chapter].pages.length - 1) {
      return { chapter, page: page + 1 };
    } else if (chapter < chapters.length - 1) {
      return { chapter: chapter + 1, page: 0 };
    } else {
      store.dispatch(projectComplete());
      return {chapter, page, completed: true};
    }
  }
  getProject(): CR.Project {
    return this.data.project;
  }
  getProgress(): CR.Progress {
    const chapters = this.data.chapters;
    return {
      completed: false,
      chapters: !chapters ? [] : chapters.map(({title, description, completed, pages}) => {
        return {
          title, description, completed: completed || false,
          pages: !pages ? [] : pages.map((page: CR.Page) => {
            return {
              title: page.title,
              description: page.description,
              completed: page.completed || false
            };
          })
        };
      })
    };
  }
}
export default new PackageService();
