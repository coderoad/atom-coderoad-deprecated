import * as React from 'react';
import {MarkdownText} from '../_components';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Subheader from 'material-ui/lib/Subheader';
import {green500, orange500} from 'material-ui/lib/styles/colors';
import CheckBox from 'material-ui/lib/svg-icons/toggle/check-box';
import CheckBoxOutlineBlank from 'material-ui/lib/svg-icons/toggle/check-box-outline-blank';
import IndeterminateCheckBox from 'material-ui/lib/svg-icons/toggle/indeterminate-check-box';

function visibleTasks(tasks: CR.Task[], taskPosition: number) {
  return tasks.slice(0, taskPosition + 1);
}

const TaskCheckbox = ({index, taskPosition, runTests}) => {
  let icon = null;
  if (index < taskPosition) {
    icon = <CheckBox color={green500} />;
  } else if (index === taskPosition && runTests) {
    // TODO: loading animation inside of checkbox
    icon = <IndeterminateCheckBox color={orange500} />;
  } else {
    icon = <CheckBoxOutlineBlank />;
  }
  return <span className='cr-task-checkbox'>{icon}</span>;
};

const TaskIndex = ({index}) => (
  <span className='cr-task-index'>{index + 1}.</span>
);

const TaskContent = ({task}) => (
  <div className='cr-task-description'>
    <MarkdownText text={task.description} />
  </div>
);

export const Task = ({task, taskPosition, index, runTests}) => {
  const isCompleted = index < taskPosition;
  return (
    <ListItem key={index} className='cr-task' style={{backgroundColor: isCompleted ? '#c8e6c9' : 'inherit'}}>
        <TaskCheckbox index={index} taskPosition={taskPosition} runTests={runTests}/>
        <TaskIndex index={index} />
        <TaskContent task={task} />
      </ListItem>
    );
};

export const Tasks = ({tasks, taskPosition, runTests}) => {
  const visTasks = visibleTasks(tasks, taskPosition);

  return <List className='cr-tasks'>
      <Subheader>Tasks</Subheader>
      {visTasks.map((task, index) => <Task
        key={index}
        task={task}
        taskPosition={taskPosition}
        index={index}
        runTests={runTests} />)}
    </List>;
};
