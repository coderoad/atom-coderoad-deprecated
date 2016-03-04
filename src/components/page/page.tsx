'use strict';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Paper, Divider} from 'material-ui';
import PageContent from './content';
import {Tasks} from './task';
import Hints from './hint';
import {PageCompleteMessage} from './page-complete';
import PageToolbar from './toolbar';

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
constructor() {
  super();
}
componentDidUpdate() {
  ReactDOM.findDOMNode<HTMLElement>(this.refs.listEnd).scrollIntoView();
}
render() {
  const {page, taskPosition, hintPosition, tasks, runTests} = this.props;
  const currentTask = taskPosition <= tasks.length ? tasks[taskPosition] : null;
  const allComplete = taskPosition >= tasks.length;

  return (
  <Paper style={pageStyle} zDepth={1} className='cr-page'>
    <PageContent page={page} />
    <Divider />

    <Tasks tasks={tasks} taskPosition={taskPosition} runTests={runTests} />
    <Hints task={currentTask} hintPosition={hintPosition} />
    <PageCompleteMessage page={page} />
    <div ref='listEnd'></div>

    <PageToolbar tasks={tasks} taskPosition={taskPosition} hintPosition={hintPosition} />
  </Paper>
  );
  }
}
