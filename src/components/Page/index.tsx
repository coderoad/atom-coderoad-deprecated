import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Divider from 'material-ui/Divider';
import {Card} from 'material-ui/Card';
import {PageContent} from './PageContent';
import {Tasks} from './Tasks';
import {Hints} from './Hints';
import {PageComplete} from './PageComplete';
import {PageToolbar} from './PageToolbar';
import {ProgressBar} from './ProgressBar';

const styles = {
  height: '100%',
  width: '100%',
  position: 'relative',
  overflowY: 'scroll',
};

export class Page extends React.Component<{
  page: CR.Page, tasks: CR.Task[], taskPosition: number,
  hintPosition: number, testRun: boolean
}, {hintPos: number, taskPos: number}> {
refs: {
  [key: string]: (Element);
  listEnd: Element;
};
componentDidUpdate() {
  ReactDOM.findDOMNode<HTMLElement>(this.refs.listEnd).scrollIntoView();
}
render() {
  const {page, taskPosition, hintPosition, tasks, testRun} = this.props;
  const task = taskPosition <= tasks.length ? tasks[taskPosition] : null;
  const allComplete = taskPosition >= tasks.length;
  return (
    <section style={styles}>
      <PageContent {...this.props} />

      <Tasks
        {...this.props}
        completed={page.completed}
      />

      <div ref='listEnd' style={{marginBottom: '110px'}}/>

      <PageToolbar {...this.props}>
        <PageComplete {...this.props} />
        <Hints
          task={task}
          hintPosition={hintPosition}
          />
        <ProgressBar
          taskPosition={taskPosition}
          taskCount={tasks.length}
          completed={page.completed}
        />
      </PageToolbar>
    </section>
    );
  }
}
