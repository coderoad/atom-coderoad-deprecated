import * as path from 'path';
import {fileExists} from './exists';

export function setGlobals(config) {
  global.coderoad = Object.assign(global.coderoad, {
    tutorial: config.name,
    tutorialDir: path.join(global.coderoad.dir, 'node_modules', config.name, config.config.testDir),
    testRunner: config.config.testRunner,
    testRunnerOptions: config.config.testRunnerOptions || {}
  });
  loadRepo(config);
  // set PackageDeps
  loadRunnerDep(config);
}

function loadRunnerDep(config) {
  // test runner dir
  let flatDep = path.join(global.coderoad.dir, 'node_modules', config.config.testRunner, 'package.json');
  let treeDep = path.join(global.coderoad.dir, 'node_modules', config.name, 'node_modules', config.config.testRunner, 'package.json');

  var runnerMain;
  var runnerRoot;
  if (fileExists(flatDep)) {
    runnerMain = require(flatDep).main;
    runnerRoot = flatDep;
  } else if (fileExists(treeDep)) {
    runnerMain = require(treeDep).main;
    runnerRoot = treeDep;
  } else {
    let message = "Error loading test runner. Post an issue."
    console.log(message);
    throw message;
  }

  runnerRoot = runnerRoot.substring(0, runnerRoot.lastIndexOf('/'));
  let pathToMain = path.join(runnerRoot, runnerMain);

  if (!!require(pathToMain).default) {
    global.coderoad.runner = require(pathToMain).default;
  } else {
    global.coderoad.runner = require(pathToMain);
  }

}

function loadRepo(config) {
  if (config.bugs && config.bugs.url) {
    global.coderoad.issuesPath = config.bugs.url;
  }
  if (config.repo && config.repo.url) {
    let repo = config.repo.url;
    if (!!repo.match(/\.git$/)) {
      repo = repo.slice(0, repo.length - 4);
    }
    global.coderoad.repo = repo;
  }

  global.coderoad.edit = config.config.edit && !!repo || false;
}
