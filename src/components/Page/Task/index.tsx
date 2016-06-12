import * as React from 'react';
import {connect} from 'react-redux';
import {Markdown} from '../../index';
import taskCheckbox from './taskCheckbox';
import {ListItem} from 'material-ui/List';
import {lightGreen200, orange200} from 'material-ui/styles/colors';

const styles = {
  task: {
    margin: '5px',
    padding: '5px',
    position: 'relative'
  },
  index: {
    position: 'absolute',
    top: '20px',
    left: '45px',
  },
  description: {
    backgroundColor: 'inherit',
    paddingTop: '-10px',
    paddingLeft: '55px',
    fontSize: '14px',
    lineHeight: '1.6',
  },
};

@connect((state, props) => ({
  testRun: state.testRun,
  isCurrentTask: state.taskPosition === props.index,
  isCompletedTask: state.taskPosition > props.index,
}))
export default class Task extends React.Component<{
  task: CR.Task, index: number, testRun?: boolean,
  isCurrentTask?: boolean, isCompletedTask?: boolean
}, {}> {
  render() {
    const {testRun, task, index, isCurrentTask, isCompletedTask} = this.props;
    const backgroundColor = isCompletedTask ? lightGreen200 : 'inherit';
    return (
      <ListItem
        key={index}
        style={Object.assign({}, styles.task, {backgroundColor})}
      >
        {taskCheckbox(isCurrentTask, testRun)}
        <span style={styles.index}>{index + 1}.</span>
        <div style={styles.description}>
          <Markdown >{task.description}</Markdown>
        </div>
      </ListItem>
    );
  }
}
