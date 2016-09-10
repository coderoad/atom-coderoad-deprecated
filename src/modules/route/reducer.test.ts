import route from './reducer';

describe('route reducer', () => {

  it('should set the initial route to "start"', () => {
    const action = { type: 'unknown'};
    expect(route(undefined, action)).toBe('start');
  });

  it('should trigger route changes on ROUTE_SET', () => {
    const action = { type: 'ROUTE_SET', payload: { route: 'next' } };
    expect(route(undefined, action)).toBe('next');
  });

  it('maintains existing route if no change', () => {
    const action = { type: 'unknown'};
    expect(route('current', action)).toBe('current');
  });

});