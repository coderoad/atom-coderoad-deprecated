import * as React from 'react';
import {connect} from 'react-redux';

import {setupVerify} from '../../../actions';
import FlatButton from 'material-ui/FlatButton';

class VerifyButton extends React.Component<{
  setupVerify: any
}, {}> {
  public render() {
    return (
      <FlatButton
        label='Verify Setup Complete'
        primary
        onTouchTap={this.props.setupVerify}
      />
    );
  }
}

const mapDispatchToProps = {setupVerify};

export default connect(null, mapDispatchToProps)(VerifyButton);
