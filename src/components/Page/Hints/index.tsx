import * as React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import {Markdown} from '../../index';
import {HintButton} from './HintButton';
import Help from 'material-ui/svg-icons/action/help';

const styles = {
  position: 'relative',
  margin: '-5px 20px',
  right: '10px',
  width: '360px',
  textAlign: 'center',
  zIndex: '0',
};

export const Hints: React.StatelessComponent<{
  task: CR.Task, hintPosition: number
}> = ({task, hintPosition}) => {
  const hints = task && task.hints ? task.hints : null;
  if (hintPosition < 0 || !hints || !hints.length) {
    return null;
  }
  const hint = hints[hintPosition];
  return (
    <Card style={styles}>
      <CardHeader
        title='Hints'
        avatar={<Help />}
        actAsExpander={true}
        showExpandableButton={true}
      />
      <CardText
        className='cr-task-hint'
        expandable={true}
      >
        <Markdown>{hint}</Markdown>
      </CardText>
      {hints.length > 1
        ? <CardActions
          style={{paddingBottom: '30px !important'}}
          expandable={true}
          className='cr-task-hints-actions'
        >
          <HintButton
            type='prev'
            label='Previous'
            hintPosition={hintPosition}
            hintsLength={hints.length}
          />
          <HintButton
            type='next'
            label='Next'
            hintPosition={hintPosition}
            hintsLength={hints.length}
          />
        </CardActions>
        : null
      }
    </Card>
    );
};
