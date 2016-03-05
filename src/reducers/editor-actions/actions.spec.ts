// import {expect} from 'chai';
// import {getCommand, getParams, getOptions} from '../../../lib/reducers/editor-actions/actions';
//
// describe('editor actions', function() {
//
//   describe('getCommand', function() {
//     it('should get the command from an actionString', function() {
//       const actionString = 'do(\'something\')';
//       const command = getCommand(actionString);
//       expect(command).to.equal('do');
//     });
//   });
//
//   describe('getParams', function() {
//     it('should get the params from an actionString', function () {
//       const actionString = 'do(\'something\')';
//       const params = getParams(actionString);
//       expect(params).to.deep.equal(['something']);
//     });
//
//     it('should get multiple params from an actionString', function () {
//       const actionString = 'do(\'something\', \'something else\')';
//       const params = getParams(actionString);
//       expect(params).to.deep.equal(['something', 'something else']);
//     });
//
//     it('should get params starting with a line break', function () {
//       const actionString = 'do(\'something\n\')';
//       const params = getParams(actionString);
//       expect(params).to.deep.equal(['something\n']);
//     });
//
//     it('should get params ending with a line break', function () {
//       const actionString = 'do(\'\nsomething\')';
//       const params = getParams(actionString);
//       expect(params).to.deep.equal(['\nsomething']);
//     });
//
//     it('should accept a code block as params', function () {
//       const actionString = 'do(var a = 42;)';
//       const params = getParams(actionString);
//       expect(params).to.deep.equal(['var a = 42;']);
//     });
//
//     it('should accept a long code block as params', function () {
//       const data = 'var data = [  { name: \"Joe\", class: \"Computer Science\", grade: \"C\" },  { name: \"Jane\", class: \"Computer Science\", grade: \"D\" },  { name: \"Mo\", class: \"Computer Science\", grade: \"B\" },  { name: \"Bob\", class: \"Computer Science\", grade: \"F\" },  { name: \"Joe\", class: \"Math\", grade: \"C\" },  { name: \"Jane\", class: \"Math\", grade: \"B\" },  { name: \"Mo\", class: \"Math\", grade: \"D\" },  { name: \"Bob\", class: \"Math\", grade: \"A\" },  { name: \"Joe\", class: \"Art\", grade: \"C\" },  { name: \"Jane\", class: \"Art\", grade: \"F\" },  { name: \"Mo\", class: \"Art\", grade: \"B\" },   { name: \"Bob\", class: \"Math\", grade: \"F\" }  ]';
//       const actionString = `do(${data})`;
//       const params = getParams(actionString);
//       expect(params[0]).to.equal(data);
//     })
//   });
//
//   describe('getOptions', function () {
//     it('should return normal params if no object', function () {
//       const params = 'something';
//       const result = getOptions(params);
//       expect(result.param).to.equal('something');
//       expect(result.options).to.deep.equal({});
//     });
//
//     it('should return a params string and object', function () {
//       const params = 'something, { str: \'string\', num: 1, bool: true }';
//       const result = getOptions(params);
//       expect(result.param).to.equal('something');
//       expect(result.options).to.deep.equal({ str: 'string', num: 1, bool: true });
//     });
//   });
//
// });
