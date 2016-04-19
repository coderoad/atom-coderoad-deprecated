import * as React from 'react';
import * as classnames from 'classnames';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import CheckBox from 'material-ui/svg-icons/toggle/check-box';
import {ProgressChapter} from './ProgressChapter';

const style = {
  width: '100%',
  margin: 0
};

export const Progress: React.StatelessComponent<{
  progress: CR.Progress, position: CR.Position
}> = ({progress, position}) => (
  <Paper
    style={style}
    zDepth={1}
    className='cr-progress'
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
