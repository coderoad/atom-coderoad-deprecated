import * as React from 'react';
import {connect} from 'react-redux';

import {tutorialUpdate} from '../../../actions';
import {pink500} from 'material-ui/styles/colors';
import Update from 'material-ui/svg-icons/action/update';

const styles = {
  icon: {
    width: '18px',
    marginLeft: '10px',
  },
  latest: {
    marginLeft: '10px',
  },
};

class UpdateTutorial extends React.Component<{
  tutorial: Tutorial.Item, tutorialUpdate: any
}, {}> {
  public render() {
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

const mapStateToProps = (state, props) => ({
  tutorial: props.tutorial
});
const mapDispatchToProps = {tutorialUpdate};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateTutorial);