// import {expect} from 'chai';
// import {reducer} from '../../lib/store/';
//
// describe('Reducer:', () => {
//
//   it('should return the state if the action is not found', () => {
//     const action = {type: 'NON-EXISTING-ACTION' };
//     expect(reducer({}, action)).to.be.an('object');
//   });
//
// });

import test from 'ava';
import {
	reducer
} from '../../lib/store/index';

test('returns defaults if the action is not found', t => {
	const action = {
		type: 'NON-EXISTING-ACTION'
	};
	const state = reducer({}, action);
	console.log('STATE', state);
	t.is(typeof state, 'object');
});
