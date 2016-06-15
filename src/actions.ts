export {hintPositionSet} from './modules/hints/actions';
export {pageSet, pageNext} from './modules/page/actions';
export {progressLoad, progressCompletePage} from './modules/progress/actions';
export {testRun, testResult, testComplete} from './modules/tests/actions';
export {setupVerify, setupPackage} from './modules/setup/actions';
export {tutorialSet} from './modules/tutorial';
export {tutorialsFind, tutorialUpdate} from './modules/tutorials';

export {
  alertOpen, alertClose, alertReplay,
  editorDevToolsToggle, editorOpen, editorInsert,
  editorSave, editorSet,
  routeSet,
  windowToggle, quit
} from 'core-coderoad';
