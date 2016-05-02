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
  progress: CR.Progress, position: CR.Position,
  info: Tutorial.Info, tutorial: CR.Tutorial
}> = ({progress, position, info, tutorial}) => (
  <Paper style={pageStyle}>
    <List>
      <Subheader>{info.name}</Subheader>
      {tutorial.pages.map((page: CR.Page, index: number) => (
        <ProgressPage
          key={index}
          index={index}
          page={page}
          position={position}
          progress={progress}
        />
     ))
    }
    </List>
  </Paper>
);
