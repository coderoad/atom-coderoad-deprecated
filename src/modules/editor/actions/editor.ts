export function getEditor(): Promise<AtomCore.IEditor> {
  return new Promise((resolve, reject) => {
    const editor = atom.workspace.getActiveTextEditor();
    let checkForEditor = setInterval(() => {
      if (editor) {
        clearInterval(checkForEditor);
        resolve(editor);
      }
    }, 50);
  });
}
