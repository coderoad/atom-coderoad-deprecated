import {WINDOW_TOGGLE, DEVTOOLS_TOGGLE, QUIT} from './_types';

export function windowToggle(): Action {
  return { type: WINDOW_TOGGLE };
}

export function devToolsToggle(): Action {
  return { type: DEVTOOLS_TOGGLE };
}

export function quit(): Action {
  return { type: QUIT };
}
