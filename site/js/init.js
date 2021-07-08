/* Init.js does some handling of location.

  * Translation Example
  > /?q=[translation]

  * Feed Example
  > /?q=[unique+id] fails to search.

  * Hash Example
  > /?[hash] fails to search.

*/

setTimeout(function() {

  if (
    !location.href.match(`\\?fbclid`) &&
    !location.search.split(`?q=`)[1] &&
    !location.href.match(`\\?\\+1`) &&
    !location.href.match(`\\?\\#`) &&
    !location.href.match(`\\?mB`) &&
    location.href.split(`?`)[1]
  ) {
    let i;
    let uri = location.href.split(`?`)[1];
    id =
      uri.slice(
        uri.length - 16,
        uri.length
      );
    if (
      uri.match(
        /^[a-zA-Z0-9]+$/g)
      ) {
      if (Reader == true) onlyImages = true;
      id =
        uri.slice(
          0,
          2
        );
      post =
        parseInt(
          uri.slice(2),
        36
      );
      setTimeout(
        function () {
          if (
            menu.findIndex(
              (item) => item.hash === id
            )
          )
            i = menu.findIndex(
              (item) => item.hash === id
            );
            if (i !== -1) xmlRequestParsing(i);
            else filterInputResponse(uri)
        },
      250);
    } else if (
      uri.slice(
        uri.length - 16,
        uri.length
      ).match(/[a-z0-9]/g)
    ) {
      id =
        uri.slice(
          uri.length - 16,
          uri.length
        );
      post =
        uri.slice(
          0,
          uri.length - 17
        );
      setTimeout(
        function () {
          if (
            menu.findIndex(
              (item) => item.title === id
            )
          )
            i = menu.findIndex(
              (item) => item.title === id
            );
          if (i !== -1) xmlRequestParsing(i);
          else if (i === -1)
            filterInputResponse(
              location.href.split(`?`)[1]
            );
          _toggle.style.display = `none`;
          _visit.style.display = `none`;
          guideOnScreen = onScreen;
          onScreen = false;
        },
      250);
    }
  } else if (
    location.search.split(`?q=`)[1]
  ) {
    var uri = location.search.split(`?q=`)[1];
    var uri = uri.toLowerCase().space();
    _toggle.style.display = `none`;
    guideOnScreen = true;
    setTimeout(
      function () {
        if (showSplash == true) _check.style.visibility = `visible`;
        topMenuBarDisplay(topBar);
        filterInputResponse(uri);
      },
    250);
  } else if (
    isNaN(
      parseFloat(post)
    ) &&
    !isFinite(
      post
    )
  ) {
    setTimeout(
      function () {
        if (Reader == false) {
          _visit.style.display = `flex`;
          _sb.style.display = `block`;
          guideOnScreen = true;
          _guest.focus();
        } else if (Reader == true) {
          onlyImages = true;
          xmlRequestParsing(anyRandomMenuObject());
        }
      },
    250);
  }
  if (
    !isNaN(
      parseFloat(
        post
      )
    ) &&
    isFinite(
      post
    ) &&
    showSplash == true
  )
    _check.style.visibility = `visible`;

  if (window.clientWidth <= 425) {
    setTimeout(
      function () {
        guideOnScreen = onScreen;
        onScreen = false;
        expand = false;
        Blocks = true;
        List = false;
      },
    250)
  }
  if (quickFeedsTranslations == true)
    quickFeedAsset(7);
  else if (_main.clientWidth <= 425)
    quickFeedAsset(24);
  else quickFeedAsset(8);
  quickFeedDisplay(quickFeeds);
  if (sideBarTranslations == true)
    appendSideBarLists(`#content`, `cat`, translations);
  appendSideBarLists(`#content`, `sel`, selections);
  sideBarListBuild(`themes`, `border`, `fa-braille`, `Themes`);
  appendSideBarLists(`.themes`, `theme`, themes);
  sideBarListBuild(`fav`, `favorite`, `fa-hashtag`, `Favorites`);
  appendSideBarLists(`.fav`, `feed`, favorites);
  sideBarListBuild(`bg`, `adjust`, `fa-adjust`, `Background`);
  appendSideBarLists(`.bg`, `background`, background);
  document.querySelector(`.bg`).append(urlFormBuild());
  sideBarListBuild(`exclude`, `parse`, `fa-tint`, `Filter`);
  appendSideBarLists(`.exclude`, `option`, exclude);
  document.querySelector(`.exclude`).append(excludeFormBuild());
  sideBarListBuild(`set`, `choose`, `fa-cube`, `Settings`);
  appendSettings(`.set`, `settings`, settings);
  content.append(basicFormBuild());
  if (sideBarLock == true) content.append(sideBarThemeBuild(`fa-lock`))
  else if (sideBarLock == false) content.append(sideBarThemeBuild(`fa-unlock`))

  if (sideBarCenter == true)
    _content.style.position = `absolute`;
  else _content.style.position = `relative`;

  if (sideBarBackdrop == true) {
    _sidebar.style.cssText =
      `background-color:transparent; backdrop-filter: blur(10px) !important`;
  }
  if (topBarBackdrop == true)
    _top.style.cssText = `backdrop-filter: blur(10px)`
  _container.style.display = `block`;

  adj = menu.slice();
  randomizeAssets(adj);

  if (_main.clientWidth <= 425) flexBox = false;

  if (flexBox == true) sideScroll = false;

  offset = 2500;

}, 100)
