import Package from '../services/package';

export function getStateFromPackage(name: string) {
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

export function getInitialState() {
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
    log: { open: false, message: '' },
    hint: []
  };
}
