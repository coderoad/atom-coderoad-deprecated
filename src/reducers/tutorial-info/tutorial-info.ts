import {SET_TUTORIAL_INFO} from '../../actions/actionTypes';
import TutorialPackage from '../../services/tutorial-package';

const defaultInfo: CR.TutorialInfo = {
  title: '',
  description: ''
};

export default function projectReducer(info = defaultInfo,
  action: CR.Action): CR.TutorialInfo {
  switch (action.type) {
    case SET_TUTORIAL_INFO:
      return TutorialPackage.getTutorialInfo();
    default:
      return info;
  }
}
