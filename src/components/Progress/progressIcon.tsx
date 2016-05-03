import * as React from 'react';
import {pink500, green300} from 'material-ui/styles/colors';
import CheckBox from 'material-ui/svg-icons/toggle/check-box';
import PlayCircleFilled from 'material-ui/svg-icons/av/play-circle-filled';
import CheckBoxOutlineBlank from 'material-ui/svg-icons/toggle/check-box-outline-blank';

export function progressIcon(
  pages: boolean[], index: number, pagePosition: number
) {
  console.log(index, pagePosition);
  switch (true) {
    // current
    case index === pagePosition:
      return <PlayCircleFilled style={{fill: pink500}} />;
    // completed
    case pages[pagePosition]:
      return <CheckBox style={{fill: green300}} />;
    // other
    default:
      return <CheckBoxOutlineBlank />;
  }
}
