import * as path from 'path';
import {setGlobals} from './setGlobals';
import * as Action from '../actions/actions';
import {store} from '../_base';
const _ = require('lodash');

function configTestString(config: CR.Config, packageName: string, test: string): string {
  if (config.testDir) {
    test = path.join(window.coderoad.dir, 'node_modules', packageName, config.testDir, test);
  } else {
    test = path.join(window.coderoad.dir, 'node_modules', packageName, test);
  }
  if (config.testSuffix) {
    test += config.testSuffix;
  }
  return test;
}

class PackageService {
  data: { project: any, chapters: any[] };
  config: any;
  packageName: string;
  constructor() {
    this.packageName = '';
    this.data = {
      project: {},
      chapters: []
    };
    this.config = {};
  }
  selectPackage(packageName: string) {
    let packagePath = path.join(window.coderoad.dir, 'node_modules', packageName);
    this.config = require(path.join(packagePath, 'package.json'));
    setGlobals(this.config);
    this.data = require(path.join(packagePath, this.config.main));
    this.packageName = packageName;
  }
  page({chapter, page}: CR.Position): CR.Page {
    return _.cloneDeep(this.data.chapters[chapter].pages[page]);
  }
  getConfig() {
    return this.config;
  }
  configTaskTests(tasks: CR.Task[]): CR.Task[] {
    let config = this.config.config;
    return !tasks ? [] : tasks.map((task: CR.Task) => {
      if (task.tests) {
        task.tests = task.tests.map((tests: string) => {
          if (_.isString(tests)) {
            return [].concat(configTestString(config, this.packageName, tests));
          } else {
            console.error('Invalid task test', tests);
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
      store.dispatch(Action.projectComplete());
      return {chapter, page};
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
