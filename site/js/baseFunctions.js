let notifyOption = function (String, Icon) {
  _notify.innerHTML =
    `
    ${String} <div class='sbIcon fa ${Icon}'></div>
    `;
  _notify.classList.add(`notify`);
  _notify.style.display = `flex`;
  setTimeout(
    function() {
      _notify.classList.remove(`notify`);
      _notify.style.display = `none`;
    }, 4250
  )
}

let handleSwipe = function () {
  if (
    touchendX - 75 >
    touchstartX
  ) {
    onScreen = true;
    sideBarDisplay(onScreen);
  } else if (
    touchendX + 75 <
    touchstartX
  ) {
    onScreen = false;
    if (sideBarLock == false) sideBarDisplay(onScreen);
  }
}

let handleGuide = function () {
  if (
    touchendX - 75 > touchstartX ||
    touchendX + 75 < touchstartX ||
    touchendY - 75 > touchstartY ||
    touchendY + 75 < touchstartY
  ) {
    if (
      Array.isArray(pub)
    )
      xmlAppendPublication(id);
    setTimeout(function () {
      if (complete) _progress.style.width = `100%`;
      _main.classList.remove(`guide`);
      while (_guide.lastChild)
        _guide.removeChild(_guide.lastChild);
      _guide.style.display = `none`;
      _check.style.display = `none`;
      topMenuBarDisplay(topBar);
      if (sideBarLock)
        onScreen = true;
      sideBarDisplay(onScreen);
      guideOnScreen = true;
      pub = null;
    }, 750)
  }
}

let quickFeedAsset = function (feedAssets) {
  let duplicate = [];
  if (feedAssets == 7)
    for (
      var i = 0;
      i <= translations.length - 1;
      i++
    ) {
      _feed.append(
        translationBuild(
          translations[i]
        )
      );
    }
  else
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

let inputListingIndex = function (
  inputFilter,
  listingWrapper
) {
  let matches = [];
  let suggest = [];
  let listing = _main.querySelector(listingWrapper + ` .listing`);
  while (listing.lastChild)
    listing.removeChild(listing.lastChild);
  _main.querySelector(listingWrapper).style.display = `block`;
  if (inputFilter != ``)
    for (
      var i = menu.length - 1;
      i >= 1;
      i--
    ) {
      if (
        menu[i].description.toString().toLowerCase().match(inputFilter)
      ) {
        if (suggest.length - 1 === suggestionBuffer) return false;
        listing.append(
          listingIndexBuild(
            menu[i].id.match(/[^\/]+$/g),
            menu.indexOf(menu[i]),
            menu[i].image.image(),
            menu[i].category,
            menu[i].hash,
            false,
            false,
            i
          )
        );
        suggest.push(
          menu.indexOf(
            menu[i]
          )
        );
      }
    }
  for (var i = 1;
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
      menu[randomMenuObject].media == true &&
      !matches.includes(randomMenuObject)
    ) {
      matches.push(randomMenuObject);
      if (
        suggest.length - 1 +
        (matches.length - 1) ===
        suggestionBuffer
      )
        return false;
      listing.append(
        listingIndexBuild(
          menu[randomMenuObject].id.match(/[^\/]+$/g),
          menu.indexOf(menu[randomMenuObject]),
          menu[randomMenuObject].image.image(),
          menu[randomMenuObject].category,
          menu[randomMenuObject].hash,
          true,
          i
        )
      );
    }
  }
};

