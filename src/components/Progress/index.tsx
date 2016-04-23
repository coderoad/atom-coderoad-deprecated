import * as React from 'react';
import Paper from 'material-ui/Paper';
import {List} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import {ProgressChapter} from './ProgressChapter';

const pageStyle = {
  width: '100%',
  margin: '0px',
};

export const Progress: React.StatelessComponent<{
  progress: CR.Progress, position: CR.Position, info: Tutorial.Info
}> = ({progress, position, info}) => (
  <Paper style={pageStyle}>
    <List>
      <Subheader>{info.title}</Subheader>
      {progress.chapters.map((chapter: CR.Chapter, chapterIndex: number) => (
        <ProgressChapter
          key={chapterIndex}
          chapter={chapter}
          chapterIndex={chapterIndex}
          position={position}
        />
    ))}
    </List>
  </Paper>
);
