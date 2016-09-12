import * as React from 'react';
import {connect} from 'react-redux';

import {hintPositionSet} from '../../../actions';
import {hintsSelector} from '../../../selectors';
import FlatButton from 'material-ui/FlatButton';

class HintButton extends React.Component<{
  hintPosition: number, hintsLength: number, type: 'next'|'prev',
  label: string, hintPositionSet: any
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
      default:
        return null;
    }
  }
}

const mapStateToProps = state => ({
  hintPosition: state.hintPosition,
  hintsLength: hintsSelector(state).length,
});

const mapDispatchToProps = {hintPositionSet};

export default connect(mapStateToProps, mapDispatchToProps)(HintButton);