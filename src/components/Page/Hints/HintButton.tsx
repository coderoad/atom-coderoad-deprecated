import * as React from 'react';

import FlatButton from 'material-ui/FlatButton';

class HintButton extends React.Component<{
  hintPosition: number, hintsLength: number, type: 'next'|'prev',
  label: string, hintPositionSet: any
}, {}> {
  public render(): any {
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


export default HintButton;