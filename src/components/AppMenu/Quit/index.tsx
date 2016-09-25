import * as React from 'react';
import {connect} from 'react-redux';

import {quit} from '../../../actions';
import MenuItem from 'material-ui/MenuItem';

interface IStyles {
  menuItem: React.CSSProperties;
};

const styles: IStyles = {
  menuItem: {
    textAlign: 'center',
    padding: '0px 2px',
  },
};

class Quit extends React.Component<{
  quit: () => Redux.ActionCreator<any>
}, {}> {
  public render() {
    return (
      <MenuItem
        style={styles.menuItem}
        key='quit'
        onClick={this.props.quit}
      >
        quit
      </MenuItem>
    );
  }
}

// Quit.propTypes = {
//   quit: React.PropTypes.func.optional,
// };

const mapDispatchToProps = {quit};

export default connect(null, mapDispatchToProps)(Quit)