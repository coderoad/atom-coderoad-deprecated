import editor from './editor';
import Main from './main';

// React optimization
process.env.NODE_ENV = 'production';

export = new Main(editor);
