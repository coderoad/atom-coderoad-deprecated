import * as React from 'react';
import Paper from 'material-ui/Paper';
import {List} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import {ProgressPage} from './ProgressPage';

const pageStyle = {
  width: '100%',
  margin: '0px',
};

export const Progress: React.StatelessComponent<{
  progress: CR.Progress, pagePosition: CR.PagePosition,
  info: Tutorial.Info, tutorial: CR.Tutorial
}> = ({progress, pagePosition, info, tutorial}) => (
  <Paper style={pageStyle}>
    <List>
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
