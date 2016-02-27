import {expect} from 'chai';
import {store} from '../../lib/_base';

describe('Store:', () => {

  it('is a Redux store configured with the correct reducer', () => {
    expect(typeof store.getState()).to.equal('object');
  });

});
