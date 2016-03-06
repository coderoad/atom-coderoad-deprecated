import * as React from 'react';
import {List, ListItem, RaisedButton} from 'material-ui';
import {MarkdownText} from '../_components';

export default class extends React.Component<{warning: CR.SetupWarning}, {}> {
  render() {
    const {warning} = this.props;
  return (
    <div className='cr-setup'>
      <List subheader='Setup'>
      <ListItem key={warning.key}
        primaryText={warning.title}
        onClick={warning.click}>
          <MarkdownText text={warning.text} />
          </ListItem>
      </List>

      <br/><br/>
      <div className='setup-guide'>
        <span>Check the
        <a href='https://coderoad.github.io/docs/#install'> Install Guide</a></span>
      </div>
    </div>);
  };
}
