/* Init.js does some handling of location.

  * Translation Example
  > /?q=[translation]

  * Feed Example
  > /?q=[unique+id] fails to search.

  * Hash Example
  > /?[hash] fails to search.

*/

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
              else
                Filter(uri)
          },
        250);
      }
      else if (
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
              Filter(
                location.href.split(`?`)[1]
              );
            _visit.style.display = `none`;
            guideOnScreen = onScreen;
          },
        250);
      }
    }
    else if (
      location.search.split(`?q=`)[1]
    ) {
      let uri = location.search.split(`?q=`)[1];
      guideOnScreen = onScreen;
      setTimeout(
        function () {
          if (
            showSplash
          )
            _check.style.display = `block`;
          Topbar(topBar);
          Filter(uri);
        }, 250
      );
    }
    else if (
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
      _check.style.display = `block`;

    Feed(quickFeeds);

    sideBarListBuild(`anim`, `animations`, `fa-sync`, `Animations`);
    appendAnimations(`.anim`, `animate`, animations);

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
    else
      _content.style.position = `relative`;

    if (
      sideBarBackdrop
    )
    _sidebar
      .classList
        .add(
          `blur`
        );


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
        _check
          .querySelector(
            `#load`
          )
          .style.display =
            `none`
        } else if (
          imageLoader ==
            `loading`
        ) {
          _check
            .querySelector(
              `#load`
            )
            .style.display =
              `block`
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
              `none`
          _check
            .querySelector(
              `.loader`
            )
            .style.display =
              `none`
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
        _check
          .querySelector(
            `#load`
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
       _check
         .querySelector(
           `#load`
         )
         .style.display =
           `none`
    } else if (
      imageLoader ==
        `false`
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
            `none`
        _check
          .querySelector(
            `.loader`
          )
          .style.display =
            `none`
        _check
          .querySelector(
            `#load`
          )
          .style.display =
            `none`
      }

    adj = menu.slice();
    randomizeAssets(adj);

    setTimeout(
      function () {

        if (
          display == `flexBox`
        )
          offset = 4000
        else
          offset = 550

        cycleViewport =
          viewport
            .findIndex(
              (item) =>
                item ==
                  display
        )

        display == viewport[cycleViewport]

        if (
          display == `sideScroll`
        )
          cropImages == true;

        if (
          backgroundImage[0].element === `container`
        )
          _container.style.backgroundImage =
            `url(${backgroundImage[0].path})`;
        else if (
          backgroundImage[0].element === `main`
        )
          _main.style.backgroundImage =
            `url(${backgroundImage[0].path})`;

        _container.style.backgroundPosition =
          `${backgroundImage[0].position}`;
        _main.style.backgroundPosition =
          `${backgroundImage[0].position}`;
        _container.style.backgroundSize =
          `${backgroundImage[0].size}`;
        _main.style.backgroundSize =
          `${backgroundImage[0].size}`;

        if (
          window.innerWidth < 768
        )
          sideBarMouse = false

        if (
          window.innerWidth < 425
        ) {
          guideOnScreen = onScreen;
          Sidebar(onScreen);
          onScreen = false;
          Generate(24);
        }

        else Generate(8);

        if (
          bootup
        ) {
          if (
            !location.href.split(`?`)[1] &&
            !Reader
          ) {
            _container.style.display = `block`;
            _sb.style.display = `none`;
            _check.style.display = `block`;
            _check.style.opacity = `0`;

            setTimeout(
              function () {

                _check.style.display = `block`;
                _check.style.opacity = `1`;

                setTimeout(
                  function () {
                    _check.style.opacity = `1`;
                    _check.classList.add(`margin`);
                    _trademark.classList.add(`bootup`);

                    setTimeout(
                      function () {
                        _visit.style.opacity = `1`;
                        _guest.setAttribute(`tabindex`, -1);
                        _check.style.opacity = `0`;
                        Sidebar(onScreen);

                        setTimeout(
                          function() {
                            _trademark.classList.remove(`bootup`);
                            _check.classList.remove(`margin`);
                            _check.style.display = `none`;
                            _sb.style.display = `block`;
                            _check.style.opacity = `1`
                          }, 2000
                        )

                        _guest.focus();
                      }, 4000
                    )

                  }, 2000
                )
              }, 1250
            )
          }
          else {
            _container.style.display = `block`;
            _check.style.display = `none`;
            _check.style.opacity = `1`;
          }
        }
        else {
          _container.style.display = `block`;
          _check.style.display = `none`;
          _check.style.opacity = `1`;
          _visit.style.opacity = `1`;
          _guest.focus();
        }

    }, 300
  )

  if (
    !location.href.split(`?`)[1]
  )
    _sb.style.display = `block`;
  else
    _sb.style.display = `none`;

    if (
      onlySearch
    ) {
      _options.style.display = `none`;
      _social.style.display = `none`;
      _under.style.display = `none`;
      _show.style.display = `none`;
      _link.style.display = `none`;
    }

    document.title = doc;

  }, 300

)
