import * as React from 'react';
import {pink500} from 'material-ui/styles/colors';
import CheckBox from 'material-ui/svg-icons/toggle/check-box';
import PlayCircleFilled from 'material-ui/svg-icons/av/play-circle-filled';
import CheckBoxOutlineBlank from 'material-ui/svg-icons/toggle/check-box-outline-blank';

export function progressIcon(completed: boolean, current?: boolean) {
  if (completed) {
    return <CheckBox />;
  } else if (current) {
    return <PlayCircleFilled color={pink500} />;
  } else if (typeof current === 'undefined') {
    return null;
  } else {
    return <CheckBoxOutlineBlank />;
  }
};
