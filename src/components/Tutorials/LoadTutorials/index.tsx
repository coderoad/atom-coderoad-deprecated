import * as React from 'react';
import {connect} from 'react-redux';

import {tutorialsFind} from '../../../actions';
import FlatButton from 'material-ui/FlatButton';

class LoadTutorials extends React.Component<{
  tutorialsFind: any
}, {}> {
  public render() {
    const {tutorialsFind} = this.props;
    return (
      <FlatButton
        label='Check for Tutorials'
        secondary={true}
        onTouchTap={tutorialsFind}
      />
    );
  }
}

const mapDispatchToProps = {tutorialsFind};

export default connect(null, mapDispatchToProps)(LoadTutorials);
