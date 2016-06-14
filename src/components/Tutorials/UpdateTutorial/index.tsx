import * as React from 'react';
import {connect} from 'react-redux';
import {tutorialUpdate} from '../../../actions';
import Update from 'material-ui/svg-icons/action/update';
import {pink500} from 'material-ui/styles/colors';

const styles = {
  icon: {
    width: '18px',
    marginLeft: '10px',
  },
  latest: {
    marginLeft: '10px',
  },
};

@connect(null, dispatch => ({
  tutorialUpdate(title: string) { dispatch(tutorialUpdate(title)); },
}))
export default class UpdateTutorial extends React.Component<{
  tutorial: Tutorial.Item, tutorialUpdate?: any
}, {}> {
  render() {
    const {tutorial, tutorialUpdate} = this.props;
    return (
      <span>
        <Update
          style={styles.icon}
          color={pink500}
          onTouchTap={tutorialUpdate.bind(this, tutorial.name)}
        />``
        <span style={styles.latest}>{tutorial.latest}</span>
      </span>
    );
  }
}
