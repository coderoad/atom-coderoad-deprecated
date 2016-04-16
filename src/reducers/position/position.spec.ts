// import {expect} from 'chai';
// import {Map} from 'immutable';
// import {reducer, initialState} from '../../../lib/_base';
// import * as Action from '../../../lib/actions/_actions';
//
// xdescribe('position', () => {
//
//   xdescribe('PAGE_SET', () => {
//     it('sets the position', () => {
//       const position = { chapter: 1, page: 1, task: -1 };
//       const action = Action.pageSet(position);
//       expect(reducer(initialState, action).get('position').toJS())
//         .to.deep.equal(position);
//     });
//   });
//
//   describe('NEXT_TASK', () => {
//     it('increments the task', () => {
//       const position = { chapter: 0, page: 0, task: 1 };
//       const loadedState = initialState
//         .set('position', Map(position));
//       const action = Action.nextTask();
//       expect(reducer(loadedState, action).getIn(['position', 'task']))
//         .to.equal(2);
//     });
//   });
//
//   xdescribe('PREV_TASK', () => {
//     it('increments the task', () => {
//       const position = { chapter: 0, page: 0, task: 2 };
//       const loadedState = initialState
//         .set('position', Map(position));
//       const action = Action.prevTask();
//       expect(reducer(loadedState, action).getIn(['position', 'task']))
//         .to.equal(1);
//     });
//   });
//
//   xdescribe('POSITION_SET', () => {
//     it('sets the position', () => {
//       const nextPosition = { chapter: 1, page: 1, task: -1 };
//       const action = Action.positionSet(nextPosition);
//       expect(reducer(initialState, action).get('position').toJS())
//         .to.deep.equal(nextPosition);
//     });
//   });
//
// });
