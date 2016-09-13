import * as React from 'react';
import {connect} from 'react-redux';

import {pageSet, routeSet, progressLoad} from '../../actions';
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
    progress: CR.Progress, pagePosition: CR.PagePosition,
    info: Tutorial.Info, tutorial: CR.Tutorial, progressLoad: () => any,
    selectPage: (pagePosition: CR.PagePosition) => any,
}, {}> {
  public render() {
    const {progress, pagePosition, info, tutorial, selectPage} = this.props;
    return (
      <Paper style={styles.page}>
        <List style={styles.list}>
          <Subheader>{info.title}</Subheader>
          {tutorial.pages.map((page: CR.Page, index: number) => (
            <ProgressPage
              key={index}
              index={index}
              page={page}
              pagePosition={pagePosition}
              progress={progress}
              selectPage={selectPage}
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
  progress: state.progress,
  pagePosition: state.pagePosition,
  info: state.tutorial.info,
  tutorial: state.tutorial,
});

const mapDispatchToProps = dispatch => ({
  selectPage(pagePosition: CR.PagePosition) {
    dispatch(pageSet(pagePosition));
    dispatch(routeSet('page'));
  },
  progressLoad
});

export default connect(mapStateToProps, mapDispatchToProps)(Progress);