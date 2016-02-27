'use strict';
import * as React from 'react';
import {connect} from 'react-redux';
import * as Action from '../../actions/actions';
import {Paper, RaisedButton, List, ListItem} from 'material-ui';

@connect(null, (dispatch) => {
  return {
    selectProject: (name: string) => {
      Action.loadTutorial(name);
      dispatch(Action.setRoute('progress'));
    },
    toggleAlert: (item: cr.Alert): void => {
      dispatch(Action.toggleAlert(item));
    },
    loadTutorials: () => {
      dispatch(Action.loadTutorials());
    }
  };
})
export default class Projects extends React.Component<{
  tutorials: string[], toggleAlert?: any, selectProject?: any, loadTutorials?: any
}, {}> {
  load() {
    this.props.loadTutorials();
  }
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
    // let tutorials: string[] = getTutorials();
    return (
       <Paper className='cr-projects'>

         <div className='cr-projects-header'>
            <span className='title'>CodeRoad</span>
            <p className='tagline'>Tutorials in the Editor</p>


            <div className='cr-tutorials'>
            <List subheader='Tutorials' >

            {global.coderoad.dir ? null : <ListItem
                primaryText='Create an Atom Project'
                secondaryText='File > Open > any older' /> }

              {this.props.tutorials.length > 0 ?
                this.props.tutorials.map((tutorial: string) => {
              return (<ListItem
                  primaryText={this.trim(tutorial)}
                  onClick={this.props.selectProject.bind(this,
                    tutorial)}/>);
            }) : <ListItem primaryText='Try a Demo'
              secondaryText='npm i -s coderoad-functional-school'/>}

            </List>
            <br />
            <RaisedButton label='Load Tutorials' secondary={true} onClick={this.load.bind(this)} />
            </div>
            <p className='notes'>Beta</p>

         </div>
       </Paper>
    );
  }
};
