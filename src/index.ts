import editor from './editor';
import Main from './main';

// for access
export default editor;

// "modules.exports" is needed for loading commonjs in Atom
module.exports = (() => new Main(editor))();

