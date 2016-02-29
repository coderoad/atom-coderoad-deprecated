import * as Type from '../../actions/actionTypes';
import Package from '../../services/package';

const defaultProject: CR.Project = {
  title: '',
  description: ''
};

export default function projectReducer(project = defaultProject, action: CR.Action): CR.Project {
  switch (action.type) {
    case Type.SET_PROJECT:
      return Package.getProject();
    default:
      return project;
  }
}
