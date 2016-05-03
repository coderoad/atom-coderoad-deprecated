import * as React from 'react';
import {connect} from 'react-redux';
import {windowToggle} from '../../actions';
import {cyan500} from 'material-ui/styles/colors';

const styles = {
  backgroundColor: cyan500,
  width: '20px',
  height: atom.getSize().height,
};

@connect(null, (dispatch) => {
  return {
    windowToggle: () => dispatch(windowToggle())
  };
})
export class Hold extends React.Component<{
  windowToggle?: any;
}, {}> {
  render() {
    return <div style={styles} onTouchTap={this.props.windowToggle}/>;
  }
}
