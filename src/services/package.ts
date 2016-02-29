import * as path from 'path';
import {setGlobals} from './setGlobals';
import * as Action from '../actions/actions';
import {store} from '../_base';
const _ = require('lodash');

function configTestString(config: PackageJson.config, packageName: string, test: string): string {
  if (config.testDir) {
    test = path.join(global.coderoad.dir, 'node_modules', packageName, config.testDir, test);
  } else {
    test = path.join(global.coderoad.dir, 'node_modules', packageName, test);
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
    let packagePath = path.join(global.coderoad.dir, 'node_modules', packageName);
    this.config = require(path.join(packagePath, 'package.json'));
    setGlobals(this.config);
    this.data = require(path.join(packagePath, this.config.main));
    this.packageName = packageName;
  }
  page(position: CR.Position): CR.Page {
    let page = _.cloneDeep(this.data.chapters[position.chapter].pages[position.page]);
    return page;
  }
  getConfig() {
    return this.config;
  }
  configTaskTests(tasks: CR.Task[]): CR.Task[] {
    let config = this.config.config;
    return !tasks ? [] : tasks.map((task) => {
        task.tests = !task.tests ? [] : task.tests.map((tests: string) => {
          if (_.isString(tests)) {
            return [].concat(configTestString(config, this.packageName, tests));
          } else {
            console.error('Invalid task test', tests);
          }
        });
      return task;
    });
  }
  getTasks(position: CR.Position): CR.Task[] {
    let tasks: CR.Task[] = this.page(position).tasks || [];
    tasks = this.configTaskTests(tasks);
    return tasks;
  }
  getPage(position: CR.Position): CR.Page {
    const page = this.page(position);
    return {
      title: page.title,
      description: page.description,
      explanation: page.explanation,
      completed: page.completed || false,
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
  getNextPosition(position: CR.Position): CR.Position {
    const chapters = this.data.chapters;
    if (position.page < chapters[position.chapter].pages.length - 1) {
      return { chapter: position.chapter, page: position.page + 1 };
    } else if (position.chapter < chapters.length - 1) {
      return { chapter: position.chapter + 1, page: 0 };
    } else {
      store.dispatch(Action.projectComplete());
      return position;
    }
  }
  getProject(): CR.Project {
    return this.data.project;
  }
  getProgress(): CR.Progress {
    const chapters = this.data.chapters;
    return {
      completed: false,
      chapters: !chapters ? [] : chapters.map((chapter: CR.Chapter) => {
        return {
          title: chapter.title,
          description: chapter.description,
          completed: chapter.completed || false,
          pages: !chapter.pages ? [] : chapter.pages.map((page: CR.Page) => {
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
