"use strict";
function configRepo(repo) {
    if (repo && repo.url) {
        var url = repo.url;
        if (!!url.match(/\.git$/)) {
            url = url.slice(0, url.length - 4);
        }
        return url;
    }
    return null;
}
exports.configRepo = configRepo;
function configIssuesPath(bugs) {
    return bugs && bugs.url ? bugs.url : null;
}
exports.configIssuesPath = configIssuesPath;
//# sourceMappingURL=config-repo.js.map