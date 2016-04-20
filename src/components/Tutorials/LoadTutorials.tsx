import * as React from 'react';
import {connect} from 'react-redux';
import {tutorialsFind} from '../../actions';
import FlatButton from 'material-ui/FlatButton';

@connect(null, (dispatch) => {
  return {
    tutorialsFind: () => dispatch(tutorialsFind()),
  };
})
export class LoadTutorials extends React.Component<{
  tutorialsFind?: any
}, {}> {
  render() {
    return (
      <FlatButton
        style={{margin: '0 90px'}}
        label='Check for Tutorials'
        secondary={true}
        onTouchTap={this.props.tutorialsFind}
      />
    );
  }
}
