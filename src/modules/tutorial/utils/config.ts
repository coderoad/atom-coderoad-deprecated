import {join} from 'path';

import {configIssuesPath, configRepo} from './config-repo';
import configRunner from './config-runner';
import {isWindows} from './system';
import fileExists from 'node-file-exists';

export function tutorialConfig(
  tutorialPj: PackageJson, dir: string
): Tutorial.Config {
  // package.json: name, config
  const {config, name} = tutorialPj;
  const repo: string = configRepo(tutorialPj.repo);
  const tutorialDir: string = join(dir, 'node_modules', name, config.dir);
  const runner: string = config.runner;
  const runnerOptions: Object = config.runnerOptions || {};
  const configEdit: boolean = tutorialPj.config.edit;

  const getRunner = configRunner(name, config.runner, dir);

  if (!getRunner || !getRunner.run || !getRunner.load) {
    console.log('Error loading test runner', getRunner);
  }

  return {
    dir: tutorialDir,
    runner,
    runnerOptions,
    run: getRunner.run,
    load: getRunner.load,
    testSuffix: configTestSuffix(config.testSuffix),
    issuesPath: configIssuesPath(tutorialPj.bugs),
    repo,
    edit: !!repo && configEdit || false,
  };
}

function configTestSuffix(suffix: string) {
  return suffix.length && suffix[0] === '.' ? suffix : '.' + suffix || null;
}
