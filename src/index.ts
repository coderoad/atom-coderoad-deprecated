import editor from './editor';
import Main from './main';

exports.editor = editor;
// "modules.exports" is needed for loading commonjs in Atom
module.exports = (() => new Main(editor))();
