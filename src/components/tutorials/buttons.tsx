import * as React from 'react';
import {connect} from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import {
  loadTutorial, loadTutorials, updateTutorial, setRoute, toggleAlert
} from '../../actions/actions';
import FileUpload from 'material-ui/svg-icons/file/file-upload';

@connect(null, (dispatch) => {
  return {
    loadTutorials: () => {
      dispatch(loadTutorials());
    }
  };
})
export class LoadTutorials extends React.Component<{
  loadTutorials?: any
}, {}> {
  render() {
    return <FlatButton style={{margin: '0 90px'}} label='Check for Tutorials' secondary={true} onTouchTap={this.props.loadTutorials} />;
  }
}

@connect(null, (dispatch) => {
  return {
    updateTutorial: (name: string) => {
      dispatch(updateTutorial(name));
    }
  };
})
export class UpdateTutorial extends React.Component<{
  name: string, updateTutorial?: any
}, {}> {
  render() {
    const {name, updateTutorial} = this.props;
    return <FileUpload onClick={updateTutorial(name)} />;
  }
}

@connect(null, (dispatch) => {
  return {
    selectTutorial: (tutorial: CR.Tutorial) => {
      loadTutorial(tutorial);
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
