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
      if (sideBarLock == true)
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
  let listing = document.querySelector(listingWrapper + ` .listing`);
  while (listing.lastChild)
    listing.removeChild(listing.lastChild);
  document.querySelector(listingWrapper).style.display = `block`;
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
      menu[randomMenuObject].media == true &&
      !matches.includes(randomMenuObject) &&
      menu[randomMenuObject]
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
  if (done == false && loading == `percent`) {
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
      _main.querySelector(`#xml`)
    )
  ) {
    _main.querySelector(`#xml`).style.display = `block`;
      if (
        Reader == true &&
        first == true
      ) {
        if (
          _main.innerHeight >=
          document.querySelector(`#xml .channel`).innerHeight
        )
          if (httpRequest.status == 200) {
            first = false;
            xmlRequestParsing(
              anyRandomMenuObject()
            );
          }
      }
    if (
      scrollIntoView == true &&
      first == true
    ) {
      document.querySelector(`.center`).classList.add(`scroll-into-view`)
      if (showSplash == true) _check.style.display = `none`;
    } else if (scrollIntoView == false)
      document.querySelector(`#xml`).style.top = `60px`;
    if (fadeIntoView == true) {
      (function () {
        function checkPosition() {
          let elements = document.querySelectorAll(`.image`);
          for (let i = 0; i < elements.length; i++) {
            if (
              sideScroll == false &&
              elements[i].querySelector(`.img`) &&
              !elements[i].querySelector(`.img`).classList.contains(`guide`) &&
              elements[i].getBoundingClientRect().top -
              _main.clientHeight <=
              0
            ) {
              elements[i].querySelector(`.img`).classList.add(`fade-in-element`);
              elements[i].querySelector(`.img`).classList.remove(`hidden`);
            } else if (
              sideScroll == true &&
              elements[i].querySelector(`.img`) &&
              elements[i].getBoundingClientRect().left -
              document.querySelector(`.channel`).clientWidth
              <= document.querySelector(`.channel`).clientWidth
            ) {
              elements[i].querySelector(`.img`).classList.add(`fade-in-element`);
              elements[i].querySelector(`.img`).classList.remove(`hidden`);
            }
            if (fadeIntoView == false) {
              document
                .querySelectorAll(`.img`)
                .forEach(
                  (a) => a.classList.remove(`hidden`)
                );
              _main.removeEventListener(`scroll`, checkPosition);
              _main.removeEventListener(`resize`, init);
            }
          }
        }
        document.querySelector(`.channel`).addEventListener(
          `scroll`,
          checkPosition
        );
        _main.addEventListener(
          `scroll`,
          checkPosition
        );
        if (scrollIntoView)
          setTimeout(
            function() {
              checkPosition();
            },
          500)
        else checkPosition();
      })();
    }
    if (sideScroll == true
    ) {
      document.querySelector(`.center`).classList.remove(`scroll-into-view`);
      document.querySelector(`.channel`).classList.add(`sideChannel`);
      document.querySelector(`.center`).style.top = `60px`;
      document.querySelector(`#xml`).style.top = 0;
      _main
        .querySelectorAll(`.item`)
        .forEach(
          (a) => (
            a.classList.add(`sideItem`)
          )
        );
      }
  }
  if (
    document.body.contains(
      _main.querySelector(`#group`)
    )
  ) {
    if (scrollIntoView == true) {
      document.querySelector(`.result`).classList.add(`scroll-into-view`)
      setTimeout(
        function() {
          if (
            document.body.contains(
              _main.querySelector(`.air`)
            )
          )
            _main.scrollTop = document.querySelector(`.air`).clientHeight;
          document.querySelector(`#group`).style.top = `-60px`;
        },
      25)
      setTimeout(
          function() {
            document.querySelector(`#group`).style.display = `block`;
          },
        25
      )
    } else if (scrollIntoView == false)
      document.querySelector(`#group`).style.display = `block`;
  }
  if (onlyImages == true)
    if (
      document.body.contains(
        _main.querySelector(`.result`)
      )
    )
      _main.scrollTop = 0;
    if (onlyImages == false) {
      setTimeout(
        function() {
          if (
            document.body.contains(
              _main.querySelector(`.air`)
            )
          )
            _main.scrollTop = document.querySelector(`.air`).clientHeight;
        },
      25)
      setTimeout(
        function() {
          if (
            document.body.contains(
              _main.querySelector(`#group`)
            )
          )
            document.querySelector(`#group`).style.display = `block`;
        },
      25)
    }
  if (showSplash == true) _check.style.display = `none`;
};

