import * as React from 'react';
import {connect} from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import {pageNext} from '../../../actions';

@connect(null, (dispatch, state) => {
  return {
    callNextPage: () => dispatch(pageNext())
  };
})
export class Continue extends React.Component<{
  callNextPage?: any
}, {}> {
  render() {
    return (
      <FlatButton
        label='Continue'
        primary={true}
        onTouchTap={this.props.callNextPage}
      />
    );
  }
}
