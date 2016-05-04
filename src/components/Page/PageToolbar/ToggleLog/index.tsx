import * as React from 'react';
import Code from 'material-ui/svg-icons/action/code';
import {connect} from 'react-redux';
import {devToolsToggle} from '../../../../actions';
import FlatButton from 'material-ui/FlatButton';

@connect(null, (dispatch, state) => {
  return {
    toggleDevTools: () => {
      dispatch(devToolsToggle());
    }
  };
})
export default class ToggleLog extends React.Component<{
  toggleDevTools?: any
}, {}> {
  render() {
    return (
      <FlatButton
        icon={
          <Code />
        }
        onTouchTap={this.props.toggleDevTools}
      />
    );
  };
}
