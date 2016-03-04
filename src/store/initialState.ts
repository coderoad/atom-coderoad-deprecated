import Package from '../services/package';

export function getStateFromPackage(name: string): CR.State {
  Package.selectPackage(name);
  return Object.assign({}, {
    project: Package.getProject(),
    route: Package.getSavedRoute(),
    position: Package.getSavedPosition(),
    progress: Package.getProgress(),
    page: {},
    tasks: []
  });
}

export function getInitialState(): Object {
  return {
    project: {},
    route: 'projects',
    position: {},
    progress: {},
    page: {},
    tasks: [],
    editorActions: false,
    runTests: false,
    tutorials: [],
    alert: {},
    hintPosition: -1
    // log: { open: false, message: '' },
  };
}
