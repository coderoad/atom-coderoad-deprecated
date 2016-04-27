export function getEditor(): Promise<AtomCore.IEditor> {
  return new Promise((resolve, reject) => {
    let getEditorCount = 0;
    let editor = atom.workspace.getActiveTextEditor();
    while (!editor) {
      getEditorCount += 1;
      setTimeout(function() {
        editor = atom.workspace.getActiveTextEditor();
      });
      if (getEditorCount > 999) {
        console.log('Failed to find active editor');
        reject(null);
      }
    }
    resolve(editor);
  });
}
