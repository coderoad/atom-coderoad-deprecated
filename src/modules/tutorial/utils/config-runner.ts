import {editor} from '../../../index';
import {isWindows} from '../../../utils/system';
import fileExists from 'node-file-exists';
import {join} from 'path';

/**
 * sets tutorial runner (load & run)
 * @param  {string} name
 * @param  {string} runner
 * @param  {string} dir
 */
export default function configRunner(name: string, runner: string, dir: string): { run: () => any, load: () => any } {
  
  // flat dep in NPM 3
  let flatDep = join(
    dir, 'node_modules', runner, 'package.json'
  );
  // tree dep occurs in NPM 2 & when using npm link
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
    let message = `Error loading test runner. Post an issue. ${editor.issuesPath}`;
    console.log(message);
    throw message;
  }

  // fix main path for Windows
  let slash = isWindows ? '\\' : '/';
  runnerMain = join.apply(null, runnerMain.split(slash));
  // trim root path to folder
  runnerRoot = runnerRoot.substring(0, runnerRoot.lastIndexOf(slash));

  let pathToMain = join(runnerRoot, runnerMain);

  return {
    load: require(pathToMain).load || { load: () => console.log('Invalid test loader')},
    run: require(pathToMain).run || { run: () => console.log('Invalid test runner')},
  };
}
