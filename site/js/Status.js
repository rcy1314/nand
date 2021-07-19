var Status = function (
  menuIndex,
  recentPost,
  oldestPost,
  postsCount
) {
    let status = _xml.querySelector(`.status`);
    _status.append(
      contentBuild(
        oldestPost,
        recentPost,
        postsCount,
        menuIndex)
      );
};
