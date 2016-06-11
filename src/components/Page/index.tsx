import * as React from 'react';
import {connect} from 'react-redux';
import Divider from 'material-ui/Divider';
import {Card} from 'material-ui/Card';
import {ContentCard} from '../index';
import Tasks from './Tasks';
import Hints from './Hints';
import PageToolbar from './PageToolbar';
import ProgressBar from './ProgressBar';
import {
  pageSelector, tasksSelector, pageCompletedSelector, taskSelector,
  taskProgressSelector
} from '../../selectors';

const styles = {
  width: '100%',
  overflowY: 'scroll',
};

@connect(state => ({
  page: pageSelector(state),
  tasks: tasksSelector(state),
  testRun: state.testRun,
  progress: state.progress,
  taskPosition: state.taskPosition,
  hintPosition: state.hintPosition,
  pagePosition: state.pagePosition,
  completed: pageCompletedSelector(state),
  task: taskSelector(state),
  taskProgress: taskProgressSelector(state),
}))
export default class Page extends React.Component<{
  page?: CR.Page, tasks?: CR.Task[], taskPosition?: number,
  hintPosition?: number, testRun?: boolean, task?: CR.Task
  progress?: CR.Progress, pagePosition?: number, completed?: boolean,
  taskProgress?: number
}, {}> {
  render() {
    const {page, tasks, taskPosition, hintPosition, testRun, progress,pagePosition, completed, task, visibleTasks, taskProgress} = this.props;
    return (
      <section style={styles} className='cr-page'>
        <ContentCard
          title={page.title}
          content={page.description}
        />

        <Tasks
          tasks={tasks.slice(0, taskPosition + 1)}
          taskPosition={taskPosition}
          testRun={testRun}
          completed={completed}
          page={page}
        />

        <PageToolbar
          tasks={tasks}
          taskPosition={taskPosition}
        >
          <Hints
            task={task}
            hintPosition={hintPosition}
            />
          <ProgressBar
            taskProgress={taskProgress}
            completed={completed}
          />
        </PageToolbar>
      </section>
    );
  }
}
