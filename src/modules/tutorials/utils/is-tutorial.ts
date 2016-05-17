import {join} from 'path';
import {readFileSync} from 'fs';
import fileExists from 'node-file-exists';

export const tutorialError = 'This is an error with the tutorial itself';

export function isTutorial(dir: string, name: string): boolean {
  // has package.json
  const pathToTutorialPackageJson = join(
    dir, 'node_modules', name, 'package.json'
  );
  if (!fileExists(pathToTutorialPackageJson)) {
    console.log(`Error with ${name}: no package.json file found. ${tutorialError}`);
    return false;
  }
  // main path to coderoad.json
  let packageJson = JSON.parse(readFileSync(pathToTutorialPackageJson, 'utf8'));
  if (!packageJson.main && packageJson.main.match(/coderoad.json$/)) {
    console.log(`Error with ${name}: main does not load a coderoad.json file. ${tutorialError}`);
    return false;
  }
  // coderoad.json file exists
  let pathToCoderoadJson = join(
    dir, 'node_modules', name, packageJson.main
  );
  if (!fileExists(pathToCoderoadJson)) {
    console.log(`Error with ${name}: no coderoad.json file. ${tutorialError}`);
    return false;
  };
  if (!packageJson.config || !packageJson.config.runner) {
    console.log(`Error with ${name}: no test runner specified. ${tutorialError}`);
    return false;
  }

  // let currentTutorialVersion: string = packageJson.dependencies[name] || packageJson.devDependencies[name];
  // canUpdateTutorial(name, currentTutorialVersion);

  // let pathToTestRunner = path.join(dir, 'node_modules', packageJson.config.testRunner);
  // // if (!fileExists(pathToTestRunner)) {
  // //   console.log(`Error with ${name}: ${packageJson.config.testRunner} test runner not installed`);
  // //   return false;
  // // }
  return true;
}
