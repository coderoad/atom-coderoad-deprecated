import * as React from 'react';
import {connect} from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import {
  tutorialsFind, tutorialUpdate, setRoute, alertToggle, positionSet, tutorialSet
} from '../../actions/_actions';
import FileUpload from 'material-ui/svg-icons/file/file-upload';
import TutorialPackage from '../../services/tutorial-package';

@connect(null, (dispatch) => {
  return {
    tutorialsFind: () => {
      dispatch(tutorialsFind());
    }
  };
})
export class LoadTutorials extends React.Component<{
  tutorialsFind?: any
}, {}> {
  render() {
    return <FlatButton style={{margin: '0 90px'}} label='Check for Tutorials' secondary={true} onTouchTap={this.props.tutorialsFind} />;
  }
}

@connect(null, (dispatch) => {
  return {
    tutorialUpdate: (name: string) => {
      dispatch(tutorialUpdate(name));
    }
  };
})
export class UpdateTutorial extends React.Component<{
  name: string, tutorialUpdate?: any
}, {}> {
  render() {
    const {name, tutorialUpdate} = this.props;
    return <FileUpload onClick={tutorialUpdate(name)} />;
  }
}

@connect(null, (dispatch) => {
  return {
    selectTutorial: (tutorial: CR.Tutorial) => {
      TutorialPackage.set(tutorial.name);
      dispatch(tutorialSet());
      dispatch(positionSet({chapter: 0, page: 0}));
      dispatch(setRoute('progress'));
    },
  };
})
export class SelectTutorial extends React.Component<{
  tutorial: CR.Tutorial, selectTutorial?: any
}, {}> {
  render() {
    const {tutorial, selectTutorial} = this.props;
    let name = tutorial.name;
    if (name.match(/^coderoad-tutorial-/)) {
      name = name.slice(18);
    }
    if (name.match(/^coderoad-/)) {
      name = name.slice(9);
    }
    return <FlatButton label={name} primary={true} onTouchTap={selectTutorial.bind(this, tutorial)} />;
  }
}
