import * as React from 'react';
import {connect} from 'react-redux';
import * as Action from '../../../actions/actions';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {Markdown} from '../../_components';

import Help from 'material-ui/svg-icons/action/help';

@connect(null, (dispatch, state) => {
  return {
    nextHint: (position: number) => dispatch(Action.setHintPosition(position)),
    prevHint: (position: number) => dispatch(Action.setHintPosition(position))
  };
})
export default class extends React.Component<{
  task: CR.Task, hintPosition: number,
  nextHint?: (pos: number) => void, prevHint?: (pos: number) => void
}, {}> {
  render() {
  const {task, hintPosition, nextHint, prevHint} = this.props;
  const hints = task && task.hints ? task.hints : null;
  if (hintPosition < 0 || !hints || !hints.length) {
    return <div></div>;
  }
  const hint = hints[hintPosition];
  return (
    <Card className='cr-task-hints'>
      <CardHeader
        title='Hints'
        avatar={<Help />}
        actAsExpander={true}
        showExpandableButton={true} />
      <CardText className='cr-task-hint' expandable={true}>
        <Markdown>{hint}</Markdown>
      </CardText>
      <CardActions expandable={true}>
        <FlatButton label='Previous' disabled={hintPosition < 1}
          onTouchTap={prevHint.bind(this, hintPosition - 1)} />
        <FlatButton label='Next' disabled={hintPosition > hints.length - 2}
          onTouchTap={nextHint.bind(this, hintPosition + 1)} />
      </CardActions>
    </Card>
    );
  }
}
