import reducer, { _alert } from './index';

describe('alert reducer', () => {

  // mock document.getElementsByClassName
  // as it used in styling the alert pop-up

  const originalDocument = global.document;

  beforeEach(() => {
    global.document = Object.assign(document, {
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
    const action = { type: 'ALERT_OPEN', payload: { alert } };
    expect(reducer({ open: false }, action).open).toBe(true);
  });

  it('should open the alert on ALERT_REPLAY', () => {
    const alert = { };
    const action = { type: 'ALERT_REPLAY', payload: { alert } };
    expect(reducer({ open: false }, action).open).toBe(true);
  });

  it('should close the alert on ALERT_CLOSE', () => {
    const action = { type: 'ALERT_CLOSE' };
    const alert = { open: true };
    expect(reducer(alert, action).open).toBe(false);
  });

});
