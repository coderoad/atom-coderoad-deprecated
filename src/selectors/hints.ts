import {createSelector} from 'reselect';
import {taskSelector} from './tasks';

export const hintsSelector = createSelector(
  taskSelector,
  task => task && task.hints ? task.hints : null
);

export const hintSelector = createSelector(
  hintsSelector,
  state => state.hintPosition,
  (hints, hintPosition) => (hintPosition >= 0 && hints && hints.length) ?
      hints[hintPosition] : null
);
