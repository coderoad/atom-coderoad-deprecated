import * as React from 'react';
import {connect} from 'react-redux';

import {setupVerify} from '../../../actions';
import FlatButton from 'material-ui/FlatButton';

@connect(null, {setupVerify})
export default class VerifyButton extends React.Component<{
  setupVerify?: any
}, {}> {
  render() {
    return (
      <FlatButton
        label='Verify Setup Complete'
        primary
        onTouchTap={this.props.setupVerify}
      />
    );
  }
}
