// import * as Action from '../../lib/actions/actions';
// import {expect} from 'chai';
//
// xdescribe('action creators: ', () => {
//
//   it('setProject', () => {
//     expect(Action.setProject('./path/to/file.js'))
//       .to.deep.equal({ type: 'SET_PROJECT', payload: { filePath: './path/to/file.js' } });
//   });
//
//   it('setPage with no input', () => {
//     expect(Action.setPage())
//       .to.deep.equal({ type: 'SET_PAGE', payload: { position: { chapter: 0, page: 0, task: 0 } } });
//   });
//
//   it('setPage with input', () => {
//     expect(Action.setPage({ chapter: 1, page: 1, task: 1 }))
//       .to.deep.equal({ type: 'SET_PAGE', payload: { position: { chapter: 1, page: 1, task: 1 } } });
//   });
//
//   it('setRoute', () => {
//     expect(Action.setRoute('page')).to.deep.equal({ type: 'SET_ROUTE', payload: { route: 'page' } });
//   });
//
//   it('setPosition', () => {
//     const position = { chapter: 0, page: 1, task: 2 };
//     const action = Action.setPosition(position);
//     expect(action).to.deep.equal({ type: 'SET_POSITION', payload: { position } });
//   });
//
//   it('nextTask', (taskLength: number) => {
//     const action = Action.nextTask();
//     expect(action).to.deep.equal({ type: 'NEXT_TASK', payload: { taskLength } });
//   });
//
//   it('prevTask', () => {
//     const action = Action.prevTask();
//     expect(action).to.deep.equal({ type: 'PREV_TASK' });
//   });
//
//   it('setCompleted with lowercase input', () => {
//     const position = { chapter: 0, page: 0, task: 0 };
//     const action = Action.setCompleted('task', true, position);
//     expect(action)
//       .to.deep.equal({ type: 'SET_COMPLETED', payload: { target: 'TASK', completed: true, position } });
//   });
//
// });
