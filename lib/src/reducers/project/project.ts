import * as Type from '../../actions/actionTypes';
import Package from '../../services/package';

const defaultProject: cr.Project = {
  title: '',
  description: ''
};

export default function projectReducer(project = defaultProject, action): cr.Project {
  switch (action.type) {
    case Type.SET_PROJECT:
      return Package.getProject();
    default:
      return project;
  }
}
