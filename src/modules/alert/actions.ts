import {ALERT_CLOSE, ALERT_OPEN, ALERT_REPLAY} from './types';

/**
 * opens the alert
 * @param  {Object} alert
 * @returns alert
 */
export function alertOpen(alert: Object): Action {
  return { type: ALERT_OPEN, payload: { alert } };
}

/**
 * re-opens the alert
 * @returns ALERT_REPLAY
 */
export function alertReplay(): Action {
  return { type: ALERT_REPLAY };
}
/**
 * closes the alert
 * @returns ALERT_CLOSE
 */
export function alertClose(): Action {
  return { type: ALERT_CLOSE };
}
