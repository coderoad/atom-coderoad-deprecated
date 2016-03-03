// import * as React from 'react';
// import {LinearProgress, Toolbar, ToolbarGroup, RaisedButton, FlatButton} from 'material-ui';
// let Info = require(iconPath + 'action/info');
// let InfoOutline = require(iconPath + 'action/info-outline');
//
// const ProgressBar = ({taskProgress}) => <LinearProgress mode='determinate'
//  value={taskProgress} style={{height: '6px'}}/>;
//
//
// // taskProgress
// // currentTask
// // hintPos
// // sllComplete
// // displayHint()
// // callNextPage
// // callRunTests
//
// @connect(null, (dispatch, state) => {
//   return {
//     callNextPage: () => dispatch(Action.nextPage()),
//     callRunTests: () => dispatch(Action.runTests()),
//     toggleLog: () => dispatch(Action.toggleLog())
//   };
// })
// export default class extends React.Component<{}, {}> {
//   render() {
//     return {
//     <section className='cr-page-toolbar'>
//     <ProgressBar progress={taskProgress(taskPosition, tasks.length)} />
//     <Toolbar>
//       {currentTask && currentTask.hints && currentTask.hints.length ?
//       <ToolbarGroup float='left'>
//           {this.state.hintPos <= currentTask.hints.length - 2 ?
//           <FlatButton className='cr-task-showHint' icon={<InfoOutline/>} onClick={this.displayHint.bind(this, currentTask)}></FlatButton>
//           : <FlatButton className='cr-task-showHint-disabled' icon={<Info />} disabled={true} />}
//       </ToolbarGroup>
//       : null}
//       <ToolbarGroup float='right'>
//         {/* add log here */}
//
//         {/* check work || continue */}
//         {allComplete ?
//           <RaisedButton label='Continue' primary={true} onClick={this.props.callNextPage}/>
//           :
//           <RaisedButton label='Run' secondary={true} onClick={this.props.callRunTests}/>
//         }
//       </ToolbarGroup>
//     </Toolbar>
//     </section>
//   };
//   }
// }
