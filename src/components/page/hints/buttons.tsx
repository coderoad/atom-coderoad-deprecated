import * as React from 'react';
import {connect} from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import {setHintPosition} from '../../../actions/actions';

@connect(null, (dispatch, state) => {
  return {
    setHint: (position: number) => dispatch(setHintPosition(position))
  };
})
export class HintButton extends React.Component<{
  hintPosition: number, hintsLength: number, label: string, direction: number,
  nextHint?: any
}, {}> {
  render() {
    const {hintPosition, hintsLength, label, direction, nextHint} = this.props;
    return <FlatButton label={label} disabled={hintPosition > hintsLength - 2}
      onTouchTap={nextHint.bind(this, hintPosition + direction)} />;
  }
}
