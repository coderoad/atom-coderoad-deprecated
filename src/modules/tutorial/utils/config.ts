import {join} from 'path';

import {configIssuesPath, configRepo} from './config-repo';
import configRunner from './config-runner';
import {isWindows} from './system';
import fileExists from 'node-file-exists';

/**
 * capture configuration variables
 * @param  {PackageJson} tutorialPj tutorial package.json
 * @param  {string} dir use directory
 * @returns Tutorial.Config
 */
export function tutorialConfig(
  tutorialPj: PackageJson, dir: string
): Tutorial.Config {
  // package.json: name, config
  const {config, name} = tutorialPj;
  const repo = configRepo(tutorialPj.repo);
  const runner: string = config.runner;
  const runnerOptions: Object = config.runnerOptions || {};
  const configEdit = tutorialPj.config.edit;

  const getRunner = configRunner(name, config.runner, dir);

  if (!getRunner || !getRunner.run || !getRunner.load) {
    console.log('Error loading test runner', getRunner);
  }

  return {
    dir: join(dir, 'node_modules', name, config.dir),
    runner,
    runnerOptions,
    run: getRunner.run,
    load: getRunner.load,
    testSuffix: configTestSuffix(config.testSuffix || 'js'),
    issuesPath: configIssuesPath(tutorialPj.bugs),
    repo,
    edit: !!repo && configEdit || false,
  };
}

/**
 * add test suffix to the end of files
 * example: '.js' -> '.js'
 * example: 'js' -> '.js'
 * @param  {string} suffix
 */
function configTestSuffix(suffix: string) {
  return suffix.length && suffix[0] === '.' ? suffix : '.' + suffix || null;
}
