import * as React from 'react';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import RaisedButton from 'material-ui/lib/raised-button';
import Subheader from 'material-ui/lib/Subheader';
import {MarkdownText} from '../_components';
import {verifySetupComplete} from '../../services/setup/setup';

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

    </div>
);
