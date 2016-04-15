import * as React from 'react';
import {connect} from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Code from 'material-ui/svg-icons/action/code';

import {toggleDevTools} from '../../../atom/actions';
import {save} from '../../../atom/editor';
import {nextPage} from '../../../actions/actions';

export const ToggleLog = () => (
  <FlatButton icon={<Code />} onTouchTap={toggleDevTools} />
);

export const Save = () => (
  <FlatButton label='Save' secondary={true} onTouchTap={save} />
);

@connect(null, (dispatch, state) => {
  return {
    callNextPage: () => dispatch(nextPage())
  };
})
export class Continue extends React.Component<{
  callNextPage?: any
}, {}> {
  render() {
    return <RaisedButton label='Continue' primary={true} onTouchTap={this.props.callNextPage} />;
  }
}
