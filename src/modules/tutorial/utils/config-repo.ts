/**
 * configure repo name from package.json
 * possible formats include: repo: string, or repo: { url: string }
 * @param  {{url:string}} repo?
 * @returns string
 */
export function configRepo(repo?: { url: string }): string|null {
  if (repo && repo.url) {
    let url: string = repo.url;
    if (!!url.match(/\.git$/)) {
      url = url.slice(0, url.length - 4);
    }
    return url;
  }
  return null;
}

/**
 * configure Github issues path from package.json
 * possible formats include bugs: { url: string }
 * @param  {{url:string}} bugs?
 * @returns string
 */
export function configIssuesPath(bugs?: { url: string }): string|null {
  return bugs && bugs.url ? bugs.url : null;
}
