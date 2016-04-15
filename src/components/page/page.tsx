import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import {PageContent} from './content';
import {Tasks} from './task/task';
import Hints from './hint/hint';
import {PageCompleteMessage} from './complete/page-complete';
import {PageToolbar} from './toolbar/toolbar';

const pageStyle = {
  height: '100%',
  width: '100%'
};

export default class extends React.Component<{
  page: CR.Page, tasks: CR.Task[], taskPosition: number,
  editorActions: string[], log: any, hintPosition: number,
  runTests: boolean, callNextPage?: any, callRunTests?: any, callNextTask?: any, showHint?: any
}, {hintPos: number, taskPos: number}> {

refs: {
  [key: string]: (Element);
  listEnd: Element;
};
componentDidUpdate() {
  ReactDOM.findDOMNode<HTMLElement>(this.refs.listEnd).scrollIntoView();
}
render() {
  const {page, taskPosition, hintPosition, tasks, runTests} = this.props;
  const currentTask = taskPosition <= tasks.length ? tasks[taskPosition] : null;
  const allComplete = taskPosition >= tasks.length;

  return (
  <Paper style={pageStyle} zDepth={1} className='cr-page' ref='page'>
    <PageContent page={page} />
    <Divider />

    <Tasks tasks={tasks} taskPosition={taskPosition} runTests={runTests} />
    <div className='listEnd' ref='listEnd'></div>
    <Hints task={currentTask} hintPosition={hintPosition} />
    <PageCompleteMessage page={page} />
    <PageToolbar tasks={tasks} taskPosition={taskPosition} />
  </Paper>
  );
  }
}
