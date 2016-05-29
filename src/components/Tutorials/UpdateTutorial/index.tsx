import * as React from 'react';
import {connect} from 'react-redux';
import {tutorialUpdate} from '../../../actions';
import Update from 'material-ui/svg-icons/action/update';
import {pink500} from 'material-ui/styles/colors';

const styles = {
  width: '18px',
  marginLeft: '10px',
};

@connect(null, (dispatch) => {
  return {
    tutorialUpdate: (name: string) => dispatch(tutorialUpdate(name)),
  };
})
export default class UpdateTutorial extends React.Component<{
  tutorial: Tutorial.Info, tutorialUpdate?: any
}, {}> {
  render() {
    const {tutorial, tutorialUpdate} = this.props;
    return (
      <span>
        <Update
          style={styles}
          color={pink500}
          onTouchTap={tutorialUpdate.bind(this, tutorial.name)}
        />
        <span style={{marginLeft: '10px'}}>{tutorial.latest}</span>
      </span>
    );
  }
}
