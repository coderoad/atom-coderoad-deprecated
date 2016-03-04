import * as React from 'react';
import {connect} from 'react-redux';
import * as Action from '../../actions/actions';

import {Card, CardActions, CardHeader, CardText, FlatButton} from 'material-ui';
import {MarkdownText} from '../_components';

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
  console.log(hintPosition);
  if (hintPosition < 0 || !hints || !hints.length) {
    return <div></div>;
  } else {
  const hint = hints[hintPosition];
  return (
  <Card className='cr-task-hints'>
    <CardHeader
      title='Hints'
      actAsExpander={true}
      showExpandableButton={true} />
    <CardText className='cr-task-hint' expandable={true}>
      <MarkdownText text={hint} />
    </CardText>
    <CardActions expandable={true}>
      {hintPosition > 0 ? <FlatButton label='Previous' onClick={prevHint.bind(this, hintPosition - 1)} /> : null}
      {hintPosition < task.hints.length - 1 ? <FlatButton label='Next' onClick={nextHint.bind(this, hintPosition + 1)} /> : null }
    </CardActions>
  </Card>
  );
  }
}
}
