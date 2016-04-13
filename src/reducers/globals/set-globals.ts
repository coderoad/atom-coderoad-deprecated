import * as path from 'path';
import {fileExists} from '../../services/exists';

export function setDir(): string {
  if (atom.project.rootDirectories.length > 0) {
    return atom.project.rootDirectories[0].path;
  } else {
    return null;
  }
}

export function setWin(): boolean {
  return navigator.appVersion.indexOf('Win') > -1;
}

export function setGlobals(packageJson: PackageJson) {
  window.coderoad = Object.assign(window.coderoad, {
    tutorial: packageJson.name,
    suffix: packageJson.config.testSuffix.substring(packageJson.config.testSuffix.lastIndexOf('.') + 1,
    packageJson.config.testSuffix.length),
    tutorialDir: path.join(window.coderoad.dir, 'node_modules', packageJson.name, packageJson.config.testDir),
    testRunner: packageJson.config.testRunner,
    testRunnerOptions: packageJson.config.testRunnerOptions || {}
  });
  // issues, bugs
  loadRepo(packageJson);
  // set PackageDeps
  loadRunnerDep(packageJson);
}

function loadRunnerDep(packageJson: PackageJson) {
  // test runner dir
  let flatDep = path.join(window.coderoad.dir, 'node_modules', packageJson.config.testRunner, 'package.json');
  let treeDep = path.join(window.coderoad.dir, 'node_modules',
  packageJson.name, 'node_modules', packageJson.config.testRunner, 'package.json');

  var runnerMain;
  var runnerRoot;
  if (fileExists(flatDep)) {
    runnerMain = require(flatDep).main;
    runnerRoot = flatDep;
  } else if (fileExists(treeDep)) {
    runnerMain = require(treeDep).main;
    runnerRoot = treeDep;
  } else {
    let message = 'Error loading test runner. Post an issue. https://github.com/coderoad/atom-coderoad/issues';
    console.log(message);
    throw message;
  }

  // fix main path for Windows
  let slash = window.coderoad.win ? '\\' : '/';
  runnerMain = path.join.apply(null, runnerMain.split(slash));
  // trim root path to folder
  runnerRoot = runnerRoot.substring(0, runnerRoot.lastIndexOf(slash));

  let pathToMain = path.join(runnerRoot, runnerMain);

  if (!!require(pathToMain).default) {
    window.coderoad.runner = require(pathToMain).default;
  } else {
    window.coderoad.runner = require(pathToMain);
  }
}

function loadRepo(packageJson: PackageJson) {
  if (packageJson.bugs && packageJson.bugs.url) {
    window.coderoad.issuesPath = packageJson.bugs.url;
  }
  if (packageJson.repo && packageJson.repo.url) {
    let repo: string = packageJson.repo.url;
    if (!!repo.match(/\.git$/)) {
      repo = repo.slice(0, repo.length - 4);
    }
    window.coderoad.repo = repo;
  }

  window.coderoad.edit = packageJson.config.edit && !!window.coderoad.repo || false;
}
