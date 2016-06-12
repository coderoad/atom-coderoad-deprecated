import * as React from 'react';
import {connect} from 'react-redux';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import {Markdown} from '../../index';
import HintButton from './HintButton';
import Help from 'material-ui/svg-icons/action/help';
import {hintsSelector, hintSelector} from '../../../selectors';

const styles = {
  position: 'relative',
  margin: '5px auto 10px',
  width: '360px',
  textAlign: 'center',
};

@connect(state => ({
  hints: hintsSelector(state),
  hint: hintSelector(state),
}))
export default class Hints extends React.Component<{
  hints?: string[], hint?: string
}, {}> {
  render() {
    const {hint, hints} = this.props;
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
        {hints.length > 1
          ? <CardActions
            style={{paddingBottom: '30px !important'}}
            expandable={true}
            className='cr-task-hints-actions'
          >
            <HintButton
              type='prev'
              label='Previous'
              hintsLength={hints.length}
            />
            <HintButton
              type='next'
              label='Next'
              hintsLength={hints.length}
            />
          </CardActions>
          : null
        }
      </Card>
    );
  }
}
