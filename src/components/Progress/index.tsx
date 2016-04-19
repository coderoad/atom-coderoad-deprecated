import * as React from 'react';
import Paper from 'material-ui/Paper';
import {List} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import {ProgressChapter} from './ProgressChapter';

const pageStyle = {
  width: '100%',
  margin: 0
};

export const Progress: React.StatelessComponent<{
  progress: CR.Progress, position: CR.Position
}> = ({progress, position}) => (
  <Paper
    className='cr-progress'
    style={pageStyle}
    zDepth={1}
  >
    <List>
      <Subheader>Progress</Subheader>
      {progress.chapters.map((chapter: CR.Chapter, chapterIndex: number) => (
        <ProgressChapter
          chapter={chapter}
          chapterIndex={chapterIndex}
          position={position}
        />
    ))}
    </List>
  </Paper>
);
