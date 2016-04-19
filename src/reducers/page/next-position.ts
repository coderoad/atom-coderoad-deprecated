export function getNextPosition({chapter, page}: CR.Position): CR.Position {
  const {chapters} = this.data;
  if (page < chapters[chapter].pages.length - 1) {
    return { chapter, page: page + 1 };
  } else if (chapter < chapters.length - 1) {
    return { chapter: chapter + 1, page: 0 };
  } else {
    store.dispatch(completeTutorial());
    return { chapter, page, completed: true };
  }
}
