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

// Page
function hintsShown(task: CR.Task, hintPos: number) {
  if (hintPos > -1 && task.hints && task.hints.length > 0) {
    return task.hints.slice(0, hintPos + 1);
  }
  return null;
}

function visibleTasks(tasks: CR.Task[], taskPosition: number) {
  return tasks.slice(0, taskPosition + 1);
}

const TaskCheckbox = ({index, taskPosition, runTests}) => {
  let icon = null;
  if (index < taskPosition) {
    icon = <Complete color={green500} />;
  } else if (index === taskPosition && runTests) {
    // TODO: loading animation inside of checkbox
    icon = <RunningTest color={orange500} />;
  } else {
    icon = <Incomplete />;
  }
  return (
  <span className='cr-task-checkbox'>
    {icon}
  </span>
);
};


import {Paper, LinearProgress, Toolbar, ToolbarGroup, RaisedButton, FlatButton} from 'material-ui';

import PageContent from './content';
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
    toggleLog: () => dispatch(Action.toggleLog())
  };
})
export default class extends React.Component<{
  page: CR.Page, tasks: CR.Task[], taskPosition: number,
  editorActions: string[], log: any,
  runTests: boolean, callNextPage?: any, callRunTests?: any, callNextTask?: any
}, {hintPos: number, taskPos: number}> {
constructor() {
  super();
  this.state = {
      hintPos: -1,
      taskPos: 0
  };
}
componentDidUpdate() {
  let taskPosition = this.props.taskPosition;
  if (taskPosition > 0 && taskPosition < this.props.tasks.length) {
    ReactDOM.findDOMNode<HTMLElement>(this.refs['task' + taskPosition]).scrollIntoView();
  }
  if (this.state.taskPos !== taskPosition) {
    this.setState({
      hintPos: -1,
      taskPos: taskPosition
    });
  } else if (this.state.hintPos > -1) {
    ReactDOM.findDOMNode<HTMLElement>(this.refs['hint' + this.state.hintPos]).scrollIntoView();
  } else if (this.props.page.completed && this.props.page.onPageComplete) {
    ReactDOM.findDOMNode<HTMLElement>(this.refs.onPageComplete).scrollIntoView();
  }
}
displayHint(task) {
  if (task && task.hints && task.hints.length) {
    if (this.state.hintPos < task.hints.length - 1) {
      this.setState({hintPos: this.state.hintPos += 1, taskPos: this.state.taskPos});
    }
  } else {
    this.setState({hintPos: -1, taskPos: this.state.taskPos});
  }
}
// hintsShown(task) {
//   if (this.state.hintPos > -1 && task.hints && task.hints.length > 0) {
//     return task.hints.slice(0, this.state.hintPos + 1);
//   }
//   return null;
// }
render() {
  let page = this.props.page;
  let taskPosition = this.props.taskPosition;
  let tasks = visibleTasks(this.props.tasks, taskPosition);
  var currentTask = taskPosition <= tasks.length ? tasks[taskPosition] : null;
  // let log = this.props.log;
  let allComplete = taskPosition >= tasks.length;

  return (
  <Paper style={style} zDepth={1} className='cr-page'>
    {/* Content */}
    <PageContent page={page} />

    <Divider />

    {/* Task List (tasks, isComplete) */}
     <List subheader='Tasks' className='cr-tasks' ref='tasks'>
        {tasks.map((task: CR.Task, index) => {
          let isCurrentTask = index === taskPosition;
          let isDisabledTask = index > taskPosition;
          let isCompletedTask = index < taskPosition;
          let isFinalTask = index >= tasks.length - 1;
          let hints = hintsShown(task, this.state.hintPos);
          return (
          <div>
              <ListItem
                ref={'task' + index}
                className={classnames({
                  'cr-task': true,
                  'isCompletedTask': isCompletedTask,
                  'isCurrentTask': isCurrentTask,
                  'isDisabledTask': isDisabledTask
                })} >
                    <TaskCheckbox index={index} taskPosition={taskPosition} runTests={this.props.runTests}/>
                    <span className='cr-task-index'>{index + 1}.</span>
                    <div className='cr-task-description'><MarkdownText text={task.description} />
                    </div>
              </ListItem>
              {isCurrentTask && hints ?
                hints.map((hint, indexHint) => {
                  return <ListItem className='cr-task-hint' ref={'hint' + indexHint}>
                    <div class='cr-task-hint-box'>
                      <span className='cr-task-hint-index'>{indexHint + 1}.</span>
                      <div className='cr-task-hint-description'><MarkdownText text={hint} /></div>
                    </div>
                  </ListItem>;
                })
              : null}
              {isFinalTask ? null : <Divider />}
            </div>
          );
        })
      }
      {page.completed && !!page.onPageComplete ? <ListItem className='cr-task-onComplete' ref='onPageComplete'>
        <div className='cr-task-onComplete-description'>
          <MarkdownText text={page.onPageComplete} />
        </div>
      </ListItem> : null}
    </List>

    {/* Options */}
    <section className='cr-page-toolbar'>
    <LinearProgress mode='determinate' value={taskProgress(taskPosition, tasks.length)} style={{height: '6px'}}/>
    <Toolbar>
      {currentTask && currentTask.hints && currentTask.hints.length ?
      <ToolbarGroup float='left'>
          {this.state.hintPos <= currentTask.hints.length - 2 ?
          <FlatButton className='cr-task-showHint' icon={<InfoOutline/>} onClick={this.displayHint.bind(this, currentTask)}></FlatButton>
          : <FlatButton className='cr-task-showHint-disabled' icon={<Info />} disabled={true} />}
      </ToolbarGroup>
      : null}
      <ToolbarGroup float='right'>
        {/* add log here */}

        {/* check work || continue */}
        {allComplete ?
          <RaisedButton label='Continue' primary={true} onClick={this.props.callNextPage}/>
          :
          <RaisedButton label='Run' secondary={true} onClick={this.props.callRunTests}/>
        }
      </ToolbarGroup>
    </Toolbar>
    </section>
  </Paper>
  );
  }
}
