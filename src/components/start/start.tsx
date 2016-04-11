'use strict';
import * as React from 'react';
import Paper from 'material-ui/lib/paper';
import RaisedButton from 'material-ui/lib/raised-button';
import SetupGuide from './setup';
import Tutorials from './tutorials';

export const Start = ({tutorials, warning}) => (
  <Paper className='cr-start'>
    <div className='cr-start-header'>
      <span className='title'>CodeRoad</span>
      <p className='tagline'>Tutorials in the Editor</p>
      <p className='version'>Beta</p>

      {!warning ? <Tutorials tutorials={tutorials}/> : <SetupGuide warning={warning} />}

    </div>
  </Paper>
);
