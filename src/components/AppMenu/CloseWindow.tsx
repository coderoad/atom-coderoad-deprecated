import * as React from 'react';
import {connect} from 'react-redux';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import {windowToggle} from '../../actions';

@connect(null, { windowToggle })
export default class CloseWindow extends React.Component<{
  windowToggle?: any}, {}> {
  render() {
    return (
      <IconButton onClick={this.props.windowToggle}>
        <NavigationClose color='white'/>
      </IconButton>
    );
  }
}
