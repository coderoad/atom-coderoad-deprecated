import * as React from 'react';
import {ListItem} from 'material-ui';
import {MarkdownText} from '../_components';

function hintsShown(task: CR.Task, hintPosition: number) {
  if (hintPosition > -1 && task.hints && task.hints.length > 0) {
    return task.hints.slice(0, hintPosition + 1);
  }
  return null;
}

export const TaskHint = ({hint, index}) => (
  <ListItem className='cr-task-hint' key={'hint' + index}>
    <div class='cr-task-hint-box'>
      <span className='cr-task-hint-index'>{index + 1}.</span>
      <div className='cr-task-hint-description'>
        <MarkdownText text={hint} />
      </div>
    </div>
  </ListItem>
);

export const TaskHints = ({task, hintPosition}) => {
  const hints = hintsShown(task, hintPosition);
  return (
  <div className='cr-task-hints'>
    {hints ? hints.map((hint: string, index: number) => <TaskHint hint={hint} index={index} />) : null}
  </div>
);
};
