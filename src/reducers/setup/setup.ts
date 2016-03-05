import * as Type from '../../actions/actionTypes';

const defaultSetup: CR.Setup = {
  hasDirectory: false,
  hasPackageJson: false,
  hasTutorialDep: false,
  hasTutorial: false,
  hasTestRunner: false
};

export default function setupReducer(setup = defaultSetup, action: CR.Action): CR.Setup {
  switch (action.type) {
    case Type.SET_SETUP:
      return Object.assign(setup, action.payload);
    default:
      return setup;
  }
}
