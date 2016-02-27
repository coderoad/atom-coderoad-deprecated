// import {expect} from 'chai';
//
// import {reducer, initialState} from '../../../lib/_base';
// import * as Action from '../../../lib/actions/actions';
//
// xdescribe('Page: ', () => {
//
//   describe('SET_PAGE', () => {
//     it('loads [0, 0] into store', () => {
//       const action: Action = Action.setPage();
//       const nextState = reducer(initialState, action);
//       expect(nextState.getIn(['position', 'chapter'])).to.equal(0);
//       expect(nextState.getIn(['position', 'page'])).to.equal(0);
//       expect(nextState.getIn(['page', 'title'])).to.equal('Page 1');
//     });
//
//     it('loads page [0,1] into store', () => {
//       const position: Tut.Position = { chapter: 0, page: 1, task: 0 };
//       const action: Action = Action.setPage(position);
//       const nextState = reducer(initialState, action);
//       expect(nextState.getIn(['position', 'chapter'])).to.equal(0);
//       expect(nextState.getIn(['position', 'page'])).to.equal(1);
//       expect(nextState.getIn(['page', 'title'])).to.equal('Page 2');
//     });
//
//     it('loads page [1,0] into store', () => {
//       const position: Tut.Position = { chapter: 1, page: 0, task: 0 };
//       const action: Action = Action.setPage(position);
//       const nextState = reducer(initialState, action);
//       expect(nextState.getIn(['position', 'chapter'])).to.equal(1);
//       expect(nextState.getIn(['position', 'page'])).to.equal(0);
//       expect(nextState.getIn(['page', 'title'])).to.equal('Page 1');
//     });
//
//     // it('loads the first task');
//   });
// });
