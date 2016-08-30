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

export function configIssuesPath(bugs?: { url: string }): string|null {
  return bugs && bugs.url ? bugs.url : null;
}
