var Append = function(id) {
  if (
    document
    .body
    .contains(
      _center
      .querySelector(
        `#bottom`
      )
    )
  )
    _center
    .querySelector(
      `#bottom`
    )
    .remove();
  const has =
    exclude.map((a) => a.toLowerCase());
  for (i = 0; i < pub.length - 1; i++) {
    if (
      has.filter(function(obj) {
        return pub[i].title.toLowerCase().match(obj);
      }).length > 0
    )
      continue;
    if (
      omitGuide &&
      i != local
    ) {
      _channel.append(pub[i].post)
      images.push({
        element: pub[i].element,
        src: pub[i].src
      });
    } else if (
      !omitGuide
    ) {
      _channel.append(pub[i].post)
      images.push({
        element: pub[i].element,
        src: pub[i].src
      });
    }
  }
  if (
    safeSearchIDs.includes(menu[id].id) ||
    safeSearch
  ) {
    for (
      let i = 0; i <= images.length - 1; i++
    ) {
      Attributes(
        false,
        id,
        images[i].element,
        images[i].src
      );
    }
  } else if (
    !safeSearchIDs.includes(
      menu[id].id
    )
  ) {
    for (
      let i = 0; i <= images.length - 1; i++
    ) {
      Attributes(
        false,
        id,
        images[i].element,
        images[i].src
      );
    }
  }
  if (
    display !== `sideScroll` &&
    !Reader &&
    !first &&
    document.body.contains(
      _channel.querySelector(`.item`)
    )
  ) {
    setTimeout(
      () => {
        touchmove = true
        scrollToElm(
          touchmove,
          _main,
          _channel.querySelectorAll(`[aria-object='${id}']`)[0],
          250
        );
      }, 250
    )
  } else if (
    !Reader &&
    first
  ) {
    _channel.scrollTop = 0;
    _center.scrollTop = 0;
    _main.scrollTop = 0;
  } else if (
    display == `sideScroll` &&
    !first
  ) {
    setTimeout(
      () => {
        touchmove = true;
        sideScrollToElm(touchmove,
          _channel,
          _channel.querySelectorAll(`[aria-object='${id}']`)[0],
          250
        );
      }, 250
    )
  }
  if (pub.length > 1) {
    if (pub[pub.length - 1].dst) var oldest = pub[pub.length - 1].dst;
    if (pub[pub.length - 1]) var posts = pub.length - 1;
    if (pub[0]) var recent = pub[0].dst;
  }
  if (
    !Reader
  )
    _channel.append(
      footerBuild(id)
    );

  if (
    display == `flexBox`
  )
    Flex();

  else if (
    display == `duo`
  )
    Duo();

  else if (
    display == `sideScroll`
  )
    Sidescroll();

  else if (
    display == `legacy`
  )
    Legacy();

  if (
    Reader &&
    assets.length > assetVisibility
  ) {
    _channel.querySelectorAll(
      `[aria-object='${asset[0]}']`
    )
    .forEach(
      (a) => {
        a.style.visibility = `hidden`;
      }
    )
    asset.shift();
  }
  if (
    Reader &&
    asset.length === 1 ||
    asset.length % assetRefresh === 0
  ) {
    while (
      _status.firstChild
    )
      _status.removeChild(
        _status.lastChild
      );
    while (
      _suggestions.firstChild
    )
      _suggestions.removeChild(
        _suggestions.lastChild
      );
    Suggest();
    Status(id, recent, oldest, posts);
  } else if (
    !Reader
  ) {
    while (
      _status.firstChild
    )
      _status.removeChild(
        _status.lastChild
      );
    while (
      _suggestions.firstChild
    )
      _suggestions.removeChild(
        _suggestions.lastChild
      );
    Suggest();
    Status(id, recent, oldest, posts);
  }
  if (
    showSplash
  )
    _check.style.display = `none`;
  Sidebar(guideOnScreen);
  Topbar(topBar);
  local = null;
  stop = false;
  images = [];
  post = null;
  unloading();
  first = false;
}
