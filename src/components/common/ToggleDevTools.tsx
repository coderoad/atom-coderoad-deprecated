import * as React from 'react';
import {connect} from 'react-redux';
import {editorDevToolsToggle} from '../../actions';
import FlatButton from 'material-ui/FlatButton';
import Code from 'material-ui/svg-icons/action/code';

const styles = {
  position: 'relative',
  top: '10px',
};

@connect(null, (dispatch, state) => {
  return {
    toggle: () => dispatch(editorDevToolsToggle())
  };
})
export default class ToggleDevTools extends React.Component<{
  toggle?: any
}, {}> {
  render() {
    return (
      <FlatButton
        style={styles}
        icon={
          <Code />
        }
        onTouchTap={this.props.toggle}
      />
    );
  };
}
