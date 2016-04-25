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
  progress: CR.Progress, position: CR.Position,
  info: Tutorial.Info, tutorial: CR.Tutorial
}> = ({progress, position, info, tutorial}) => (
  <Paper style={pageStyle}>
    <List>
      <Subheader>{info.name}</Subheader>
      {tutorial.chapters.map((chapter: CR.Chapter, chapterIndex: number) => (
        <ProgressChapter
          key={chapterIndex}
          chapter={chapter}
          chapterIndex={chapterIndex}
          position={position}
          progress={progress}
        />
    ))}
    </List>
  </Paper>
);
