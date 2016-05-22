import {join} from 'path';
import fileExists from 'node-file-exists';
import {isWindows} from './system';
import configRunner from './config-runner';
import {configRepo, configIssuesPath} from './config-repo';

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

  return {
    dir: tutorialDir,
    runner,
    runnerOptions,
    run: configRunner(name, config.runner, dir),
    testSuffix: configTestSuffix(config.testSuffix),
    issuesPath: configIssuesPath(tutorialPj.bugs),
    repo,
    edit: !!repo && configEdit || false,
  };
}

function configTestSuffix(suffix: string) {
  return suffix.length && suffix[0] === '.' ? suffix : '.' + suffix || null;
}
