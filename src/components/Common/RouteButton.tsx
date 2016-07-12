import * as React from 'react';
import {connect} from 'react-redux';

import {routeSet} from '../../actions';
import RaisedButton from 'material-ui/RaisedButton';

@connect(null, {routeSet})
export default class RouteButton extends React.Component<{
  label: string, route: string, routeSet?: any, style?: Object
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

RouteButton.propTypes = {
  label: React.PropTypes.string,
  route: React.PropTypes.string,
  routeSet: React.PropTypes.func.optional,
  style: React.PropTypes.object.optional,
};
