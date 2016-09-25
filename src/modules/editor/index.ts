export {default as reducer} from './reducer';

export {editorDevToolsToggle, editorOpen, editorInsert,
editorSave, editorSet, editorScroll} from './actions';

export {save, open, openFolder, scroll} from '../../editor/actions/file';
export {set, insert} from '../../editor/actions/write';
export {writeFileFromContent, writeFileFromFile} from '../../editor/actions/writeFile';
export {openDevTools, toggleDevTools, clearConsole} from '../../editor/actions/console';
export {openTerminal} from '../../editor/actions/terminal';
export {closeAllPanels} from '../../editor/actions/tabs';
export {quit} from '../../editor/actions/quit';

// export function mkrdir(name: string) {}

// export function select() { }

// export function decorate() { }
