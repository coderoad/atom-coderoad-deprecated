import * as React from 'react';
import Divider from 'material-ui/Divider';
import {Card} from 'material-ui/Card';
import {PageContent} from './PageContent';
import {Tasks} from './Tasks';
import {Hints} from './Hints';
import {PageToolbar} from './PageToolbar';
import {ProgressBar} from './ProgressBar';

const styles = {
  width: '100%',
  overflowY: 'scroll',
};

export const Page: React.StatelessComponent<{
  page: CR.Page, tasks: CR.Task[], taskPosition: number,
  hintPosition: number, testRun: boolean
}> = ({page, taskPosition, hintPosition, tasks, testRun}) => {
  const task = taskPosition <= tasks.length ? tasks[taskPosition] : null;
  const completed = page.completed;
  return (
    <section style={styles} className='cr-page'>
      <PageContent page={page} />

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
};
