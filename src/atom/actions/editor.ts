export function getEditor(): Promise<AtomCore.IEditor> {
  return new Promise((resolve, reject) => {
    let getEditorCount = 0;
    let editor = atom.workspace.getActiveTextEditor();
    while (!editor) {
      getEditorCount += 1;
      setTimeout(() => {
        editor = atom.workspace.getActiveTextEditor();
      }, 10);
      if (getEditorCount > 1000) {
        console.log('Cannot find active text editor');
        setTimeout(() => {
          editor = atom.workspace.getActiveTextEditor();
        }, 100);
      }
    }
    resolve(editor);
  });
}