let populateAssets = function () {
  let media;
  _toggle.style.display = `none`;
  _sb.style.display = `none`;
  location.href.split(`?`)[0].state();
  if (showSplash === true) _check.style.display = `block`;
  if (
    !document.body.contains(
      _main.querySelector(`#group`)
    )
  )
    groupBuild();
  let result = document.querySelector(`.result`);
  if (
    id &&
    id != 0 &&
    !location.href.match(`\\?q=`)
  ) {
    if (menu[id].media == true)
      media = `<div class='media' style='display:none'>Images</div>`;
    else media = `<div class='blank'></div>`;
    result.append(
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
    if (adj[i].media == true)
      media = `<div class='media' style='display:none'>Images</div>`;
    else media = `<div class='blank'></div>`;
    if (onlyImages == true) {
      if (
        id != menu.indexOf(adj[i]) &&
        adj[i].media == true
      ) {
        result.append(
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
    } else if (onlyImages == false) {
      if (
        id !=
        menu.indexOf(
          adj[i]
        )
      ) {
        result.append(
          categoryBuild(
            adj[i].id.match(/[^\/]+$/g),
            adj.indexOf(adj[i]),
            adj[i].image.image(),
            adj[i].hash,
            adj[i].description,
            media
          )
        );
      }
    }
  }
  displayDescription(showDescription);
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
  if (showSplash === true) _check.style.display = `block`;
  if (
    !document.body.contains(
      _main.querySelector(`#group`)
    )
  )
    groupBuild();
  let result = document.querySelector(`.result`);
  if (
    id &&
    id != 0 &&
    !location.href.match(`\\?q=`)
  ) {
    if (menu[id].media == true)
      media = `<div class='media' style='display:none'>Images</div>`;
    else media = `<div class='blank'></div>`;
    result.append(
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
    if (menu[i].media == true)
      media = `<div class='media' style='display:none'>Images</div>`;
    else media = `<div class='blank'></div>`;
    if (onlyImages == true) {
      if (
        translation == menu[i].category &&
        id != menu.indexOf(menu[i]) &&
        menu[i].media == true
      ) {
        result.append(
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
    } else if (onlyImages == false) {
      if (
        translation == menu[i].category &&
        id != menu.indexOf(menu[i])
      ) {
        result.append(
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
  if (onlyImages == false) reverseCategoryGroup(translation);
  else if (onlyImages == true) {
    unloading();
  }
  if (_main.clientWidth >= 768)
    _bar.style.display = `none`;
  main.setAttribute(`tabindex`, -1);
  topMenuBarDisplay(topBar);
  main.focus();
};

let reverseCategoryGroup = function (translation) {
  let media;
  let group = _main.querySelector(`#group`);
  let result = _main.querySelector(`.result`);
  if (
    !document.body.contains(
      _main.querySelector(`.air`)
    )
  ) {
    let div = document.createElement(`div`);
    div.classList.add(`air`);
    group.prepend(div);
  }
  let air = document.querySelector(`.air`);
  for (
    let i = 1;
    i < menu.length;
    i++) {
    if (category == menu[i].category) {
      if (menu[i].media == true)
        media = `<div class='media' style='display:none'>Images</div>`;
      else media = `<div class='blank'></div>`;
      air.append(
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
  displayDescription(showDescription);
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
      },
    200)
    unloading();
    return false;
  }
  let exact =
    menu.findIndex(
      (item) => item.id.toLowerCase().space() === filterURI.toString().toLowerCase().space()
  );
  let match = menu.findIndex(
    (item) => item.id.toLowerCase().space().match(filterURI.toString().toLowerCase().space())
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
    groupBuild();
    for (
      let i = 0;
      i <= description.length - 1;
      i++)
        writeFilterResponse(
          menu.indexOf(
            description[i]
          )
        );
    populateCategoryGroup(description[0].category);
    displayDescription(showDescription);
    displayExpand(expand);
    unloading();
  } else if (exact > -1) xmlRequestParsing(exact)
  else return false;
  document.title = filterURI.toString().space();
};

let writeFilterResponse = function (menuObject) {
  let media;
  let result = document.querySelector(`.result`);
  if (menu[menuObject].media == true)
    media = `<div class='media' style='display:none'>Images</div>`;
  else media = `<div class='blank'></div>`;
  result.append(
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
