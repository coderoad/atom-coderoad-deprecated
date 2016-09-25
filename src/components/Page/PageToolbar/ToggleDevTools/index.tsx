import * as React from 'react';
import {connect} from 'react-redux';

import {editorDevToolsToggle} from '../../../../actions';
import FlatButton from 'material-ui/FlatButton';
import Code from 'material-ui/svg-icons/action/code';

const styles: React.CSSProperties = {
  position: 'relative',
  top: '10px',
};

class ToggleDevTools extends React.Component<{
  editorDevToolsToggle?: any
}, {}> {
  public render() {
    return (
      <FlatButton
        style={styles}
        icon={<Code />}
        onTouchTap={this.props.editorDevToolsToggle}
      />
    );
  };
}

const mapDispatchToProps = {editorDevToolsToggle};

export default connect(null, mapDispatchToProps)(ToggleDevTools);