import * as React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import {Markdown} from '../../_components';
import {HintButton} from './buttons';
import Help from 'material-ui/svg-icons/action/help';

export const Hints: React.StatelessComponent<{
  task: CR.Task, hintPosition: number
}> = ({task, hintPosition}) => {
  const hints = task && task.hints ? task.hints : null;
  if (hintPosition < 0 || !hints || !hints.length) {
    return null;
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
        <HintButton label='Previous' hintPosition={hintPosition} hintsLength={hints.length} type='prev' />
        <HintButton label='Next' hintPosition={hintPosition} hintsLength={hints.length} type='next' />
      </CardActions>
    </Card>
    );
};
