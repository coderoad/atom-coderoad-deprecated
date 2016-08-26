import {QUIT, WINDOW_TOGGLE} from './types';

export function windowToggle(): Action {
  return { type: WINDOW_TOGGLE };
}

export function quit(): Action {
  return { type: QUIT };
}
