/* Init.js does some handling of location.

  * Translation Example
  > /?q=[translation]

  * Feed Example
  > /?q=[unique+id] fails to search.

  * Hash Example
  > /?[hash] fails to search.

*/

window.onload =
  function ()
    {

      if (
        backgroundImage[0].element == `container`
      )
        _container.style.backgroundImage = `url(${backgroundImage[0].path})`;
      else if (
        backgroundImage[0].element == `main`
      )
        _main.style.backgroundImage = `url(${backgroundImage[0].path})`;
      _container.style.backgroundPosition = `${backgroundImage[0].position}`;
      _main.style.backgroundPosition = `${backgroundImage[0].position}`;
      _container.style.backgroundSize = `${backgroundImage[0].size}`;
      _main.style.backgroundSize = `${backgroundImage[0].size}`;

};

setTimeout(

  function() {

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
        if (
          Reader == true
        )
          onlyImages = true;
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
              menu
                .findIndex(
                (item) =>
                  item.hash ===
                    id
              )
            )
              i = menu
                .findIndex(
                (item) =>
                  item.hash ===
                    id
              );
              if (
                i !== -1
              )
                Request(i);
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
              menu
                .findIndex(
                  (item, i) =>
                    cyrb53(item.description) == id ||
                    cyrb53(i.toString()) == id ||
                    cyrb53(item.hash) == id ||
                    cyrb53(item.uri) == id ||
                    cyrb53(item.id) == id
                )
            )
              i =
              menu
                .findIndex(
                  (item, i) =>
                    cyrb53(item.description) == id ||
                    cyrb53(i.toString()) == id ||
                    cyrb53(item.hash) == id ||
                    cyrb53(item.uri) == id ||
                    cyrb53(item.id) == id
                )
            if (
              i !== -1
            )
              Request(i);
            else if (
              i === -1
            )
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
          if (
            showSplash
          )
            _check.style.visibility = `visible`;
          topMenuBarDisplay(topBar);
          filterInputResponse(uri);
        },
      250);
    } else if (
      isNaN(
        parseFloat(
          post
        )
      ) &&
      !isFinite(
        post
      )
    ) {
      setTimeout(
        function () {
          if (
            !Reader
          ) {
            guideOnScreen = true;
            _guest.focus();
          }
          else if (
            Reader
          ) {
            onlyImages = true;
            Request(anyRandomMenuObject());
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
      showSplash
    )
      _check.style.visibility = `visible`;

    if (
      window.clientWidth <= 425
    ) {
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
    else if (
      _main.clientWidth <= 425
    )
      quickFeedAsset(24);
    else quickFeedAsset(8);

    quickFeedDisplay(quickFeeds);

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

    _content.append(basicFormBuild());

    if (
      sideBarLock
    )
      _content.append(sideBarThemeBuild(`fa-lock`))
    else if (
      !sideBarLock
    )
      _content.append(sideBarThemeBuild(`fa-unlock`))

    for (
      let i = 0;
      i <= translations.length - 1;
      i++
    )
      _under.append(
        underTranslation(translations[i])
      );

    if (
      sideBarCenter
    )
      _content.style.position = `absolute`;
    else _content.style.position = `relative`;

    if (
      sideBarBackdrop
    ) {
      _sidebar.style.cssText =
        `background-color:transparent; backdrop-filter: blur(10px) !important`;
    }
    if (
      topBarBackdrop
    )
      _top.style.cssText = `backdrop-filter: blur(10px)`

      if (
        imageLoader ==
          `double-circle`
      ) {
        _check
          .querySelector(
            `.bars`
          )
          .style.display =
            `none`
        _check
          .querySelector(
            `.animation`
          )
          .style.display =
            `none`
        _check
          .querySelector(
            `.loader`
          )
          .style.display =
            `block`
      } else if (
        imageLoader ==
          `v-bars`
      ) {
        _check
          .querySelector(
            `.animation`
          )
          .style.display =
            `none`
        _check
          .querySelector(
            `.bars`
          )
          .style.display =
            `block`
        _check
          .querySelector(
            `.loader`
          )
          .style.display =
            `none`
     } else if (
       imageLoader ==
        `ring-circle`
     ) {
       _check
         .querySelector(
           `.animation`
         )
         .style.display =
           `block`
       _check
         .querySelector(
           `.bars`
         )
         .style.display =
           `none`
       _check
         .querySelector(
           `.loader`
         )
         .style.display =
           `none`
    } else if (
      imageLoader ==
        false
      ) {
        _check
          .querySelector(
            `.animation`
          )
          .style.display =
            `block`
        _check
          .querySelector(
            `.bars`
          )
          .style.display =
            `none`
        _check
          .querySelector(
            `.loader`
          )
          .style.display =
            `block`
    }

    if (
      !Reader &&
      !uri
    ) {
    _container.style.display = `block`;
    _check.style.display = `block`;
    _sb.style.display = `none`;
    setTimeout(
      function () {
        _check.style.opacity = `0`;
        _visit.style.opacity = `1`;
        setTimeout(
          function () {
            if (_sidebar.style.left == 0)
              _sb.style.display = `block`;
            _check.style.display = `none`;
            _check.style.opacity = `1`;
          }, 2000
        )
      }, 3000
    )
  }
  else _container.style.display = `block`;

    adj = menu.slice();
    randomizeAssets(adj);

    if (
      _main.clientWidth <= 768
    ) {
      display = `legacy`;
      offset = 500;
    }
    else if (
      display == `flexbox`
    )
      offset = 2500
    else offset = 500

    cycleViewport =
      viewport
        .findIndex(
          (item) =>
            item ==
              display
    )

    if (
      viewport[cycleViewport] == `legacy`
    ) {
      sideScroll = false;
      flexBox = false;
      legacy = true;
    }
    else if (
      viewport[cycleViewport] == `flexBox`
    ) {
      sideScroll = false;
      flexBox = true;
      legacy = false;
    } else if (
      viewport[cycleViewport] == `sideScroll`
    ) {
      sideScroll = true;
      flexBox = false;
      legacy = false;
    }

    document.title = doc;

  }, 150

)
