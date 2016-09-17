export const pageSelector = state => state.tutorial.pages[state.pagePosition];

export const pageCompletedSelector = state => state.progress.pages[state.pagePosition];

export const finalPageSelector = state => state.tutorial.final;
