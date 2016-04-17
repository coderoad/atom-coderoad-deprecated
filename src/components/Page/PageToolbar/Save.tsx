import * as React from 'react';
import FlatButton from 'material-ui/FlatButton';
import {save} from '../../../atom/editor';

export const Save = () => (
  <FlatButton label='Save' secondary={true} onTouchTap={save} />
);
