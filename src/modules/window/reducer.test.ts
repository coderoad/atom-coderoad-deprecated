import reducer from './reducer';

describe('window reducer', () => {

  it('should initialize false', () => {
    const action = { type: 'null' };
    expect(reducer(undefined, action)).toBe(false);
  });

  it('should set to false on QUIT', () => {
    const action = { type: 'QUIT' };
    expect(reducer(true, action)).toBe(false);
  });

  it('should toggle the WINDOW_TOGGLE', () => {
    const action = { type: 'WINDOW_TOGGLE' };
    expect(reducer(false, action)).toBe(true);
    expect(reducer(true, action)).toBe(false);
  });

});