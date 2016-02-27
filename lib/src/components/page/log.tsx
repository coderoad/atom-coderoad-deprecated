// import * as React from 'react';
// import {connect} from 'react-redux';
// import * as Action from '../../actions/actions';
// import {FlatButton, Popover} from 'material-ui';
//
// const logStyle = {
//   padding: '20px',
//   width: '50%'
// };
// // const useLog = false;
// const statusBar = document.getElementsByClassName('status-bar-left')[0];
//
// @connect(null, (dispatch, state) => {
//   return {
//     toggleLog: () => dispatch(Action.toggleLog())
//   };
// })
// export default class extends React.Component<{toggleLog: any}, {}> {
//   render() {
//     return (
//     {/* Log change to use page.log.use */}
//     <FlatButton onClick={this.props.toggleLog} label='Log' />
//     <Popover
//     style={logStyle}
//     open={log.open}
//     anchorEl={statusBar}
//     anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
//     targetOrigin={{horizontal: 'left', vertical: 'top'}}
//     onRequestClose={this.props.toggleLog} >
//     <div>
//       <button style={{position: 'absolute', top: '-10px', right: '0px'}} onClick={this.props.toggleLog}>X</button>
//       <h3>{log.message}</h3>
//     </div>
//     </Popover>;
//   }
//   );
// };