let progressBackDrop = function (done) {
  let width;
  let length;
  let complete;
  if (!done && loading == `percent`) {
    complete = setInterval(function () {
      if (
        safeSearchIDs.includes(
          menu[id].id
        )
      )
        width = _container.clientWidth / (count.length - 1);
      else if (
        !width ||
        width == `Infinity` &&
        count.length <= 0
      )
        width = _container.clientWidth / 12;
      if (
        _progress.clientWidth >= _container.clientWidth
      ) {
        _progress.style.transition = `0`;
        _progress.style.width = `100%`;
        setTimeout(
          function() {
            _progress.style.transition = `all 1600ms ease-in-out`;
            _progress.style.opacity = `0`;
          },
        350)
        setTimeout(
          function () {
            _progress.style.transition = `none`;
            _progress.style.width = `0%`;
          },
        1600);
        clearInterval(complete);
      } else {
        _progress.style.width = _progress.clientWidth + width;
        _progress.style.transition = `all 750ms ease-in-out`;
        _progress.style.opacity = `1`;
      }
    }, 500);
  }
  if (
    document.body.contains(
      _channel.querySelector(`.item`)
    )
  ) {
    if (
      scrollIntoView &&
      first
    ) {
      _center.classList.add(`scroll-into-view`)
      setTimeout(
        function () {
          _center.classList.remove(`scroll-into-view`);
        }, 1500
      )
    }
    if (showSplash) _check.style.display = `none`;
    if (fadeIntoView) {
      (function () {
        function checkPosition() {
          let elements = _channel.querySelectorAll(`.image`);
          for (
            let i = 0;
            i < elements.length;
            i++) {
            if (
              !sideScroll &&
              elements[i].querySelector(`.img`) &&
              !elements[i].querySelector(`.img`).classList.contains(`guide`) &&
              elements[i].getBoundingClientRect().top -
              _main.clientHeight <=
              0
            ) {
              elements[i].querySelector(`.img`).classList.add(`fade-in-element`);
              elements[i].querySelector(`.img`).classList.remove(`hidden`);
            } else if (
              sideScroll &&
              elements[i].querySelector(`.img`) &&
              elements[i].getBoundingClientRect().left -
              _channel.clientWidth
              <= _channel.clientWidth
            ) {
              elements[i].querySelector(`.img`).classList.add(`fade-in-element`);
              elements[i].querySelector(`.img`).classList.remove(`hidden`);
            }
            if (!fadeIntoView) {
              _channel
                .querySelectorAll(`.img`)
                .forEach(
                  (a) => a.classList.remove(`hidden`)
                );
              _main.removeEventListener(`scroll`, checkPosition);
              _main.removeEventListener(`resize`, init);
            }
          }
        }
        if (sideScroll)
          _channel.addEventListener(
            `scroll`,
            checkPosition
          );
        else if (!sideScroll)
          _main.addEventListener(
            `scroll`,
            checkPosition
          );
        if (scrollIntoView)
          setTimeout(
            function() {
              checkPosition();
            },
          1000)
        else checkPosition();
      })();
    }
    if (
      sideScroll
    ) {
      _center.classList.remove(`scroll-into-view`);
      _channel.classList.add(`sideChannel`);
      _center.style.top = `60px`;
      _channel
        .querySelectorAll(`.item`)
        .forEach(
          (a) => (
            a.classList.add(`sideItem`)
          )
        );
      }
  }
  else if (
    document.body.contains(
      _group.querySelector(`.populate`)
    )
  ) {
    if (
      scrollIntoView
    ) {
      _group.classList.add(`scroll-into-view`)
      if (
        !onlyImages
      )
        setTimeout(
          function() {
            _main.scrollTop = _air.clientHeight;
          }, 25
        )
    }
  }
  if (showSplash) _check.style.display = `none`;
};

let populateAssets = function () {
  let media;
  _toggle.style.display = `none`;
  _visit.style.display = `none`;
  _sb.style.display = `none`;
  location.href.split(`?`)[0].state();
  if (showSplash) _check.style.display = `block`;
  if (
    id &&
    id != 0 &&
    !location.href.match(`\\?q=`)
  ) {
    if (menu[id].media)
      media = `<div class='media' style='display:none'>Images</div>`;
    else media = `<div class='blank'></div>`;
    _result.append(
      categoryBuild(
        menu[id].id.match(/[^\/]+$/g),
        menu.indexOf(menu[id]),
        menu[id].image.image(),
        menu[id].hash,
        menu[id].description,
        media
      )
    );
  }
  for (
    let i = 1;
    i <= adj.length - 1;
    i++
  ) {
    if (adj[i].media)
      media = `<div class='media' style='display:none'>Images</div>`;
    else media = `<div class='blank'></div>`;
      if (
        id != menu.indexOf(adj[i]) &&
        adj[i].media
      ) {
        _result.append(
          categoryBuild(
            adj[i].id.match(/[^\/]+$/g),
            menu.indexOf(adj[i]),
            adj[i].image.image(),
            adj[i].hash,
            adj[i].description,
            media
          )
        );
      }
    }
  reverseCategoryGroup(category);
  topMenuBarDisplay(topBar);
  unloading();
  main.setAttribute(`tabindex`, -1);
  main.focus();
};

