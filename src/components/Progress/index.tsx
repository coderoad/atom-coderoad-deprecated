import * as React from 'react';
import {connect} from 'react-redux';

import {progressLoad, progressReset} from '../../actions';
import ProgressPage from './ProgressPage';
import {List} from 'material-ui/List';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import Subheader from 'material-ui/Subheader';

interface IStyles {
  page: React.CSSProperties;
  list: React.CSSProperties;
  options: React.CSSProperties;
};

const styles: IStyles = {
  page: {
    width: '100%',
  },
  list: {
    margin: '5px',
  },
  options: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '10px',
    opacity: 0.6,
  },
};

class Progress extends React.Component<{
    info: Tutorial.Info, tutorial: CR.Tutorial,
    progressLoad: () => any, progressReset: () => any
}, {}> {
  public verifyReset() {
    const reset = confirm('Are you sure you want to erase your progress?');
    if (reset) {
      this.props.progressReset();
    }
  }
  public render() {
    const {info, tutorial} = this.props;
    return (
    <div>
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
      <div style={styles.options}>
       <RaisedButton
          label="Reset"
          onClick={this.verifyReset.bind(this)}
        />
      </div>
    </div>
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
  progressLoad,
  progressReset
};

export default connect(mapStateToProps, mapDispatchToProps)(Progress);