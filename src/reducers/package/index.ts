import {} from '../../actions/_types';

const _package: PackageJson = {};

export default function packageReducer(package = _package, action: CR.Action): string {
  switch (action.type) {
    default:
      return package;
  }
}
