import * as React from 'react';
import {connect} from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import {setRoute, alertToggle, positionSet, tutorialSet} from '../../actions';

import TutorialPackage from '../../services/tutorial-package';

@connect(null, (dispatch) => {
  return {
    selectTutorial: (tutorial: CR.Tutorial) => {
      TutorialPackage.set(tutorial.name);
      dispatch(tutorialSet());
      dispatch(positionSet({chapter: 0, page: 0}));
      dispatch(setRoute('progress'));
    },
  };
})
export class SelectTutorial extends React.Component<{
  tutorial: CR.Tutorial, selectTutorial?: any
}, {}> {
  render() {
    const {tutorial, selectTutorial} = this.props;
    let name = tutorial.name;
    if (name.match(/^coderoad-tutorial-/)) {
      name = name.slice(18);
    } else if (name.match(/^coderoad-/)) {
      name = name.slice(9);
    }
    return (
      <FlatButton
        label={name}
        primary={true}
        onTouchTap={selectTutorial.bind(this, tutorial)}
      />
    );
  }
}
