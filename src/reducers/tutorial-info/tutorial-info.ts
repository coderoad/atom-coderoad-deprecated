import {TUTORIAL_SET} from '../../actions/_types';
import TutorialPackage from '../../services/tutorial-package';

const defaultInfo: CR.TutorialInfo = {
  title: '',
  description: ''
};

export default function projectReducer(info = defaultInfo,
  action: CR.Action): CR.TutorialInfo {
  switch (action.type) {
    case TUTORIAL_SET:
      return TutorialPackage.getTutorialInfo();
    default:
      return info;
  }
}
