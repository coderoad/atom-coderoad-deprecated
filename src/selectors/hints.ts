import {createSelector} from 'reselect';

import {currentTaskSelector} from './tasks';

export const hintsSelector = createSelector(
  currentTaskSelector,
  task => task && task.hints ? task.hints : []
);

export const hintSelector = createSelector(
  hintsSelector,
  state => state.hintPosition,
  (hints, hintPosition) => (hintPosition >= 0 && hints && hints.length) ?
      hints[hintPosition] : null
);
