let handleSwipe = function () {
  if (touchendX - 50 > touchstartX) {
    onScreen = true;
    sideBarDisplay(onScreen);
  } else if (touchendX + 50 < touchstartX) {
    onScreen = false;
    sideBarDisplay(onScreen);
  }
}

let quickFeedAsset = function (feedAssets) {
  let duplicate = [];
  if (feedAssets == 7)
    for (var i = 0; i <= translations.length - 1; i++) {
      _feed.append(translationBuild(translations[i]));
    }
  else
    for (var i = 1; i <= menu.length - 1; i++) {
      let randomMenuObject = menu.indexOf(
        menu[Math.floor(Math.random() * menu.length - 1)]
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

let inputListingIndex = function (inputFilter, listingWrapper) {
  let matches = [];
  let suggest = [];
  let listing = document.querySelector(listingWrapper + ` .listing`);
  while (listing.lastChild) listing.removeChild(listing.lastChild);
  document.querySelector(listingWrapper).style.display = `block`;
  if (inputFilter != ``)
    for (var i = menu.length - 1; i >= 1; i--) {
      if (menu[i].description.toLowerCase().match(inputFilter)) {
        if (suggest.length - 1 === suggestionBuffer) return false;
        listing.append(
          listingIndexBuild(
            menu[i].id.match(/[^\/]+$/g),
            menu.indexOf(menu[i]),
            menu[i].image.image(),
            menu[i].category,
            false,
            i
          )
        );
        suggest.push(menu.indexOf(menu[i]));
      }
    }
  for (i = 1; i <= menu.length - 1; i++) {
    let randomMenuObject = menu.indexOf(
      menu[Math.floor(Math.random() * menu.length - 1)]
    );
    if (
      menu[randomMenuObject] &&
      !matches.includes(randomMenuObject) &&
      menu[randomMenuObject].media == true
    ) {
      matches.push(randomMenuObject);
      if (suggest.length - 1 + (matches.length - 1) === suggestionBuffer)
        return false;
      listing.append(
        listingIndexBuild(
          menu[randomMenuObject].id.match(/[^\/]+$/g),
          menu.indexOf(menu[randomMenuObject]),
          menu[randomMenuObject].image.image(),
          menu[randomMenuObject].category,
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
  _visit.style.display = `none`;
  if (done == false && loading == `percent`) {
    complete = setInterval(function () {
      if (safeSearchIDs.includes(menu[id].id))
        width = _main.clientWidth / (count.length - 1);
      else if (count.length) width = _main.clientWidth / ((count.length - 1) / 4);
      if (!width || width == `Infinity`) width = _main.clientWidth / 15;
      if (_progress.clientWidth >= _main.clientWidth) {
        setTimeout(function () {
          _progress.style.transition = `all 1250ms ease-in-out`;
          _progress.style.opacity = `0`;
          setTimeout(function () {
            _progress.style.transition = `none`;
            _progress.style.width = `0%`;
          }, 1250);
        }, 250);
        clearInterval(complete);
      } else {
        _progress.style.opacity = `1`;
        _progress.style.transition = `all 750ms ease-in-out`;
        _progress.style.width = _progress.clientWidth + width;
      }
    }, 1000);
  }
  if (document.body.contains(document.getElementById(`xml`))) {
    document.querySelector(`#xml`).style.display = `block`;
      if (Reader == true && first == true) {
        if (
          _main.innerHeight >=
          document.querySelector(`#xml .channel`).innerHeight
        )
          if (httpRequest.status == 200) {
            first = false;
            xmlRequestParsing(false, null, null, anyRandomMenuObject());
          }
      }
    if (
      scrollIntoView == true &&
      first == true
    ) {
      document.querySelector(`.center`).classList.add(`scroll-into-view`)
      if (showSplash == true) _check.style.display = `none`;
    }
    if (fadeIntoView == true) {
      (function () {
        function checkPosition() {
          let elements = document.querySelectorAll(`.image`);
          for (let i = 0; i < elements.length; i++) {
            if (
              elements[i].querySelector(`.img`) &&
              !elements[i].querySelector(`.img`).classList.contains(`guide`) &&
              elements[i].getBoundingClientRect().top -
              _main.clientHeight <=
              0
            ) {
              elements[i].querySelector(`.img`).classList.add(`fade-in-element`);
              elements[i].querySelector(`.img`).classList.remove(`hidden`);
            }
            if (fadeIntoView == false) {
              document
                .querySelectorAll(`.img`)
                .forEach((a) => a.classList.remove(`hidden`));
              _main.removeEventListener(`scroll`, checkPosition);
              _main.removeEventListener(`resize`, init);
            }
          }
        }
        _main.addEventListener(`scroll`, checkPosition);
        if (scrollIntoView)
          setTimeout(function() {
            checkPosition();
          }, 500)
        else checkPosition();
      })();
    }
  }
  if (document.body.contains(document.getElementById(`group`))) {
    if (scrollIntoView == true) {
      document.querySelector(`.result`).classList.add(`scroll-into-view`)
      setTimeout(function() {
        document.querySelector(`#group`).style.display = `block`;
          if (document.body.contains(document.querySelector(`.air`)))
            _main.scrollTop = document.querySelector(`.air`).clientHeight;
        document.querySelector(`#group`).style.top = `-60px`;
      }, 25)
    }
  }
  if (onlyImages == true)
    if (document.body.contains(document.querySelector(`.result`)))
      _main.scrollTop = 0;
    if (onlyImages == false && scrollIntoView == false) {
      document.querySelector(`#group`).style.display = `block`;
      if (document.body.contains(document.querySelector(`.air`)))
        _main.scrollTop = document.querySelector(`.air`).clientHeight;
    }
  if (showSplash == true) _check.style.display = `none`;
};

let populateCategoryGroup = function (translation) {
  let media;
  if (scrollIntoView === true) _check.style.display = `block`;
  if (!document.body.contains(document.querySelector(`#group`))) groupBuild();
  let result = document.querySelector(`.result`);
  if (id && id != 0 && !location.href.match(`\\?q=`)) {
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
  for (let i = 1; i <= menu.length - 1; i++) {
    if (menu[i].media == true)
      media = `<div class='media' style='display:none'>Images</div>`;
    else media = `<div class='blank'></div>`;
    if (onlyImages == true) {
      if (
        id != menu.indexOf(menu[i]) &&
        translation == menu[i].category &&
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
      if (translation == menu[i].category && id != menu.indexOf(menu[i])) {
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
  id = 0;
  if (onlyImages == false) reverseCategoryGroup(translation);
  else if (onlyImages == true) {
    displayDescription(showDescription);
    unloading();
  }
  main.setAttribute(`tabindex`, -1);
  main.focus();
};

let reverseCategoryGroup = function (translation) {
  let media;
  let group = document.querySelector(`#group`);
  let result = document.querySelector(`.result`);
  if (!document.body.contains(document.querySelector(`.air`))) {
    let div = document.createElement(`div`);
    div.classList.add(`air`);
    group.prepend(div);
  }
  let air = document.querySelector(`.air`);
  for (let i = 1; i < menu.length; i++) {
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
  if (translations.includes(filterURI.toString().capitalize())) {
    setTimeout(function() {
      populateCategoryGroup(filterURI.toString().capitalize());
    }, 200)
    category = filterURI.toString().capitalize();
    unloading();
    return false;
  }
  let exact = menu.findIndex(
    (item) => item.id.toLowerCase().space() === filterURI.toString().toLowerCase().space()
  );
  let match = menu.findIndex(
    (item) => item.id.toLowerCase().space().match(filterURI.toString().toLowerCase().space())
  );
  let description = menu.filter(function (item) {
    return item.description.space().toLowerCase()
      .match(filterURI.toString().toLowerCase().space());
  })
  if (description.length > 0 && exact === -1) {
    groupBuild();
    for (i = 0; i <= description.length - 1; i++)
      writeFilterResponse(menu.indexOf(description[i]));
    displayDescription(showDescription);
    displayExpand(expand);
    unloading();
  } else if (match === -1 && description.length <= 0) {
    xmlRequestParsing(`search`, filterURI.toLowerCase().space(), 0);
  } else if (!isNaN(parseFloat(exact)) && isFinite(exact)) {
      xmlRequestParsing(null, null, match);
  } else if (!isNaN(parseFloat(match)) && isFinite(match)) {
      xmlRequestParsing(null, null, match);
  } else if (match === -1)
    populateCategoryGroup(menu[match].category);
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
