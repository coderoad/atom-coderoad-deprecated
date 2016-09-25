import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {connect} from 'react-redux';

import {pageCompletedSelector, visibleTasksSelector} from '../../../selectors';
import Task from '../Task';
import {Card} from 'material-ui/Card';
import {List} from 'material-ui/List';
import {lightGreen200} from 'material-ui/styles/colors';
import Subheader from 'material-ui/Subheader';

const margin = '10px 5px';

class Tasks extends React.Component<{
    tasks: CR.Task[], completed: boolean, page: CR.Page
}, {}> {
  public refs: {
    [key: string]: (Element);
    listEnd: Element;
  };
  public render() {
    const {tasks, completed} = this.props;
    const backgroundColor = completed ? lightGreen200 : 'white';
    return (
      <Card style={{backgroundColor, margin}}>
        <List>
          <Subheader>Tasks</Subheader>

        {tasks.map((task, index: number) => <Task key={index} index={index} />)}

        </List>
        <div ref='listEnd' />
      </Card>
    );
  }
  private componentDidUpdate() {
    ReactDOM.findDOMNode<HTMLElement>(this.refs.listEnd).scrollIntoView();
  }
}

const mapStateToProps = state => ({
  tasks: visibleTasksSelector(state),
  completed: pageCompletedSelector(state),
});

export default connect(mapStateToProps)(Tasks);
