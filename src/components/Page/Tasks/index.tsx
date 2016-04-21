import * as React from 'react';
import {List} from 'material-ui/List';
import {Card} from 'material-ui/Card';
import Subheader from 'material-ui/Subheader';
import {Task} from './Task';
import {lightGreen200} from 'material-ui/styles/colors';



function visibleTasks(tasks: CR.Task[], taskPosition: number): CR.Task[] {
  return tasks.slice(0, taskPosition + 1);
}

export const Tasks: React.StatelessComponent<{
  tasks: CR.Task[], taskPosition: number,
  testRun: boolean, completed: boolean
}> = ({tasks, taskPosition, testRun, completed}) => {
  const visTasks = visibleTasks(tasks, taskPosition);
  const bg = completed ? lightGreen200 : 'white';
  return (
    <Card
      style={{margin: '10px 5px', backGroundColor: bg}}>
      <List>
        <Subheader>Tasks</Subheader>
        {visTasks.map((task: CR.Task, index: number) => (
          <Task
            key={index}
            index={index}
            task={task}
            taskPosition={taskPosition}
            testRun={testRun}
          />)
        )}
    </List>
    </Card>
  );
};
