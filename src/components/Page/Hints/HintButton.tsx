import * as React from 'react';
import {connect} from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import {hintPositionSet} from '../../../actions';
import {hintsSelector} from 'core-coderoad';

@connect(state => ({
  hintPosition: state.hintPosition,
  hintsLength: hintsSelector(state).length,
}), {hintPositionSet})
export default class HintButton extends React.Component<{
  hintPosition?: number, hintsLength?: number, type: 'next'|'prev', label: string
  hintPositionSet?: any
}, {}> {
  render() {
    const {hintPosition, hintsLength, label, type, hintPositionSet} = this.props;
    switch (type) {
      case 'next':
      return (
        <FlatButton
          label={label}
          disabled={hintPosition > hintsLength - 2}
          onTouchTap={hintPositionSet.bind(this, hintPosition + 1)}
        />
      );
      case 'prev':
      return (
        <FlatButton
          label={label}
          disabled={hintPosition === 0}
          onTouchTap={hintPositionSet.bind(this, hintPosition - 1)}
        />
      );
    }
  }
}
