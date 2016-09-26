interface IEditor {
  action: IEditorActions;
  directory: string;
  name: 'atom' | 'vscode';
  grammar: {
    getFromScope(scope: string): any;
    tokenizeLines(lines: string[]): any;
  };
  version: {
    minVersion: string;
    label: string;
    failMessage: string;
    isAboveVersion(a: string, b: string): boolean;
  };
  issuesPath: string;
  Subscription: any;
  addRightPanel: any;
}

interface IEditorActions {
  toggleDevTools(): any;
  clearConsole(): any;
  openDevTools(): any;
  getEditor(): any;
  openFolder(): any;
  open(file: string, options?: Object): any;
  save(): any;
  scroll(content: string): any;
  set(text: string): any;
  insert(text: string, options?: Object): any;
  writeFileFromContent(obj: {
    to: string;
    content: string;
    dir: string;
  }): void;
  writeFileFromFile(obj: {
    to: string;
    from: string;
    dir: string;
    tutorialDir: string;
  }): void;
}