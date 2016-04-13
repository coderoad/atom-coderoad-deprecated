import {expect} from 'chai';
import {reducer} from '../../lib/store/';

describe('Reducer:', () => {

  it('should return the state if the action is not found', () => {
    const action = {type: 'NON-EXISTING-ACTION' };
    expect(reducer({}, action)).to.be.an('object');
  });

});
