import * as React from 'react';
import {connect} from 'react-redux';

import {tutorialSet} from '../../../actions';
import FlatButton from 'material-ui/FlatButton';

class SelectTutorial extends React.Component<{
  tutorial: Tutorial.Item, tutorialSet: any
}, {}> {
  public render() {
    const {tutorial, tutorialSet} = this.props;
    const {name, version} = tutorial;
    return (
      <FlatButton
        label={this.displayName(name)}
        primary={true}
        onTouchTap={tutorialSet.bind(this, {name, version})}
      />
    );
  }
  private displayName(name: string): string {
    switch (true) {
      case !!name.match(/^coderoad-tutorial-/): return name.slice(18);
      case !!name.match(/^coderoad-/): return name.slice(9);
      default: return name;
    }
  }
}

const mapStateToProps = (state, props) => ({
  tutorial: props.tutorial
});
const mapDispatchToProps = {tutorialSet};

export default connect(mapStateToProps, mapDispatchToProps)(SelectTutorial);
