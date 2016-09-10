/**
 * Mock atom file path
 * @param  {string} path file path
 */
export const atomPath = (path: string) => ({
  project: {
    rootDirectories: [{
      path
    }]
  }
});