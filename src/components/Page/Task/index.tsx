import * as React from 'react';
import {connect} from 'react-redux';

import {taskByIndexSelector} from '../../../selectors';
import {Markdown} from '../../index';
import TaskCheckbox from './taskCheckbox';
import {ListItem} from 'material-ui/List';
import {lightGreen200, orange200} from 'material-ui/styles/colors';

interface IStyles {
  task: React.CSSProperties;
  index: React.CSSProperties;
  description: React.CSSProperties;
};

const styles: IStyles = {
  task: {
    margin: '5px',
    padding: '5px',
    position: 'relative',
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

class Task extends React.Component<{
  task: CR.Task, index: number, testRun: boolean,
  isCurrentTask: boolean, isCompletedTask: boolean
}, {}> {
  public render() {
    const {testRun, task, index, isCurrentTask, isCompletedTask} = this.props;
    const backgroundColor = isCompletedTask ? lightGreen200 : 'inherit';
    return (
      <ListItem
        key={index}
        style={Object.assign({}, styles.task, {backgroundColor})}
      >
        <TaskCheckbox index={index} />
        <span style={styles.index}>{index + 1}.</span>
        <div style={styles.description}>
          <Markdown children={task.description} />
        </div>
      </ListItem>
    );
  }
}

const mapStateToProps = (state, props) => ({
  testRun: state.testRun,
  isCompletedTask: state.taskPosition > props.index,
  task: taskByIndexSelector(state, props)
});

export default connect(mapStateToProps)(Task);