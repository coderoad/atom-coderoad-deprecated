import * as React from 'react';
import {connect} from 'react-redux';

import {hintSelector} from '../../../selectors';
import {Markdown} from '../../index';
import HintButton from './HintButton';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import Help from 'material-ui/svg-icons/action/help';

import {hintPositionSet} from '../../../actions';
import {hintsSelector} from '../../../selectors';

const styles: React.CSSProperties = {
  position: 'relative',
  margin: '5px auto 10px',
  width: '360px',
  textAlign: 'center',
};

class Hints extends React.Component<{
  hint: string, hintPosition: number, hintsLength: number, hintPositionSet: any,
}, {}> {
  public render(): any {
    const {hint, hintPosition, hintsLength, hintPositionSet} = this.props;
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
          <Markdown children={hint} />
        </CardText>
        <CardActions
          style={{paddingBottom: '30px !important'}}
          expandable={true}
          className='cr-task-hints-actions'
        >
          <HintButton
            type='prev'
            label='Previous'
            hintPosition={hintPosition}
            hintsLength={hintsLength}
            hintPositionSet={hintPositionSet}
          />
          <HintButton
            type='next'
            label='Next'
            hintPosition={hintPosition}
            hintsLength={hintsLength}
            hintPositionSet={hintPositionSet}
          />
        </CardActions>
      </Card>
    );
  }
}

const mapStateToProps = state => ({
  hint: hintSelector(state),
  hintPosition: state.hintPosition,
  hintsLength: hintsSelector(state).length,
});

const mapDispatchToProps = {hintPositionSet};

export default connect(mapStateToProps, mapDispatchToProps)(Hints);

