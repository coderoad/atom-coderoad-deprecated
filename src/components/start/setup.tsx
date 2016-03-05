import * as React from 'react';
import {List, ListItem, RaisedButton} from 'material-ui';
import {MarkdownText} from '../_components';
import {fileExists} from '../../services/exists';
import * as path from 'path';
import {open, set, openFolder} from '../../atom/editor';

export const SetupGuide = ({tutorials}) => {
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
  if (tutorials.length < 1) {
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

      <br />
      <RaisedButton label='Verify Setup' secondary={true} onTouchTap={checkSetup} />
    </div>);
};

const packageData = `{
  "name": "demo",
  "dependencies": {
    "coderoad-functional-school": "^0.1.9"
  }
}`;

function createPackageJson() {
  const packagePath = path.join(window.coderoad.dir, 'package.json');
  return new Promise((resolve, reject) => {
    open(packagePath);
    setTimeout(function() {
      resolve();
    });
  }).then(function() {
    set(packageData);
    window.coderoad.setup.hasPackageJson = true;
  });
}

// verify package.json, tutorial installed
function checkSetup() {
  const packagePath = path.join(window.coderoad.dir, 'package.json');
  if (fileExists(packagePath)) {
    window.coderoad.setup.hasPackageJson = true;
  }

}
