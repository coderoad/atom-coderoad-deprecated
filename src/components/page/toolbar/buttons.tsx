import * as React from 'react';
import {connect} from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import Code from 'material-ui/svg-icons/action/code';

import {toggleDevTools} from '../../../atom/actions';
import {save} from '../../../atom/editor';
import {pageNext} from '../../../actions/_actions';

export const ToggleLog = () => (
  <FlatButton icon={<Code />} onTouchTap={toggleDevTools} />
);

export const Save = () => (
  <FlatButton label='Save' secondary={true} onTouchTap={save} />
);

@connect(null, (dispatch, state) => {
  return {
    callNextPage: () => dispatch(pageNext())
  };
})
export class Continue extends React.Component<{
  callNextPage?: any
}, {}> {
  render() {
    return <FlatButton label='Continue' primary={true} onTouchTap={this.props.callNextPage} />;
  }
}
