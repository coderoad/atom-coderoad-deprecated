import * as React from 'react';
import {connect} from 'react-redux';

import {routeSet} from '../../../actions';
import MenuItem from 'material-ui/MenuItem';

const styles = {
  textAlign: 'center',
  padding: '0px 2px',
};

class MenuLink extends React.Component<{
  route: string, title?: string, routeSet: any
}, {}> {
  public render() {
    const {route, title, routeSet} = this.props;
    return (
      <MenuItem
        style={styles}
        primaryText={title ? title : route}
        onTouchTap={routeSet.bind(this, route)}
        key={route}
      />
    );
  }
}

// MenuLink.propTypes = {
//   route: React.PropTypes.string,
//   title: React.PropTypes.string.optional,
//   routeSet: React.PropTypes.func.optional,
// };

const mapDispatchToProps = {routeSet};

export default connect()(MenuLink);