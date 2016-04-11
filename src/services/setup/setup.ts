import {fileExists} from '../exists';
import {npmVersionThreeOrLater} from './system-checks';
import {hasDirectory, hasPackageJson, hasTutorialDep} from './setup-checks';
import {packageJsonExists, loadRootPackageJson, searchForTutorials} from './tutorials';
import {createPackageJson, openDirectory, installTutorial} from './setup-actions';
import * as path from 'path';
import {store} from '../../_base';
import * as Action from '../../actions/actions';

export function verifySetupComplete() {
  // system checks
  // npmVersionThreeOrLater()
  // setup checks
  hasDirectory()
    .then(hasPackageJson)
    .then(hasTutorialDep)
    .then(() => {
    store.dispatch(Action.setupWarning(null));
    store.dispatch(Action.loadTutorials());
  })
    .catch((warning: CR.SetupWarning) => {
    store.dispatch(Action.setupWarning(warning));
  });
}
