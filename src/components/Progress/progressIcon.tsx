import * as React from 'react';

import {green300, pink500} from 'material-ui/styles/colors';
import PlayCircleFilled from 'material-ui/svg-icons/av/play-circle-filled';
import CheckBox from 'material-ui/svg-icons/toggle/check-box';
import CheckBoxOutlineBlank from 'material-ui/svg-icons/toggle/check-box-outline-blank';

export default function progressIcon(
  pages: boolean[], index: number, pagePosition: number
) {
  switch (true) {
    // completed
    case pages[pagePosition]:
      return <CheckBox style={{fill: green300}} />;
    // current
    case index === pagePosition:
      return <PlayCircleFilled style={{fill: pink500}} />;
    // other
    default:
      return <CheckBoxOutlineBlank />;
  }
}
