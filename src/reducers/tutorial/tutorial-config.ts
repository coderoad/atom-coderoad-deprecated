import {join} from 'path';
import {fileExists} from '../../services/exists';
import {isWindows} from '../../services/system';
import store from '../../store';

export function tutorialConfig(tutorialPj: PackageJson): Tutorial.Config {
  const {config, name} = tutorialPj;
  const repo: string = loadRepo(tutorialPj.repo);
  const dir: string = store.getState().dir;
  const testSuffix: string = config.testSuffix;
  return {
    dir: join(dir, 'node_modules', name, config.dir),
    testSuffix: testSuffix.length && testSuffix[0] === '.'
      ? testSuffix
      : '.' + testSuffix || null,
    runner: config.runner,
    runnerOptions: config.runnerOptions || null,
    run: loadRunner(name, config.runner, dir),
    repo,
    edit: tutorialPj.config.edit && repo || false,
    issuesPath: getIssuesPath(tutorialPj.bugs)
  };
}

function getIssuesPath(bugs?: { url: string }) {
  return bugs && bugs.url ? bugs.url : null;
}

function loadRunner(name: string, runner: string, dir: string): () => any {
  // test runner dir
  let flatDep = join(
    dir, 'node_modules', runner, 'package.json'
  );
  let treeDep = join(
    dir, 'node_modules', name, 'node_modules', runner, 'package.json'
  );

  let runnerMain;
  let runnerRoot;
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
  let slash = isWindows ? '\\' : '/';
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

function loadRepo(repo?: { url: string }): string {
  if (repo && repo.url) {
    let url: string = repo.url;
    if (!!url.match(/\.git$/)) {
      url = url.slice(0, url.length - 4);
    }
    return url;
  }
  return null;
}
