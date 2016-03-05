import * as React from 'react';
import {List, ListItem} from 'material-ui';
import {MarkdownText} from '../_components';
import {createPackageJson} from '../../services/start';
import {openFolder} from '../../atom/editor';

export const SetupGuide = () => {
  let warnings = [];

  // no project
  if (!window.coderoad.dir) {
    warnings.push({
      key: 'noProject',
      title: 'Create an Atom Project',
      click: openFolder,
      text: 'File > Open > a workspace folder'
    });
  }
  // no package.json
  if (!window.coderoad.setup.hasPackageJson) {
    warnings.push({
      key: 'noPackageJson',
      title: 'Create a `package.json` file',
      click: createPackageJson,
      text: '`npm init`'
    });
  }
  // no tutorial installed
  if (this.props.tutorials.length < 1) {
    warnings.push({
      key: 'noTutorial',
      title: 'Install a Tutorial',
      click: null,
      text: '`npm i --save coderoad-functional-school`'
    });
  }
  return (
    <div className='setup'>
      <List subheader='Setup'>

      {warnings.map((w) =>  <ListItem key={w.key}
        primaryText={w.title}
        onClick={w.click}>
          <MarkdownText text={w.text} />
          </ListItem>)}

      </List>
    </div>);
};
