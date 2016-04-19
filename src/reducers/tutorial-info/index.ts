import {TUTORIAL_SET} from '../../actions/_types';
import TutorialPackage from '../../services/tutorial-package';

const _info: CR.TutorialInfo = {
  title: '',
  description: ''
};

export default function projectReducer(info = _info,
  action: CR.Action): CR.TutorialInfo {
  switch (action.type) {
    case TUTORIAL_SET:
      return TutorialPackage.getTutorialInfo();
    default:
      return info;
  }
}
