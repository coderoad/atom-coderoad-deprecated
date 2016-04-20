import * as React from 'react';
import {Markdown} from '../../index';
import {TaskCheckbox} from './TaskCheckbox';
import {ListItem} from 'material-ui/List';

export const Task: React.StatelessComponent<{
  task: CR.Task, taskPosition: number, index: number, testRun: boolean
}> = ({task, taskPosition, index, testRun}) => {
  const isCompleted = index < taskPosition;
  return (
    <ListItem
      key={index}
      className='cr-task'
      style={{backgroundColor: isCompleted ? '#c8e6c9' : 'inherit'}}
    >
      <TaskCheckbox
        taskPosition={taskPosition}
        index={index}
        testRun={testRun}
      />
      <span className='cr-task-index'>{index + 1}.</span>
      <div className='cr-task-description'>
        <Markdown >{task.description}</Markdown>
      </div>
    </ListItem>
  );
};
