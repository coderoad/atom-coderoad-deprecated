import * as React from 'react';
import {connect} from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import {routeSet} from '../../actions';

@connect(null, {routeSet})
export default class RouteButton extends React.Component<{
  label: string, route: string, routeSet?: any, style?: Object
}, {}> {
  render() {
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
