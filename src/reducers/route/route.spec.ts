import {expect} from 'chai';
import * as Action from '../../../lib/actions/_actions';
import {reducer} from '../../../lib/_base';

describe('route', () => {

  describe('ROUTE_SET', () => {
    it('changes the store path', () => {
      const action: Action = Action.setRoute('page');
      expect(reducer({}, action).route).to.equal('page');
    });

    it('updates an existing store path', () => {
      const state = {route: 'page'};
      const action: Action = Action.setRoute('progress');
      expect(reducer(state, action).route).to.equal('progress');
    });
  });

});
