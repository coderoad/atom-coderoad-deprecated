import * as React from 'react';
import FlatButton from 'material-ui/FlatButton';
import {setupVerify} from '../../../actions';
import {connect} from 'react-redux';

@connect(null, (dispatch) => {
  return {
    verify: () => dispatch(setupVerify())
  };
})
export default class VerifyButton extends React.Component<{
  verify?: any
}, {}> {
  render() {
    return (
      <FlatButton
        label='Verify Setup Complete'
        primary={true}
        onTouchTap={this.props.verify}
      />
    );
  }
}
