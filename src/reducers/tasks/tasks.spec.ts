// import {expect} from 'chai';
// import {reducer, initialState} from '../../../lib/_base';
// import * as Action from '../../../lib/actions';
//
// xdescribe('Task Action: ', () => {
//
//   describe('PAGE_SET', () => {
//     it('initializes the tasks for the page', () => {
//       const position: Tut.Position = { chapter: 0, page: 1, task: -1 };
//       const action: Action = Action.pageSet(position);
//       expect(reducer(initialState, action).get('tasks').size)
//         .to.be.greaterThan(0);
//     });
//   });
//
//   describe('NEXT_TASK', () => {
//     // return TASK
//
//     it('calls NEXT_TASK again if next task is already complete', () => {
//       const state = initialState.setIn(['progress', 'chapter', 0, 'page', 0, 'task', 0, 'completed'], true);
//       const action = Action.nextTask();
//       expect(state.get('tasks').size).to.equal(0);
//       const nextState = reducer(state, action);
//       expect(nextState.get('tasks').size).to.equal(2);
//     });
//
//     // it('adds a single task watcher to the task watcher list');
//
//   });
//
// });
//   // Task -> Page -> Chapter -> Tutorial
