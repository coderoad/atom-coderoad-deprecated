import {QUIT, WINDOW_TOGGLE} from './types';

/**
 * Toggle window open action
 * @returns Action
 */
export function windowToggle(): Action {
  return { type: WINDOW_TOGGLE };
}

/**
 * Toggle window closed action
 * @returns Action
 */
export function quit(): Action {
  return { type: QUIT };
}
