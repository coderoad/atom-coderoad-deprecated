import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {List} from 'material-ui/List';
import {Card} from 'material-ui/Card';
import Subheader from 'material-ui/Subheader';
import Task from '../Task';
import {lightGreen200} from 'material-ui/styles/colors';
import {visibleTasksSelector, pageCompletedSelector} from '../../../selectors';

const margin = '10px 5px';

@connect(state => ({
  tasks: visibleTasksSelector(state),
  completed: pageCompletedSelector(state),
}))
export default class Tasks extends React.Component<{
    tasks?: CR.Task[], completed?: boolean, page?: CR.Page
}, {}> {
  refs: {
    [key: string]: (Element);
    listEnd: Element;
  };
  componentDidUpdate() {
    ReactDOM.findDOMNode<HTMLElement>(this.refs.listEnd).scrollIntoView();
  }
  render() {
    const {tasks, completed} = this.props;
    const backgroundColor = completed ? lightGreen200 : 'white';
    return (
      <Card style={{backgroundColor, margin}}>
        <List>
          <Subheader>Tasks</Subheader>

          {tasks.map((task: CR.Task, index: number) => (
            <Task
              key={index}
              index={index}
              task={task}
            />)
          )}

        </List>
        <div ref='listEnd' />
      </Card>
    );
  }
}
