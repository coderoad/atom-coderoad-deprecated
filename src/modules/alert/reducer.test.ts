/// <reference path="../../typings/globals/jest/index.d.ts" />
/// <reference path="../../typings/common/global.d.ts" />

import reducer, { _alert, colors } from './index';
import { ALERT_OPEN, ALERT_REPLAY, ALERT_CLOSE } from './types';

describe('alert reducer', () => {

  // mock document.getElementsByClassName
  // as it used in styling the alert pop-up

  const originalDocument = global.document;

  beforeEach(() => {
    global.document = (<any>Object).assign(document, {
      getElementsByClassName: (selector) => [{
        style: {
          color: 'blue'
        }
      }]
    });
  });

  afterEach(() => {
    global.document = originalDocument;
  });

  it('should initialize the default alert', () => {
    const action = { type: 'unknown' };
    expect(reducer(undefined, action)).toEqual(_alert);
  });

  it('should open the alert on ALERT_OPEN', () => {
    const alert = { };
    const action = { type: ALERT_OPEN, payload: { alert } };
    expect(reducer({ open: false }, action).open).toBe(true);
  });

  it('should set the NOTE alert on ALERT_OPEN', () => {
    const alert = {
      message: 'a message',
      action: 'NOTE',
      duration: 1500,
    };
    const action = { type: ALERT_OPEN, payload: { alert } };
    const expected = {
      message: 'a message',
      action: 'NOTE',
      duration: 1500,
      open: true,
      color: colors.NOTE
    };
    expect(reducer({ open: false }, action)).toEqual(expected);
  });

  it('should set the FAIL alert on ALERT_OPEN', () => {
    const alert = {
      message: 'a message',
      action: 'FAIL',
      duration: 1500,
    };
    const action = { type: ALERT_OPEN, payload: { alert } };
    const expected = {
      message: 'a message',
      action: 'FAIL',
      duration: 1500,
      open: true,
      color: colors.FAIL
    };
    expect(reducer({ open: false }, action)).toEqual(expected);
  });

  it('should set the PASS alert on ALERT_OPEN', () => {
    const alert = {
      message: 'a message',
      action: 'PASS',
      duration: 1500,
    };
    const action = { type: ALERT_OPEN, payload: { alert } };
    const expected = {
      message: 'a message',
      action: 'PASS',
      duration: 1500,
      open: true,
      color: colors.PASS
    };
    expect(reducer({ open: false }, action)).toEqual(expected);
  });


  it('should open the alert on ALERT_REPLAY', () => {
    const alert = { };
    const action = { type: ALERT_REPLAY, payload: { alert } };
    expect(reducer({ open: false }, action).open).toBe(true);
  });

  it('should close the alert on ALERT_CLOSE', () => {
    const action = { type: ALERT_CLOSE };
    const alert = { open: true };
    expect(reducer(alert, action).open).toBe(false);
  });

});
