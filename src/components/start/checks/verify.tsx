import * as React from 'react';
import FlatButton from 'material-ui/FlatButton';
import {store} from '../../../store/store';
import * as Action from '../../../actions/actions';
import {connect} from 'react-redux';

@connect(null, (dispatch) => {
  return {
    verify: () => store.dispatch(Action.verifySetup())
  };
})
export class VerifyButton extends React.Component<{
  verify?: any
}, {}> {
  render() {
    return <FlatButton label='Check Again' secondary={true} onTouchTap={this.props.verify} />;
  }
}
