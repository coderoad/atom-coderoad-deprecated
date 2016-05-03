// import {expect} from 'chai';
// import {parseParams} from '../../../lib/reducers/editor-actions/parser';
//
// describe('parseBreaks', function() {
//
//   describe('getParams', function() {
//     it('should return the same string in an array if only one param', function () {
//       let params = 'first';
//       let breaks = parseParams.getParams(params);
//       expect(breaks).to.deep.equal(['first']);
//     });
// 
//     it('should return params in a simple string', function() {
//       let params = 'first, second, third';
//       let breaks = parseParams.getParams(params);
//       expect(breaks).to.deep.equal(['first', 'second', 'third']);
//     });
//
//     it('should ignore breaks within an object', function() {
//       let params = '{ a: 1, b: 2 }, second, third';
//       let breaks = parseParams.getParams(params);
//       expect(breaks).to.deep.equal(['{ a: 1, b: 2 }', 'second', 'third']);
//     });
//
//     it('should ignore breaks within an array', function() {
//       let params = '[ a: 1, b: 2 ], second, third';
//       let breaks = parseParams.getParams(params);
//       expect(breaks).to.deep.equal(['[ a: 1, b: 2 ]', 'second', 'third']);
//     });
//
//     it('should ignore breaks within brackets', function() {
//       let params = 'function (a, b) {}, second, third';
//       let breaks = parseParams.getParams(params);
//       expect(breaks).to.deep.equal(['function (a, b) {}', 'second', 'third']);
//     });
//   });
//
// });
