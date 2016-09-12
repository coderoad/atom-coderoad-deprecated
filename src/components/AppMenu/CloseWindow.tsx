import * as React from 'react';
import {connect} from 'react-redux';

import {windowToggle} from '../../actions';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

class CloseWindow extends React.Component<{
  windowToggle?: any}, {}> {
  public render() {
    return (
      <IconButton onClick={this.props.windowToggle}>
        <NavigationClose color='white'/>
      </IconButton>
    );
  }
}

// CloseWindow.propTypes = {
//   windowToggle: React.PropTypes.func.optional,
// };

const mapDispatchToProps = { windowToggle };

export default connect(null, mapDispatchToProps)(CloseWindow);