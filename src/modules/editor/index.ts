export {default as reducer} from './reducer';

export {editorDevToolsToggle, editorOpen, editorInsert,
editorSave, editorSet, editorScroll} from './actions';

export {save, open, openFolder, scroll} from './actions/file';
export {set, insert} from './actions/write';
export {writeFileFromContent, writeFileFromFile} from './actions/writeFile';
export {openDevTools, toggleDevTools, clearConsole} from './actions/console';
export {openTerminal} from './actions/terminal';
export {closeAllPanels} from './actions/tabs';
export {quit} from './actions/quit';

// export function mkrdir(name: string) {}

// export function select() { }

// export function decorate() { }
