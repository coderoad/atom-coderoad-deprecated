import {editorActions} from '../../../lib/reducers/editor-actions/actions';
import * as Editor from '../../../lib/atom/editor';
const chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
const expect = chai.expect;
chai.use(sinonChai);

xdescribe('editorActions', function() {

  it('handles short actions', function() {
    var stub = sinon.stub(Editor, 'insert', function() { return true; });
    const actionString = 'insert(\'// text\')';
    editorActions(actionString);
    expect(Editor.insert).to.have.been.calledWith('// text', {});
    stub.restore();
  });

  it('handles actions with code blocks', function() {
    var stub = sinon.stub(Editor, 'insert', function() { return true; });
    let data = 'var data = [  { \"key\": "value "}  ]"';
    const actionString = `insert(${data})`;
    editorActions(actionString);
    expect(Editor.insert).to.have.been.calledWithMatch(/var data/, {});
    stub.restore();
  });

  it('handles actions with long code blocks', function () {
    var stub = sinon.stub(Editor, 'insert', function() { return true; });
    var data = 'var data = [  { name: \"Joe\", class: \"Computer Science\", grade: \"C\" },  { name: \"Jane\", class: \"Computer Science\", grade: \"D\" },  { name: \"Mo\", class: \"Computer Science\", grade: \"B\" },  { name: \"Bob\", class: \"Computer Science\", grade: \"F\" },  { name: \"Joe\", class: \"Math\", grade: \"C\" },  { name: \"Jane\", class: \"Math\", grade: \"B\" },  { name: \"Mo\", class: \"Math\", grade: \"D\" },  { name: \"Bob\", class: \"Math\", grade: \"A\" },  { name: \"Joe\", class: \"Art\", grade: \"C\" },  { name: \"Jane\", class: \"Art\", grade: \"F\" },  { name: \"Mo\", class: \"Art\", grade: \"B\" },   { name: \"Bob\", class: \"Math\", grade: \"F\" },  ]';
    const actionString = `insert(${data})`;
    editorActions(actionString);
    expect(Editor.insert).to.have.been.calledWithMatch(/var data/, {});
    stub.restore();
  });

});
