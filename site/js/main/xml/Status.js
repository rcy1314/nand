var Status = function (
  menuIndex,
  recentPost,
  oldestPost,
  postsCount
) {
    _status.append(
      contentBuild(
        oldestPost,
        recentPost,
        postsCount,
        menuIndex
      )
    );
};
