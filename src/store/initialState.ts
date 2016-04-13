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
