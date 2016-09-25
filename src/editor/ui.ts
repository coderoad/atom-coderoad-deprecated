export const addRightPanel = (panel) => {
  return atom.workspace.addRightPanel({
      item: panel,
      priority: 0,
    });
};

