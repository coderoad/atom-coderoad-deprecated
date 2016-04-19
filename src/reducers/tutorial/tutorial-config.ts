import {join} from 'path';
import {fileExists} from '../../services/exists';

export function tutorialConfig(tutorialPj: PackageJson): CR.Coderoad {
  return Object.assign({}, {
    tutorial: tutorialPj.name,
    suffix: tutorialPj.config.testSuffix.substring(tutorialPj.config.testSuffix.lastIndexOf('.') + 1,
    tutorialPj.config.testSuffix.length),
    tutorialDir: join(window.coderoad.dir, 'node_modules', tutorialPj.name, tutorialPj.config.testDir),
    testRunner: tutorialPj.config.testRunner,
    testRunnerOptions: tutorialPj.config.testRunnerOptions || {},
    runner: loadRunnerDep(tutorialPj),
    repo: loadRepo(tutorialPj),
    edit: tutorialPj.config.edit && !!window.coderoad.repo || false,
    issuesPath: tutorialPj.bugs && tutorialPj.bugs.url ? tutorialPj.bugs.url : null
  }, window.coderoad);
}

function loadRunnerDep(tutorialPj: PackageJson): () => any {
  // test runner dir
  let flatDep = join(window.coderoad.dir, 'node_modules', tutorialPj.config.testRunner, 'package.json');
  let treeDep = join(window.coderoad.dir, 'node_modules',
  tutorialPj.name, 'node_modules', tutorialPj.config.testRunner, 'package.json');

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
  runnerMain = join.apply(null, runnerMain.split(slash));
  // trim root path to folder
  runnerRoot = runnerRoot.substring(0, runnerRoot.lastIndexOf(slash));

  let pathToMain = join(runnerRoot, runnerMain);

  if (!!require(pathToMain).default) {
    return require(pathToMain).default;
  } else {
    return require(pathToMain);
  }
}

function loadRepo(tutorialPj: PackageJson): string {
  if (tutorialPj.repo && tutorialPj.repo.url) {
    let repo: string = tutorialPj.repo.url;
    if (!!repo.match(/\.git$/)) {
      repo = repo.slice(0, repo.length - 4);
    }
    return repo;
  }
  return null;
}
