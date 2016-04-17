import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import {Card} from 'material-ui/Card';
import {PageContent} from './PageContent';
import {Tasks} from './Tasks';
import {Hints} from './Hints';
import {PageCompleteMessage} from './PageComplete';
import {PageToolbar} from './PageToolbar';
import {ProgressBar} from './ProgressBar';

const pageStyle = {
  height: '100%',
  width: '100%'
};

export class Page extends React.Component<{
  page: CR.Page, tasks: CR.Task[], taskPosition: number, hintPosition: number,
  testRun: boolean, callNextPage?: any, callRunTests?: any, callNextTask?: any, hintShow?: any
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

// <Paper style={pageStyle} zDepth={1} className='cr-page' ref='page'>
  return (
    <section className='cr-page'>
    <PageContent {...this.props} />

    <Tasks {...this.props} />
    <div className='listEnd' ref='listEnd'></div>

    <PageCompleteMessage page={page} />
    <Hints task={task} hintPosition={hintPosition} />
    <PageToolbar {...this.props}>
      <ProgressBar taskPosition={taskPosition} taskCount={tasks.length}/>
    </PageToolbar>
    </section>
  );
  }
}
