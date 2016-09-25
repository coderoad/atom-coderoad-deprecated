import * as React from 'react';
import {connect} from 'react-redux';

import {tutorialUpdate} from '../../../actions';
import {pink500} from 'material-ui/styles/colors';
import Update from 'material-ui/svg-icons/action/update';

interface IStyles {
  icon: React.CSSProperties;
  latest: React.CSSProperties;
};

const styles: IStyles = {
  icon: {
    width: '18px',
    marginLeft: '10px',
  },
  latest: {
    marginLeft: '10px',
    opacity: 0.5,
  },
};

class UpdateTutorial extends React.Component<{
  tutorial: Tutorial.Info, tutorialUpdate: any
}, {}> {
  public render() {
    const {tutorial, tutorialUpdate} = this.props;
    return (
      <span>
        <Update
          style={styles.icon}
          color={pink500}
          onTouchTap={tutorialUpdate.bind(this, tutorial.name)}
        />
        <span style={styles.latest}>{`(${tutorial.latest})` ? tutorial.latest : ''}</span>
      </span>
    );
  }
}

const mapStateToProps = (state, props) => ({
  tutorial: props.tutorial
});
const mapDispatchToProps = {tutorialUpdate};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateTutorial);
