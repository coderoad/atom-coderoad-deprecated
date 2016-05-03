import * as React from 'react';
import {connect} from 'react-redux';
import {windowToggle} from '../../actions';
import IconButton from 'material-ui/IconButton';
// import {Root} from '../root';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

@connect(null, (dispatch) => {
  return {
    windowToggle: () => dispatch(windowToggle())
  };
})
export class CloseWindow extends React.Component<{
  windowToggle?: any}, {}> {
  render() {
    return (
      <IconButton onClick={this.props.windowToggle}>
        <NavigationClose />
      </IconButton>
    );
  }
}
