import * as path from 'path';
import {fileExists} from './exists';

export function setGlobals(config: PackageJson) {
  window.coderoad = Object.assign(window.coderoad, {
    tutorial: config.name,
    tutorialDir: path.join(window.coderoad.dir, 'node_modules', config.name, config.config.testDir),
    testRunner: config.config.testRunner,
    testRunnerOptions: config.config.testRunnerOptions || {}
  });
  // issues, bugs
  loadRepo(config);
  // set PackageDeps
  loadRunnerDep(config);
}

function loadRunnerDep(config: PackageJson) {
  // test runner dir
  let flatDep = path.join(window.coderoad.dir, 'node_modules', config.config.testRunner, 'package.json');
  let treeDep = path.join(window.coderoad.dir, 'node_modules', config.name, 'node_modules', config.config.testRunner, 'package.json');

  var runnerMain;
  var runnerRoot;
  if (fileExists(flatDep)) {
    runnerMain = require(flatDep).main;
    runnerRoot = flatDep;
  } else if (fileExists(treeDep)) {
    runnerMain = require(treeDep).main;
    runnerRoot = treeDep;
  } else {
    let message = 'Error loading test runner. Post an issue.';
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

function loadRepo(config) {
  if (config.bugs && config.bugs.url) {
    window.coderoad.issuesPath = config.bugs.url;
  }
  if (config.repo && config.repo.url) {
    let repo: string = config.repo.url;
    if (!!repo.match(/\.git$/)) {
      repo = repo.slice(0, repo.length - 4);
    }
    window.coderoad.repo = repo;
  }

  window.coderoad.edit = config.config.edit && !!window.coderoad.repo || false;
}
