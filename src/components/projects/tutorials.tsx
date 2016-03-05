import * as React from 'react';
import {List, ListItem, RaisedButton} from 'material-ui';
import {MarkdownText} from '../_components';
import {connect} from 'react-redux';
import * as Action from '../../actions/actions';

@connect(null, (dispatch) => {
  return {
    selectProject: (name: string) => {
      Action.loadTutorial(name);
      dispatch(Action.setRoute('progress'));
    },
    toggleAlert: (item: CR.Alert): void => {
      dispatch(Action.toggleAlert(item));
    },
    loadTutorials: () => {
      dispatch(Action.loadTutorials());
    }
  };
})
export default class extends React.Component<{
  tutorials: string[], loadTutorials?: () => void,
  selectProject?: (name: string) => void, toggleAlert?: (item: CR.Alert) => void
}, {}> {
    trim(name: string): string {
      if (name.match(/^coderoad-tutorial-/)) {
        return name.slice(18);
      }
      if (name.match(/^coderoad-/)) {
        return name.slice(9);
      }
      return name;
    }
  render() {
    const {loadTutorials, selectProject, toggleAlert} = this.props;
    return (
  <div className='cr-tutorials'>
    <List subheader='Tutorials' >

    {/* List of Tutorials */}
    {this.props.tutorials.map((tutorial: string, index) => {
    return (
      <ListItem
        key={index}
        primaryText={this.trim(tutorial)}
        onClick={selectProject.bind(this, tutorial)}/>);
      })}

    </List>

    <br />
    <RaisedButton label='Load Tutorials' secondary={true} onTouchTap={loadTutorials} />
  </div>
    );
  }
}
