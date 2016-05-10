import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {List} from 'material-ui/List';
import {Card} from 'material-ui/Card';
import Subheader from 'material-ui/Subheader';
import Task from '../Task';
import {lightGreen200} from 'material-ui/styles/colors';
import TasksComplete from '../TasksComplete';

function visibleTasks(tasks: CR.Task[], taskPosition: number): CR.Task[] {
  return tasks.slice(0, taskPosition + 1);
}

const margin = '10px 5px';

export default class Tasks extends React.Component<{
    tasks: CR.Task[], taskPosition: number,
    testRun: boolean, completed: boolean, page: CR.Page
}, {}> {
  refs: {
    [key: string]: (Element);
    listEnd: Element;
  };
  componentDidUpdate() {
    ReactDOM.findDOMNode<HTMLElement>(this.refs.listEnd).scrollIntoView();
  }
  render() {
    const {tasks, taskPosition, testRun, completed, page} = this.props;
    const visTasks = visibleTasks(tasks, taskPosition);
    const backgroundColor = completed ? lightGreen200 : 'white';
    return (
    <div>
      <Card style={{backgroundColor, margin}}>
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

        <TasksComplete
          page={page}
          completed={completed}
        />

        <div ref='listEnd' />
    </div>
    );
  }
}
