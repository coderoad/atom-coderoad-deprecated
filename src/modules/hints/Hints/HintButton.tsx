import * as React from 'react';
import {connect} from 'react-redux';

import {hintPositionSet} from '../actions';
import FlatButton from 'material-ui/FlatButton';

@connect(null, (dispatch) => {
  return {
    hintSet: (position: number) => dispatch(hintPositionSet(position)),
  };
})
export default class HintButton extends React.Component<{
  hintPosition: number, hintsLength: number, type: 'next'|'prev', label: string
  hintSet?: any
}, {}> {
  public render() {
    const {hintPosition, hintsLength, label, type, hintSet} = this.props;
    switch (type) {
      case 'next':
      return (
        <FlatButton
          label={label}
          disabled={hintPosition > hintsLength - 2}
          onTouchTap={hintSet.bind(this, hintPosition + 1)}
        />
      );
      case 'prev':
      return (
        <FlatButton
          label={label}
          disabled={hintPosition === 0}
          onTouchTap={hintSet.bind(this, hintPosition - 1)}
        />
      );
      default:
        return null;
    }
  }
}
