import * as React from 'react';
import {connect} from 'react-redux';
import Divider from 'material-ui/Divider';
import {Card} from 'material-ui/Card';
import {ContentCard} from '../index';
import Tasks from './Tasks';
import Hints from './Hints';
import PageToolbar from './PageToolbar';
import ProgressBar from './ProgressBar';

const styles = {
  width: '100%',
  overflowY: 'scroll',
};

@connect(state => ({
  page: state.page,
  tasks: state.tasks,
  taskPosition: state.taskPosition,
  hintPosition: state.hintPosition,
  testRun: state.testRun,
  progress: state.progress,
  pagePosition: state.pagePosition,
}))
export default class Page extends React.Component<{
  page?: CR.Page, tasks?: CR.Task[], taskPosition?: number,
  hintPosition?: number, testRun?: boolean,
  progress?: CR.Progress, pagePosition?: number
}, {}> {
  render() {
    const {page, tasks, taskPosition, hintPosition, testRun, progress, pagePosition} = this.props;
    const task = taskPosition <= tasks.length ? tasks[taskPosition] : null;
    const completed = progress.pages[pagePosition];
    return (
      <section style={styles} className='cr-page'>
        <ContentCard
          title={page.title}
          content={page.description}
        />

        <Tasks
          tasks={tasks}
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
            taskLength={tasks.length}
            taskPosition={taskPosition}
            completed={completed}
          />
        </PageToolbar>
      </section>
    );
  }
}
