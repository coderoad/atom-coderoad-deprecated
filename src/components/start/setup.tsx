import * as React from 'react';
import {List, ListItem, RaisedButton} from 'material-ui';
import {MarkdownText} from '../_components';
import {verifySetupComplete} from '../../services/setup-checks';

export default class extends React.Component<{warning: CR.SetupWarning}, {}> {
  render() {
    const {warning} = this.props;
  return (
    <div className='cr-setup'>
      <List subheader='Setup'>
      <ListItem key={warning.key}
        onClick={warning.click}>
          <h4>{warning.title}</h4>
          <MarkdownText text={warning.text} />
          </ListItem>
      </List>
      {!!warning.verify ? <RaisedButton label={`Verify ${warning.verify}`} secondary={true} onTouchTap={verifySetupComplete} /> : null}

      <br/><br/>
      <div className='setup-guide'>
        <span>Check the
        <a href='https://coderoad.github.io/docs/#install'> Install Guide</a></span>
      </div>
    </div>);
  };
}
