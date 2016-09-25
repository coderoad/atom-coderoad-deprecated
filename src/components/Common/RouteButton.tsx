import * as React from 'react';
import {connect} from 'react-redux';

import {routeSet} from '../../actions';
import RaisedButton from 'material-ui/RaisedButton';

class RouteButton extends React.Component<{
  label: string, route: string, routeSet: any, style: React.CSSProperties
}, {}> {
  public render() {
    const {label, route, style, routeSet} = this.props;
    return (
        <RaisedButton
          label={label}
          style={style || {}}
          onTouchTap={routeSet.bind(this, route)}
          secondary={true}
        />
    );
  }
}

// RouteButton.propTypes = {
//   label: React.PropTypes.string,
//   route: React.PropTypes.string,
//   routeSet: React.PropTypes.func.optional,
//   style: React.PropTypes.object.optional,
// };

const mapStateToProps = (state, props) => ({
  label: props.label,
  route: props.route,
  style: props.style || {}
});
const mapDispatchToProps = {routeSet};

export default connect(mapStateToProps, mapDispatchToProps)(RouteButton);