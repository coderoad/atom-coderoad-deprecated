import * as React from 'react';
import {connect} from 'react-redux';
import FileUpload from 'material-ui/svg-icons/file/file-upload';
// import {tutorialUpdate} from '../../actions';

// TODO: tutorialUpdate action

@connect(null, (dispatch) => {
  return {
    // tutorialUpdate: (name: string) => dispatch(tutorialUpdate(name)),
  };
})
export class UpdateTutorial extends React.Component<{
  name: string, tutorialUpdate?: any
}, {}> {
  render() {
    const {name, tutorialUpdate} = this.props;
    return <FileUpload />;
    // return <FileUpload onClick={tutorialUpdate(name)} />;
  }
}
