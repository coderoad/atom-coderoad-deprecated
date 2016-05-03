import * as React from 'react';
import Paper from 'material-ui/Paper';
import {List} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import ProgressPage from './ProgressPage';

const pageStyle = {
  width: '100%',
};

const listStyle = {
  margin: '5px',
};

const Progress: React.StatelessComponent<{
  progress: CR.Progress, pagePosition: CR.PagePosition,
  info: Tutorial.Info, tutorial: CR.Tutorial
}> = ({progress, pagePosition, info, tutorial}) => (
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
export default Progress;
