import {save, open, openFolder} from './actions/file';
import {set, insert} from './actions/write';
import {openDevTools, toggleDevTools, clearConsole} from './actions/console';
import {openTerminal} from './actions/terminal';
import {closeAllPanels} from './actions/tabs';
import {quit} from './actions/quit';

export {
  save, open, openFolder,
  set, insert,
  openDevTools, toggleDevTools, clearConsole,
  openTerminal,
  closeAllPanels,
  quit
};


// export function mkrdir(name: string) {}

// export function select() { }

// export function decorate() { }
