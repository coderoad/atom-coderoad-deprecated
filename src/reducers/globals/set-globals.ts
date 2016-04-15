import {join} from 'path';
import {fileExists} from '../../services/exists';

export function setGlobals(packageJson: PackageJson): CR.Coderoad {
  return Object.assign({}, {
    tutorial: packageJson.name,
    suffix: packageJson.config.testSuffix.substring(packageJson.config.testSuffix.lastIndexOf('.') + 1,
    packageJson.config.testSuffix.length),
    tutorialDir: join(window.coderoad.dir, 'node_modules', packageJson.name, packageJson.config.testDir),
    testRunner: packageJson.config.testRunner,
    testRunnerOptions: packageJson.config.testRunnerOptions || {},
    runner: loadRunnerDep(packageJson),
    repo: loadRepo(packageJson),
    edit: packageJson.config.edit && !!window.coderoad.repo || false,
    issuesPath: packageJson.bugs && packageJson.bugs.url ? packageJson.bugs.url : null
  }, window.coderoad);
}

function loadRunnerDep(packageJson: PackageJson) {
  // test runner dir
  let flatDep = join(window.coderoad.dir, 'node_modules', packageJson.config.testRunner, 'package.json');
  let treeDep = join(window.coderoad.dir, 'node_modules',
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

function loadRepo(packageJson: PackageJson): string {
  if (packageJson.repo && packageJson.repo.url) {
    let repo: string = packageJson.repo.url;
    if (!!repo.match(/\.git$/)) {
      repo = repo.slice(0, repo.length - 4);
    }
    return repo;
  }
  return null;
}
