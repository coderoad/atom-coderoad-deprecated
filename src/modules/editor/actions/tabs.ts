export function closeAllPanels(): void {
  let editors: AtomCore.IEditor[] = atom.workspace.getTextEditors();
  editors.forEach((editor: AtomCore.IEditor) => {
    // if (editor !== activeEditor) {
    editor.destroy();
    //  }
  });
}