let populateCategoryGroup = function (translation) {
  let media;
  _sb.style.display = `none`;
  _toggle.style.display = `none`
  location.href.split(`?`)[0].state();
  if (showSplash) _check.style.display = `block`;
  stageGroup()
  if (
    id &&
    id != 0 &&
    !location.href.match(`\\?q=`)
  ) {
    if (menu[id].media)
      media = `<div class='media' style='display:none'>Images</div>`;
    else media = `<div class='blank'></div>`;
    _result.append(
      categoryBuild(
        menu[id].id.match(/[^\/]+$/g),
        menu.indexOf(menu[id]),
        menu[id].image.image(),
        menu[id].hash,
        menu[id].description,
        media
      )
    );
  }
  for (
    let i = 1;
    i <= menu.length - 1;
    i++
  ) {
    if (menu[i].media)
      media = `<div class='media' style='display:none'>Images</div>`;
    else media = `<div class='blank'></div>`;
    if (onlyImages) {
      if (
        translation == menu[i].category &&
        id != menu.indexOf(menu[i]) &&
        menu[i].media
      ) {
        _result.append(
          categoryBuild(
            menu[i].id.match(/[^\/]+$/g),
            menu.indexOf(menu[i]),
            menu[i].image.image(),
            menu[i].hash,
            menu[i].description,
            media
          )
        );
      }
    } else if (!onlyImages) {
      if (
        translation == menu[i].category &&
        id != menu.indexOf(menu[i])
      ) {
        _result.append(
          categoryBuild(
            menu[i].id.match(/[^\/]+$/g),
            menu.indexOf(menu[i]),
            menu[i].image.image(),
            menu[i].hash,
            menu[i].description,
            media
          )
        );
      }
    }
  }
  if (
    !onlyImages
  ) reverseCategoryGroup(translation);
  else if (
    onlyImages
  )
    unloading();
  if (
    _main.clientWidth >= 768
  )
    _bar.style.display = `none`;
  topMenuBarDisplay(topBar);
  main.setAttribute(`tabindex`, -1);
  main.focus();
};

let reverseCategoryGroup = function (translation) {
  _air.style.visibility = `hidden`;
  let media;
  for (
    let i = 1;
    i < menu.length;
    i++) {
    if (category == menu[i].category) {
      if (menu[i].media)
        media = `<div class='media' style='display:none'>Images</div>`;
      else media = `<div class='blank'></div>`;
      _air.append(
        categoryBuild(
          menu[i].id.match(/[^\/]+$/g),
          menu.indexOf(menu[i]),
          menu[i].image.image(),
          menu[i].hash,
          menu[i].description,
          media
        )
      );
    }
  }
  setTimeout(function () {
    _air.style.visibility = `visible`;
  }, 1250)
  displayExpand(expand);
  unloading();
};

let filterInputResponse = function (filterURI) {
  if (
    translations.includes(
      filterURI.toString().capitalize()
    )
  ) {
    setTimeout(
      function() {
        populateCategoryGroup(filterURI.toString().capitalize());
      }, 200
    )
    unloading();
    return false;
  }
  let exact =
    menu.findIndex(
      (item) =>
        item.id.toLowerCase().space() ===
          filterURI.toString().toLowerCase().space()
  );
  let match = menu.findIndex(
    (item) =>
      item.id.toLowerCase().space().match(
        filterURI.toString().toLowerCase().space()
      )
  );
  let description =
    menu.filter(
      function (item) {
        return item.description.space().toLowerCase()
          .match(filterURI.toString().toLowerCase().space()
        );
      }
    )
  if (
    description.length > 0 &&
    exact === -1 &&
    match
  ) {
    stageGroup();
    for (
      let i = 0;
      i <= description.length - 1;
      i++
    )
      writeFilterResponse(
        menu.indexOf(
          description[i]
        )
      );
    populateAssets();
    displayExpand(expand);
    unloading();
  } else if (exact > -1) xmlRequestParsing(exact)
  else return false;
};

let writeFilterResponse = function (menuObject) {
  let media;
  if (menu[menuObject].media)
    media = `<div class='media' style='display:none'>Images</div>`;
  else media = `<div class='blank'></div>`;
  _result.append(
    categoryBuild(
      menu[menuObject].id.match(/[^\/]+$/g),
      menu.indexOf(menu[menuObject]),
      menu[menuObject].image.image(),
      menu[menuObject].hash,
      menu[menuObject].description,
      media
    )
  );
};
