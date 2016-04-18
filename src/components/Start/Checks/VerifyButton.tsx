import * as React from 'react';
import FlatButton from 'material-ui/FlatButton';
import {store} from '../../../store/store';
import {setupVerify} from '../../../actions';
import {connect} from 'react-redux';

@connect(null, (dispatch) => {
  return {
    verify: () => store.dispatch(setupVerify())
  };
})
export class VerifyButton extends React.Component<{
  verify?: any
}, {}> {
  render() {
    return (
      <FlatButton
        label='Verify Setup Complete'
        primtary={true}
        onTouchTap={this.props.verify}
      />
    );
  }
}
