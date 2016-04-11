import * as React from 'react';
import {connect} from 'react-redux';
import * as Action from '../../actions/actions';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardText from 'material-ui/lib/card/card-text';
import FlatButton from 'material-ui/lib/flat-button';
import {MarkdownText} from '../_components';
import Help from 'material-ui/lib/svg-icons/action/help';

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
        <MarkdownText text={hint} />
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
