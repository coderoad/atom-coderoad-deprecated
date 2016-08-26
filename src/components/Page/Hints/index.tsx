import * as React from 'react';
import {connect} from 'react-redux';

import {hintSelector} from '../../../selectors';
import {Markdown} from '../../index';
import HintButton from './HintButton';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import Help from 'material-ui/svg-icons/action/help';

const styles = {
  position: 'relative',
  margin: '5px auto 10px',
  width: '360px',
  textAlign: 'center',
};

@connect(state => ({
  hint: hintSelector(state),
}))
export default class Hints extends React.Component<{
  hintsLength?: number, hint?: string
}, {}> {
  public render() {
    const {hint} = this.props;
    if (!hint) {
      return null;
    }
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
        <CardActions
          style={{paddingBottom: '30px !important'}}
          expandable={true}
          className='cr-task-hints-actions'
        >
          <HintButton
            type='prev'
            label='Previous'
          />
          <HintButton
            type='next'
            label='Next'
          />
        </CardActions>
      </Card>
    );
  }
}
