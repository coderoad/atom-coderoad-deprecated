import * as React from 'react';
import {Markdown} from '../index';
import * as classnames from 'classnames';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import CheckBox from 'material-ui/svg-icons/toggle/check-box';
import {ProgressPage} from './ProgressPage';

const style = {
  // height: '100%',
  width: '100%',
  margin: 0
};

export const Progress: React.StatelessComponent<{
  progress: CR.Progress, position: CR.Position
}> = ({progress, position}) => (
  <Paper style={style} zDepth={1} className='cr-progress'>
    <List>
      <Subheader>Progress</Subheader>
    {progress.chapters.map((chapter: CR.Chapter, chapterIndex: number) => {
      const isActive = chapterIndex === position.chapter;
      return <ListItem
          key={'c' + chapterIndex}
          className={classnames({
            'chapter': true,
            'isActive': isActive
          })}
          initiallyOpen={chapterIndex === 0}
          leftIcon={chapter.completed ? <CheckBox /> : null}
          primaryTogglesNestedList={chapterIndex === position.chapter && !chapter.completed}
          nestedItems={chapter.pages.map((page: CR.Page, pageIndex: number) => {
            const itemPosition = {chapter: chapterIndex, page: pageIndex};
            return <ProgressPage key={'c' + chapterIndex + 'p' + pageIndex} page={page} itemPosition={itemPosition} position={position}/>;
         })}>
            <h3>{chapterIndex + 1}. {chapter.title}</h3>
            <span className='chapter-description'>
              <Markdown>{chapter.description}</Markdown>
            </span>
         </ListItem>;
    })}
    </List>
  </Paper>
);
