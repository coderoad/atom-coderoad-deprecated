// import * as React from 'react';
// import {MarkdownText} from '../_components';
// import {List, ListItem, Divider} from 'material-ui';
// import {green500, orange500} from 'material-ui/lib/styles/colors';
// import * as classnames from 'classnames';
// const iconPath = 'material-ui/lib/svg-icons/';
// let Complete = require(iconPath + 'toggle/check-box');
// let Incomplete = require(iconPath + 'toggle/check-box-outline-blank');
// let RunningTest = require(iconPath + 'toggle/indeterminate-check-box');
//
// function hintsShown(task: CR.Task, hintPos: number) {
//   if (hintPos > -1 && task.hints && task.hints.length > 0) {
//     return task.hints.slice(0, hintPos + 1);
//   }
//   return null;
// }
//
// function visibleTasks(tasks: CR.Task[], taskPosition: number) {
//   return tasks.slice(0, taskPosition + 1);
// }
//
// const TaskCheckbox = ({index, taskPosition, runTests}) => {
//   let icon = null;
//   if (index < taskPosition) {
//     icon = <Complete color={green500} />;
//   } else if (index === taskPosition && runTests) {
//     // TODO: loading animation inside of checkbox
//     icon = <RunningTest color={orange500} />;
//   } else {
//     icon = <Incomplete />;
//   }
//   return (
//   <span className='cr-task-checkbox'>
//     {icon}
//   </span>
// );
// };
//
// //
// export default function (props) {
//     const state = props.state; // TODO: remove state
//     props = props.props;
//     const tasks = visibleTasks(props.tasks, props.taskPosition);
//     const taskPosition = props.taskPosition;
//     return (
//     <List subheader='Tasks' className='cr-tasks' ref='tasks'>
//         {tasks.map((task: CR.Task, index) => {
//           let isCurrentTask = index === taskPosition;
//           let isDisabledTask = index > taskPosition;
//           let isCompletedTask = index < taskPosition;
//           let isFinalTask = index >= tasks.length - 1;
//           let hints = hintsShown(task, state.hintPos);
//     //       return (
//     //       <div>
//     //           <ListItem
//     //             ref={'task' + index}
//     //             className={classnames({
//     //               'cr-task': true,
//     //               'isCompletedTask': isCompletedTask,
//     //               'isCurrentTask': isCurrentTask,
//     //               'isDisabledTask': isDisabledTask
//     //             })} >
//     //
//     //                 {/*}<TaskCheckbox index={index} taskPosition={taskPosition} runTests={runTests} />*/}
//     //
//     //                 <span className='cr-task-index'>{index + 1}.</span>
//     //                 <div className='cr-task-description'><MarkdownText text={task.description} />
//     //                 </div>
//     //           </ListItem>
//     //           {/*isCurrentTask && hints ?
//     //             hints.map((hint, hintIndex) => {
//     //               return <ListItem className='cr-task-hint' ref={'hint' + hintIndex}>
//     //                 <div class='cr-task-hint-box'>
//     //                   <span className='cr-task-hint-index'>{hintIndex + 1}.</span>
//     //                   <div className='cr-task-hint-description'><MarkdownText text={hint} /></div>
//     //                 </div>
//     //               </ListItem>;
//     //             })
//     //           : null*/}
//     //           {/*isFinalTask ? null : <Divider />*/}
//     //         </div>
//     //       );
//     //     })
//     //   }
//     //   {/*page.completed && !!page.onPageComplete ? <ListItem className='cr-task-onComplete' ref='onPageComplete'>
//     //     <div className='cr-task-onComplete-description'>
//     //       <MarkdownText text={page.onPageComplete} />
//     //     </div>
//     //   </ListItem> : null*/}
//     // </List>
//   // );
// }
