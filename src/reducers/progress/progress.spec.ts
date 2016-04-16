// import {fromJS, Map, List} from 'immutable';
// import {expect} from 'chai';
//
// import {reducer, initialState} from '../../../lib/_base';
// import * as Action from '../../../lib/actions/_actions';
//
// let sampleState = fromJS({
//   position: {
//     chapter: 0,
//     page: 0,
//     task: 0
//   },
//   tasks: [],
//   progress: {
//     completed: false,
//     info: {
//       title: 'Project Title',
//       description: 'project description'
//     },
//     chapters: [{
//       title: 'Chapter 1',
//       description: 'chapter 1 description',
//       completed: false,
//       pages: [{
//         title: 'Page 1',
//         description: 'page 1 description',
//         completed: false,
//         tasks: [{
//           completed: false
//         }, {
//             completed: false
//           }, {
//             completed: false
//           }]
//       }, {
//           title: 'Page 2',
//           description: 'page 2 description',
//           completed: false,
//           tasks: [{
//             completed: false
//           }, {
//               completed: false
//             }]
//         }]
//     }, {
//         title: 'Chapter 2',
//         description: 'chapter 2 description',
//         completed: false,
//         pages: [{
//           title: 'Page 1',
//           description: 'page 1 description',
//           completed: false,
//           tasks: [{
//             completed: false
//           }, {
//               completed: false
//             }]
//         }, {
//             title: 'Page 2',
//             description: 'page 2 description',
//             completed: false,
//             tasks: [{
//               completed: false
//             }, {
//                 completed: false
//               }]
//           }]
//       }]
//   }
// });
//
// xdescribe('Progress: ', () => {
//
//   xdescribe('initialState', () => {
//
//     it('loads project info into store', () => {
//       expect(initialState.getIn(['progress', 'info']))
//         .to.deep.equal(sampleState.getIn(['progress', 'info']));
//     });
//
//     it('loads chapters & pages into store', () => {
//       expect(initialState.getIn(['progress', 'chapters', 0, 'title']))
//         .to.equal('Chapter 1');
//       expect(initialState.getIn(['progress', 'chapters', 0, 'pages', 0, 'title']))
//         .to.equal('Page 1');
//     });
//   });
//
//   xdescribe('SET_COMPLETED', () => {
//     /* 1. mark task as complete
//     *  2. if no next task, call SET_COMPLETED PAGE
//     *  3. call LOAD_TASK
//     *  4. if returned task is already complete, call LOAD_TASK again
//     */
//
//     // describe('TASK', () => {
//     //   it('marks completed', () => {
//     //     const position = {chapter: 0, page: 0, task: 0};
//     //     const action = Action.setCompleted('TASK', true, position);
//     //     const state = sampleState
//     //       .set('position', Map(position))
//     //       .set('tasks', List());
//     //     const nextState = reducer(state, action);
//     //     expect(nextState.getIn(['progress',
//     //     'chapters', position.chapter,
//     //     'pages', position.page,
//     //     'tasks', position.task,
//     //     'completed'])).to.be.true;
//     //   });
//     //
//     //   it('marks incompleted', () => {
//     //     const position = sampleState.get('position').toJS();
//     //     const action = Action.setCompleted('TASK', true, position);
//     //     const action2 = Action.setCompleted('TASK', false, position);
//     //     const nextState = reducer(sampleState, action);
//     //     const nextState2 = reducer(nextState, action2);
//     //     expect(nextState2.getIn(['progress', 'chapters', 0, 'pages', 0, 'tasks', 0, 'completed'])).to.be.false;
//     //   });
//
//
//     // it('increments goals completed (3 + 1 / 12) for current page');
//
//     // it('increments overall progress (24 + 1 / 53) for chapter');
//
//     // it('increments overall progress (46 + 1 / ) for project');
//
//     // it('calls SET_COMPLETED PAGE if no more tasks', () => {});
//   });
// });
//
// xdescribe('PAGE', () => {
//   // mark page complete
//   // if no next page, call COMPLETE_CHAPTER
//
//   it('marks completed', () => {
//     const position = { chapter: 0, page: 0, task: 0 };
//     const action = Action.setCompleted('PAGE', true, position);
//     const state = sampleState.set('position', Map(position));
//     const nextState = reducer(state, action);
//     expect(nextState.getIn(['progress', 'chapters', 0, 'pages', 0, 'completed'])).to.be.true;
//   });
//
//   it('marks incompleted', () => {
//     const position = { chapter: 0, page: 0, task: 0 };
//     const action = Action.setCompleted('PAGE', true, position);
//     const action2 = Action.setCompleted('PAGE', false, position);
//     const state = sampleState.set('position', Map(position));
//     const nextState = reducer(state, action);
//     const nextState2 = reducer(nextState, action2);
//     expect(nextState2.getIn(['progress', 'chapters', 0, 'pages', 0, 'completed'])).to.be.false;
//   });
//
//   // it('calls SET_COMPLETED CHAPTER if no more pages');
//
// });
//
// xdescribe('CHAPTER', () => {
//   // mark chapter complete
//   // if no next chapter, call TUTORIAL_COMPLETE
//
//   it('marks completed', () => {
//     const position = { chapter: 0, page: 0, task: 0 };
//     const action = Action.setCompleted('CHAPTER', true, position);
//     const state = sampleState.set('position', Map(position));
//     const nextState = reducer(state, action);
//     expect(nextState.getIn(['progress', 'chapters', 0, 'completed'])).to.be.true;
//   });
//
//   it('marks incompleted', () => {
//     const position = { chapter: 0, page: 0, task: 0 };
//     const action = Action.setCompleted('CHAPTER', true, position);
//     const action2 = Action.setCompleted('CHAPTER', false, position);
//     const state = sampleState.set('position', Map(position));
//     const nextState = reducer(state, action);
//     const nextState2 = reducer(nextState, action2);
//     expect(nextState2.getIn(['progress', 'chapters', 0, 'completed'])).to.be.false;
//   });
//
//   // it('calls SET_COMPLETED PROJECT if no more pages');
//
// });
//
// xdescribe('PROJECT', () => {
//   // mark tutorial complete
//
//   it('marks complete', () => {
//     const position = { chapter: 0, page: 0, task: 0 };
//     const action = Action.setCompleted('PROJECT', true, position);
//     const state = sampleState.set('position', Map(position));
//     const nextState = reducer(state, action);
//     expect(nextState.getIn(['progress', 'completed'])).to.be.true;
//   });
//
//   it('marks incompleted', () => {
//     const position = { chapter: 0, page: 0, task: 0 };
//     const action = Action.setCompleted('PROJECT', true, position);
//     const action2 = Action.setCompleted('PROJECT', false, position);
//     const state = sampleState.set('position', Map(position));
//     const nextState = reducer(state, action);
//     const nextState2 = reducer(nextState, action2);
//     expect(nextState2.getIn(['progress', 'chapters', 0, 'pages', 0, 'tasks', 0, 'completed'])).to.be.false;
//   });
//
// });
