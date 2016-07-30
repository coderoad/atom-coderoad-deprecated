import * as React from 'react';

declare module 'core-coderoad' {

  interface ConfiguredStore {
    reducer: Redux.Reducer;
    devMode?: boolean;
    throttle?: Object;
  }

  // store
  export function configureStore(config: ConfiguredStore): Redux.Store;

  // polyfills
  export function loadPolyfills(): void;

  // options
  export const tutorialConfigOptions: Object;

  // selectors
  export function hintsSelector(state: CR.State): string[];
  export function hintSelector(state: CR.State): string;
  export function pageSelector(state: CR.State): CR.Page;
  export function pageCompletedSelector(state: CR.State): boolean;
  export function tasksSelector(state: CR.State): CR.Task[];
  export function currentTaskSelector(state: CR.State): CR.Task;
  export function visibleTasksSelector(state: CR.State): CR.Task[];
  export function taskProgressSelector(state: CR.State): number;
  export function taskByIndexSelector(state: CR.State, props: { index: number }): CR.Task;
  export function configSelector(state: CR.State): Tutorial.Config;

  // modules

  // alert
  export function alertReducer(open: boolean, action: Action): boolean;
  export function alertOpen(alert: Object);
  export function alertReplay();
  export function alertClose();

  // editor
  export function dirReducer(name: string): string;
  export function editorReducer(name: string, action: Action): string;
  export function editorDevToolsToggle();
  export function editorOpen(file: string, options?: Object);
  export function editorInsert(content: string);
  export function editorSet(content: string);
  export function editorSave();
  export function editorScroll(content: string);
  export function save();
  export function open(file: string, options?: Object);
  export function openFolder();
  export function set(content: string);
  export function insert(content: string);
  export function openDevTools();
  export function toggleDevTools();
  export function clearConsole();
  export function openTerminal();
  export function closeAllPanels();
  export function quit();

  // route
  export function routeReducer(route: string, action: Action): string;
  export function routeSet(route: string);

  // window
  export function quit();
  export function windowToggle();
  export function windowReducer(open: boolean, action: Action): boolean;

  // components

  export function render(app: React.Component<any, any>, target: HTMLElement): void;

  export function highlight(text: string, lang: string): string;

  export const Alert: React.Component<any, any>;
  export const Markdown: React.Component<any, any>;
  // export const RouteButton: React.Component<any, any>;
  // export const MenuLink: React.Component<any, any>;

}
