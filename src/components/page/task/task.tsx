import * as React from 'react';
import {Markdown} from '../../_components';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import {green500, orange500} from 'material-ui/styles/colors';

import CheckBox from 'material-ui/svg-icons/toggle/check-box';
import CheckBoxOutlineBlank from 'material-ui/svg-icons/toggle/check-box-outline-blank';
import IndeterminateCheckBox from 'material-ui/svg-icons/toggle/indeterminate-check-box';

function visibleTasks(tasks: CR.Task[], taskPosition: number) {
  return tasks.slice(0, taskPosition + 1);
}

const TaskCheckbox: React.StatelessComponent<{
  index: number, taskPosition: number, runTests: boolean
}> = ({index, taskPosition, runTests}) => {
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

const TaskIndex: React.StatelessComponent<{
  index: number
}> = ({index}) => (
  <span className='cr-task-index'>{index + 1}.</span>
);

const TaskContent: React.StatelessComponent<{
  task: CR.Task
}> = ({task}) => (
  <div className='cr-task-description'>
    <Markdown>{task.description}</Markdown>
  </div>
);

export const Task: React.StatelessComponent<{
  task: CR.Task, taskPosition: number, index: number, runTests: boolean
}> = ({task, taskPosition, index, runTests}) => {
  const isCompleted = index < taskPosition;
  return (
    <ListItem key={index} className='cr-task' style={{backgroundColor: isCompleted ? '#c8e6c9' : 'inherit'}}>
        <TaskCheckbox index={index} taskPosition={taskPosition} runTests={runTests}/>
        <TaskIndex index={index} />
        <TaskContent task={task} />
      </ListItem>
    );
};

export const Tasks: React.StatelessComponent<{
  tasks: CR.Task[], taskPosition: number, runTests: boolean
}> = ({tasks, taskPosition, runTests}) => {
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
