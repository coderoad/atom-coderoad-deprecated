import ed from './editor';
import Main from './main';

// for access
export const editor = ed;

// "modules.exports" is needed for loading commonjs in Atom
module.exports = (() => new Main(editor))();

