import {join} from 'path';
import {globalsSet, completeTutorial} from '../actions';
import {store} from '../store/store';
import {readFileSync} from 'fs';
import {fileExists} from './exists';

function configTestString(config: CR.Config,
  name: string, test: string): string {
  if (window.coderoad.win) {
    test = test.split('/').join('\\');
  }
  if (config.testDir) {
    test = join(window.coderoad.dir, 'node_modules', name, config.testDir, test);
  } else {
    test = join(window.coderoad.dir, 'node_modules', name, test);
  }
  if (config.testSuffix) {
    test += config.testSuffix;
  }
  return test;
}

class TutorialPackageService {
  data: { project: any, chapters: any[] };
  packageJson: PackageJson;
  name: string;
  constructor() {
    this.name = '';
    this.data = {
      project: {},
      chapters: []
    };
    this.packageJson = null;
  }
  get(): PackageJson {
    return this.packageJson;
  }
  set(name: string): void {
    let packagePath = join(window.coderoad.dir, 'node_modules', name);
    this.packageJson = require(join(packagePath, 'package.json'));
    store.dispatch(globalsSet(this.packageJson));
    this.data = require(join(packagePath, this.packageJson.main));
    this.name = name;
  }
  page({chapter, page}: CR.Position): CR.Page {
    return this.data.chapters[chapter].pages[page];
  }
  configTaskTests(tasks: CR.Task[]): CR.Task[] {
    let config: CR.Config = this.packageJson.config;
    return !tasks ? [] : tasks.map((task: CR.Task) => {
      if (task.tests) {
        task.tests = task.tests.map((test: string) => {
          // add unique string to tests
          if (typeof test === 'string') {
            return configTestString(config, this.name, test);
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
  getNextPosition({chapter, page}: CR.Position): CR.Position {
    const {chapters} = this.data;
    if (page < chapters[chapter].pages.length - 1) {
      return { chapter, page: page + 1 };
    } else if (chapter < chapters.length - 1) {
      return { chapter: chapter + 1, page: 0 };
    } else {
      store.dispatch(completeTutorial());
      return {chapter, page, completed: true};
    }
  }
  getTutorialInfo(): CR.TutorialInfo {
    return this.data.project;
  }
  getProgress(): CR.Progress {
    const {chapters} = this.data;
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
export default new TutorialPackageService();
