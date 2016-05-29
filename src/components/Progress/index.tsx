import * as React from 'react';
import {connect} from 'react-redux';
import Paper from 'material-ui/Paper';
import {List} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import ProgressPage from './ProgressPage';
import {progressLoad} from '../../modules/progress/actions';

const pageStyle = {
  width: '100%',
};

const listStyle = {
  margin: '5px',
};

@connect(null, dispatch => {
  return {
    progressLoad: () => dispatch(progressLoad())
  };
})
export default class Progress extends React.Component<{
    progress: CR.Progress, pagePosition: CR.PagePosition,
    info: Tutorial.Info, tutorial: CR.Tutorial, progressLoad?: () => any;
}, {}> {
  componentWillMount() {
    this.props.progressLoad();
  }
  render() {
    const {progress, pagePosition, info, tutorial} = this.props;
    return (
      <Paper style={pageStyle}>
        <List style={listStyle}>
          <Subheader>{info.name}</Subheader>
          {tutorial.pages.map((page: CR.Page, index: number) => (
            <ProgressPage
              key={index}
              index={index}
              page={page}
              pagePosition={pagePosition}
              progress={progress}
            />
         ))
        }
        </List>
      </Paper>
    );
  }
}
