import {SET_PROJECT} from '../../actions/actionTypes';
import TutorialPackage from '../../services/tutorial-package';

const defaultProject: CR.Project = {
  title: '',
  description: ''
};

export default function projectReducer(project = defaultProject,
  action: CR.Action): CR.Project {
  switch (action.type) {
    case SET_PROJECT:
      return TutorialPackage.getProject();
    default:
      return project;
  }
}
