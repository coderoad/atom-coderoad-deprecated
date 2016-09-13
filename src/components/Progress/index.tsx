import * as React from 'react';
import {connect} from 'react-redux';

import {progressLoad} from '../../actions';
import ProgressPage from './ProgressPage';
import {List} from 'material-ui/List';
import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';

const styles = {
  page: {
    width: '100%',
  },
  list: {
    margin: '5px',
  },
};

class Progress extends React.Component<{
    info: Tutorial.Info, tutorial: CR.Tutorial, progressLoad: () => any,
}, {}> {
  public render() {
    const {info, tutorial} = this.props;
    return (
      <Paper style={styles.page}>
        <List style={styles.list}>
          <Subheader>{info.title}</Subheader>
          {tutorial.pages.map((page: CR.Page, index: number) => (
            <ProgressPage
              key={index}
              index={index}
              page={page}
            />
         ))
        }
        </List>
      </Paper>
    );
  }
  private componentWillMount() {
    this.props.progressLoad();
  }
}

const mapStateToProps = state => ({
  info: state.tutorial.info,
  tutorial: state.tutorial,
});

const mapDispatchToProps = {
  progressLoad
};

export default connect(mapStateToProps, mapDispatchToProps)(Progress);