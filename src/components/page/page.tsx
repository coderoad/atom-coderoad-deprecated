'use strict';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import * as Action from '../../actions/actions';
const iconPath = 'material-ui/lib/svg-icons/';

// tasks
import {MarkdownText} from '../_components';
import {List, ListItem, Divider} from 'material-ui';
import {green500, orange500} from 'material-ui/lib/styles/colors';
import * as classnames from 'classnames';
let Complete = require(iconPath + 'toggle/check-box');
let Incomplete = require(iconPath + 'toggle/check-box-outline-blank');
let RunningTest = require(iconPath + 'toggle/indeterminate-check-box');


import {Paper, LinearProgress, Toolbar, ToolbarGroup, RaisedButton, FlatButton} from 'material-ui';

import PageContent from './content';
import {Tasks} from './task';
import {TaskHints} from './hint';
import {PageCompleteMessage} from './page-complete';
import PageToolbar from './toolbar';
// import PageToolbar from './toolbar';

let Info = require(iconPath + 'action/info');
let InfoOutline = require(iconPath + 'action/info-outline');

const style = {
  height: '100%',
  width: '100%'
};

function taskProgress(current: number, max: number) {
  return (current / max) * 100;
}

/**
 * Page Component
 * 	display page data
 */
@connect(null, (dispatch, state) => {
  return {
    callNextPage: () => dispatch(Action.nextPage()),
    callRunTests: () => dispatch(Action.runTests()),
    toggleLog: () => dispatch(Action.toggleLog()),
    showHint: (newHintPos) => dispatch(Action.setHintPosition(newHintPos))
  };
})
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
  const {taskPosition, hintPosition, tasks, page} = this.props;
  if (taskPosition > 0 && taskPosition < tasks.length) {
    ReactDOM.findDOMNode<HTMLElement>(this.refs.listEnd).scrollIntoView();
  }
  if (hintPosition > -1) {
    ReactDOM.findDOMNode<HTMLElement>(this.refs.listEnd).scrollIntoView();
  } else if (page.completed && page.onPageComplete) {
    ReactDOM.findDOMNode<HTMLElement>(this.refs.listEnd).scrollIntoView();
  }
}
displayHint(task) {
  const {hintPosition} = this.props;
  if (task && task.hints && task.hints.length) {
    if (hintPosition < task.hints.length - 1) {
      this.props.showHint(hintPosition + 1);
    }
  } else {
    this.props.showHint(-1);
  }
}
render() {
  const {page, taskPosition, hintPosition, tasks, runTests} = this.props;
  const currentTask = taskPosition <= tasks.length ? tasks[taskPosition] : null;
  const allComplete = taskPosition >= tasks.length;

  return (
  <Paper style={style} zDepth={1} className='cr-page'>
    {/* Content */}
    <PageContent page={page} />
    <Divider />

    <List subheader='Tasks' className='cr-page-list' ref='tasks'>
      <Tasks tasks={tasks} taskPosition={taskPosition} runTests={runTests} />
      <TaskHints task={currentTask} hintPosition={hintPosition} />
      <PageCompleteMessage page={page} />
      <div ref='listEnd'></div>
    </List>

    <PageToolbar tasks={tasks} taskPosition={taskPosition} hintPosition={hintPosition} />
  </Paper>
  );
  }
}
