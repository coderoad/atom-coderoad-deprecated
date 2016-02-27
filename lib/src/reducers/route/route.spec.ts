import {expect} from 'chai';
import * as Action from '../../../lib/actions/actions';
import {reducer} from '../../../lib/_base';

describe('route', () => {

  describe('SET_ROUTE', () => {
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
