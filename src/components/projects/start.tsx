'use strict';
import * as React from 'react';
import {Paper} from 'material-ui';
import {SetupGuide} from './setup';
import Tutorials from './tutorials';

export const Project = ({tutorials}) => (
  <Paper className='cr-projects'>
    <div className='cr-projects-header'>
      <span className='title'>CodeRoad</span>
      <p className='tagline'>Tutorials in the Editor</p>

      {window.coderoad.dir && window.coderoad.setup.hasPackageJson && tutorials.length > 0 ?
        <Tutorials tutorials={tutorials}/> : <SetupGuide />}

      <p className='notes'>Beta</p>
    </div>
  </Paper>
);
