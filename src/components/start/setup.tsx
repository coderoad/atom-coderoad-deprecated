import * as React from 'react';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import RaisedButton from 'material-ui/lib/raised-button';
import Subheader from 'material-ui/lib/Subheader';
import {MarkdownText} from '../_components';
import {verifySetupComplete} from '../../services/setup/setup';

// export default class extends React.Component<{warning: CR.SetupWarning}, {}> {
//   render() {
export const SetupGuide = ({warning}) => (
    <div className='cr-setup'>
      <List>
      <Subheader>Setup</Subheader>
      <ListItem key={warning.key}>
          <h4>{warning.title}</h4>
          <MarkdownText text={warning.text} />
          </ListItem>
      </List>
      <br />
      {!!warning.button ? <div class='cr-setup-action'>
        <RaisedButton primary={true} label={warning.button} onTouchTap={warning.click}/>
        <br /><br />
        </div> : null}

      {!!warning.verify ? <div class='cr-setup-action'>
      <RaisedButton label={`Verify ${warning.verify}`} secondary={true} onTouchTap={verifySetupComplete} /><br /><br />
      </div> : null}

      <div className='setup-guide'>
        <span>Check the
        <a href='https://coderoad.github.io/docs#install'> <strong>Install Guide</strong></a></span>
      </div>
    </div>
);
