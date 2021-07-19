let quickFeedAsset = function (feedAssets) {
  let duplicate = [];
    for (
      var i = 1;
      i <= menu.length - 1;
      i++
    ) {
      let randomMenuObject =
        menu.indexOf(
          menu[
            Math.floor(
              Math.random() * menu.length - 1
            )
          ]
      );
      if (
        menu[randomMenuObject] &&
        !duplicate.includes(randomMenuObject) &&
        menu[randomMenuObject].media == true &&
        randomMenuObject != 0
      ) {
        duplicate.push(randomMenuObject);
        _feed.append(
          assetBuild(
            menu.indexOf(menu[randomMenuObject]),
            menu[randomMenuObject].image.image(),
            menu[randomMenuObject].id
          )
        );
        if (duplicate.length === feedAssets) return false;
      }
    }
};
