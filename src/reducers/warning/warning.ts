import * as Type from '../../actions/actionTypes';

const defaultWarning = {
  key: 'loading',
  title: 'Loading',
  click: null,
  text: ''
};

export default function warningReducer(warning = defaultWarning, action: CR.Action): CR.SetupWarning {
  switch (action.type) {
    case Type.SETUP_WARNING:
      return action.payload.warning;
    default:
      return warning;
  }
}
