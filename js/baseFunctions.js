function handleSwipe() {
    if (touchendX - 50 > touchstartX) {
      onScreen = true
      sideBarDisplay(onScreen)
    } else if (touchendX + 50 < touchstartX) {
      onScreen = false
      sideBarDisplay(onScreen)
    }
}

var displayDescription = function (toggleOption) {
  if (expand == true)
    if (toggleOption == false){
      if (document.body.contains(document.querySelector(`#xml`)))
        document.querySelector(`.about`).style.display = `none`
      _main
        .querySelectorAll(`.populate .des`)
        .forEach((a) => a.style.visibility = `hidden`);
      _main
        .querySelectorAll(`.populate`)
        .forEach((a) => a.classList.remove(`expand`));
      _main
        .querySelectorAll(`.populate`)
        .forEach((a) => a.classList.add(`mobile`));
    } else if (toggleOption == true){
      if (document.body.contains(document.querySelector(`#xml`)))
        document.querySelector(`.about`).style.display = `block`
      _main
        .querySelectorAll(`.populate`)
        .forEach((a) => a.classList.remove(`mobile`));
      _main
        .querySelectorAll(`.populate`)
        .forEach((a) => a.classList.add(`expand`));
      _main
        .querySelectorAll(`.populate .des`)
        .forEach((a) => a.style.visibility = `visible`);
    }
}

var displayExpand = function (toggleOption) {
  if (document.body.contains(document.querySelector(`#xml`)))
    document.querySelector(`#xml`).remove();
  if (toggleOption == true) {
    groupType = `list`;
    if (document.body.contains(document.getElementById(`group`))) {
      _main
        .querySelectorAll(`.hash`)
        .forEach((a) => (a.style.display = `block`));
      _main
        .querySelectorAll(`.media`)
        .forEach((a) => (a.style.display = `block`));
      if (_main.clientWidth > 768){
        _main
          .querySelectorAll(`.des`)
          .forEach((a) => (a.style.display = `block`));
      }
      _main
        .querySelectorAll(`.populate`)
        .forEach((a) => a.classList.add(`expand`));
      _main
        .querySelectorAll(`.populate`)
        .forEach((a) => (a.style.alignItems = `center`));
      _main
        .querySelectorAll(`.select`)
        .forEach((a) => (a.style.flexWrap = `nowrap`));
      _main
        .querySelectorAll(`.select`)
        .forEach((a) => (a.style.textAlign = `left`));
      _main
        .querySelectorAll(`.select`)
        .forEach((a) => (a.style.display = `flex`));
      if (document.body.contains(document.querySelector(`.air`)))
        document.querySelector(`.air`).style.display = `block`;
      if (document.body.contains(document.querySelector(`.result`)))
        document.querySelector(`.result`).style.display = `block`;
    }
  } else if (toggleOption == false) {
    groupType = `blocks`;
    if (document.body.contains(document.getElementById(`group`))) {
      _main
        .querySelectorAll(`.hash`)
        .forEach((a) => (a.style.display = `none`));
      _main
        .querySelectorAll(`.media`)
        .forEach((a) => (a.style.display = `none`));
      _main
        .querySelectorAll(`.des`)
        .forEach((a) => (a.style.display = `none`));
      _main
        .querySelectorAll(`.populate`)
        .forEach((a) => a.classList.remove(`expand`));
      _main
        .querySelectorAll(`.select`)
        .forEach((a) => (a.style.flexWrap = `wrap`));
      _main
        .querySelectorAll(`.select`)
        .forEach((a) => (a.style.textAlign = `center`));
      _main
        .querySelectorAll(`.select`)
        .forEach((a) => (a.style.display = `block`));
      if (document.body.contains(document.querySelector(`.air`)))
        document.querySelector(`.air`).style.display = `inline-flex`;
      if (document.body.contains(document.querySelector(`.result`)))
        document.querySelector(`.result`).style.display = `inline-flex`;
    }
  }
};

var appendSideBarLists = function (Elem, Class, Arrays) {
  let list = document.querySelector(Elem);
    for (i = 0; i <= Arrays.length - 1; i++) {
      let option = document.createElement(`div`);
      if (Class == `option`)
        option.classList.add(Class);
      else
        option.classList.add(Class, Arrays[i].class);
      if (Class == `background` || Class == `sel`)
        option.innerHTML = Arrays[i].name;
      if (Class == `option`) option.innerHTML = Arrays[i]
      if (Class == `theme`) option.innerHTML = Arrays[i].obFn
      list.append(option);
      if (Class != `option`)
        list.append(sideBarThemeBuild(Arrays[i].icon));
    }
}

  var appendSettingsSideBarLists = function (Elem, Class, Arrays) {
    let list = document.querySelector(Elem);
    for (i = 0; i <= Arrays.length - 1; i++) {
      let option = document.createElement(`div`);
      option.classList.add(Class, Arrays[i].class);
      option.innerHTML = Arrays[i].name;
      list.append(option);
        if (eval(Arrays[i].class) == true){
          document.querySelector(`.` + Arrays[i].class)
            .parentNode.insertBefore(
              sideBarThemeBuild(`fa-star`),
              document.querySelector(`.` + Arrays[i].class).nextSibling
            );
        } else {
          document.querySelector(`.` + Arrays[i].class)
            .parentNode.insertBefore(
              sideBarThemeBuild(`fa-minus`),
              document.querySelector(`.` + Arrays[i].class).nextSibling
            );
        }
    }
  }

var sideBarDisplay = function (toggleOption) {
  sideBarFirst = true;
  let content = document.querySelector(`#content`);
  if (!document.body.contains(document.querySelector(`.sel`))) {
    if (sideBarTranslations == true) {
      for (i = 0; i <= translations.length - 1; i++) {
        content.append(sideBarTranslationBuild(translations[i]));
        content.append(sideBarCategoryBuild(translations[i]));
      }
    }
    appendSideBarLists(`#content`, `sel`, selections)
    sideBarListBuild(`themes`, `border`, `fa-braille`, `Visual`);
    appendSideBarLists(`.themes`, `theme`, themes)
    sideBarListBuild(`bg`, `adjust`, `fa-adjust`, `Background`);
    appendSideBarLists(`.bg`, `background`, background)
    document.querySelector(`.bg`).append(urlFormBuild());
    sideBarListBuild(`exclude`, `parse`, `fa-tint`, `Filter`);
    appendSideBarLists(`.exclude`, `option`, exclude);
    document.querySelector(`.exclude`).append(excludeFormBuild());
    sideBarListBuild(`set`, `choose`, `fa-cube`, `Settings`);
    appendSettingsSideBarLists(`.set`, `settings`, settings)
    content.append(basicFormBuild());
  }
  if (toggleOption == true) {
    if (backgroundImage.element = `container` && _main.clientWidth >= 769)
      _container.style.width = `calc(100% + 240px)`
    if (_main.clientWidth > 769) {
      setTimeout(function () {
        _top.style.width = `calc(100% - 256px)`;
        _main.style.width = `calc(100% - 240px)`;
        _progress.style.left = `240px`;
        _main.style.left = `240px`;
        _sidebar.style.left = `0`;
        setTimeout(function() {
          _hide.style.left = `240px`;
        }, 75)
      }, 300);
    } else
    setTimeout(function () {
      document.querySelector(`.sideFilter`).style.display = `block`;
      document.querySelector(`#basic`).style.display = `block`;
      _sidebar.style.left = `0`;
    }, 300);
  } else if (toggleOption == false) {
    if (backgroundImage.element = `container` && _main.clientWidth >= 769)
      _container.style.width = `calc(100%)`
    document.querySelector(`.sideFilter`).style.display = `block`;
    document.querySelector(`#basic`).style.display = `block`;
    _sidebar.style.left = `-242px`;
    _progress.style.left = `0`;
    _main.style.width = `100%`;
    _hide.style.left = `0`;
    _main.style.left = `0`;
  }
};

var topMenuBarDisplay = function (toggleOption) {
  if (toggleOption == true){
    _view.style.display = `block`;
    _top.style.display = `block`;
  } else if (toggleOption == false) _top.style.display = `none`;
};

var quickFeedDisplay = function (toggleOption) {
  if (toggleOption == true) {
    _quick.classList.remove(`invisible`);
    _front.classList.add(`toggleHidden`);
    _front.classList.remove(`toggle`);
    _quick.classList.add(`visible`);
    _link.querySelector(`.fa-angle-up`).classList.remove(`rotateReverse`);
    _link.querySelector(`.fa-angle-up`).classList.add(`rotate`);
    _show.style.visibility = `hidden`;
    _just.classList.add(`toggleHidden`);
    _just.classList.add(`invisible`);
  } else if (toggleOption == false) {
    _quick.classList.remove(`visible`);
    _quick.classList.add(`invisible`);
    _front.classList.remove(`toggleHidden`);
    _front.classList.add(`toggle`);
    _link.querySelector(`.fa-angle-up`).classList.add(`rotateReverse`);
    _link.querySelector(`.fa-angle-up`).classList.remove(`rotate`);
    _show.style.visibility = `visible`;
    _just.classList.remove(`toggleHidden`);
    _just.classList.remove(`invisible`);
  }
};

var guideDisplay = function (pubArray) {
  _guide.innerHTML = `
  <svg class='checkmark' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 52 52'>
    <circle class='checkmark__circle' cx='26' cy='26' r='25' fill='none' />
    <path class='checkmark__check' fill='none' d='M16 16 36 36 M36 16 16 36' />
  `;
  _guide.append(guideBuild(pubArray[0]));
  document.querySelector(`.sticky`).style.display = `none`
  guideImageAttributes(pubArray[0].src);
};

var guideDisplayYoutube = function (pubArray) {
  _guide.innerHTML = `
  <svg class='checkmark' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 52 52'>
    <circle class='checkmark__circle' cx='26' cy='26' r='25' fill='none' />
    <path class='checkmark__check' fill='none' d='M16 16 36 36 M36 16 16 36' />
  `;
  _guide.append(guideBuildYoutube(pubArray[0]));
};

var contentStatusDisplay = function (
  menuIndex,
  recentPost,
  oldestPost,
  postsCount
) {
  if (document.body.contains(document.querySelector(`#xml .status`))) {
    var status = document.querySelector(`#xml .status`);
    status.append(contentBuild(oldestPost, recentPost, postsCount, menuIndex));
  }
  displayDescription(showDescription)
};

var quickFeedAsset = function (feedAssets) {
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

var inputListingIndex = function (inputFilter, listingWrapper) {
  let matches = [];
  let suggest = [];
  let listing = document.querySelector(listingWrapper + ` .listing`);
  while (listing.lastChild) listing.removeChild(listing.lastChild);
  document.querySelector(listingWrapper).style.display = `block`;
  if (inputFilter != ``)
    for (var i = menu.length - 1; i >= 1; i--) {
      if (menu[i].description.toLowerCase().match(inputFilter)) {
        if (
          suggest.length - 1 === suggestionBuffer
        ) return false;
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
      matches.push(randomMenuObject)
        if (
          (suggest.length - 1) + (matches.length - 1) === suggestionBuffer
        ) return false;
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

var progressBackDrop = function (done, percent) {
  if (done == true) {
    _progress.style.transition = `width .15s ease-in-out`;
    _progress.style.transitionDelay = `none`;
    _progress.style.width = `${percent}%`;
    if (document.body.contains(document.getElementById(`xml`)) && !post) {
      if (document.body.contains(document.querySelector(`#xml .channel`)))
        if (reader == true && first == true) {
          if (
            _main.innerHeight >=
            document.querySelector(`#xml .channel`).innerHeight
          )
            if (httpRequest.status == 200) {
              first = false;
              xmlRequestParsing(false, null, null, anyRandomMenuObject());
            }
        }
      document.querySelector(`#xml`).style.paddingTop = `0`;
      document.querySelector(`#xml`).style.display = `block`;
      if (scrollIntoView == true && reader == false) {
        document.querySelector(
          `#xml`
        ).style.paddingTop = document.querySelector(`#xml`).clientHeight;
          let Elem = document.querySelector(`#xml`);
          Elem.animate(
            {
              paddingTop: [
                `${document.querySelector(`#xml`).clientHeight}px`,
                `60`,
              ],
            },
            {
              duration: 500, // number in ms [this would be equiv of your speed].
              easing: `ease-in-out`,
              iterations: 1, // infinity or a number.
              complete: document.querySelector(`#xml`).style.paddingTop = `0`
              // fill: ''
            }
          );
      } else if (fadeIntoView == true) {
          (function() {
            var elements;
            var windowHeight;

            function init() {
              elements = document.querySelectorAll(`.image`);
              windowHeight = _main.clientHeight;
              for (var i = 0; i < elements.length; i++) {
                var element = elements[i];
                var positionFromTop = element.getBoundingClientRect().top;

                if (positionFromTop - windowHeight <= 0) {
                  element.querySelector(`.img`).classList.add(`fade-in-element`);
                  element.querySelector(`.img`).classList.remove(`hidden`);
                }
              }
            }

            function checkPosition() {
              for (var i = 0; i < elements.length; i++) {
                var element = elements[i];
                var positionFromTop = elements[i].getBoundingClientRect().top;

                if (positionFromTop - windowHeight <= 0) {
                    element.querySelector(`.img`).classList.add(`fade-in-element`);
                    element.querySelector(`.img`).classList.remove(`hidden`);
                }
                if (fadeIntoView == false) {
                  document
                    .querySelectorAll(`.img`)
                    .forEach((a) => (a.classList.remove(`hidden`)));
                  _main.removeEventListener(`scroll`, checkPosition);
                  _main.removeEventListener(`resize`, init);
                }
              }
            }

            _main.addEventListener(`scroll`, checkPosition);
            _main.addEventListener(`resize`, init);
            init()
            checkPosition()
          })();
        }
    }
    if (document.body.contains(document.getElementById(`group`))) {
      document.querySelector(`#group`).style.display = `block`;
      if (scrollIntoView == true) {
        document.querySelector(
          `#group`
        ).style.paddingTop = document.querySelector(`#group`).clientHeight;
          let Elem = document.querySelector(`#group`);
          Elem.animate(
            {
              paddingTop: [
                `${document.querySelector(`#group`).clientHeight}px`,
                `57px`,
              ],
            },
            {
              duration: 750, // number in ms [this would be equiv of your speed].
              easing: `ease-in-out`,
              iterations: 1, // infinity or a number.
              // fill: ''
            }
          );
        setTimeout(function () {
          document.querySelector(`#group`).style.paddingTop = `57px`;
          _check.style.visibility = `hidden`;
        }, 750);
      }
      if (onlyImages == true)
        if (document.body.contains(document.querySelector(`.result`)))
          _main.scrollTop = 0;
      setTimeout(function() {
        if (onlyImages == false) {
          if (document.body.contains(document.querySelector(`.air`)))
            _main.scrollTop = document.querySelector(`.air`).clientHeight;
        }
        visit.style.display = `none`
      }, 25)
    }
    setTimeout(function () {
      _progress.style.transitionDelay = `none`;
      _progress.style.transition = `none`;
      _progress.style.width = `0%`;
    }, 250);
  }
};

var populateCategoryGroup = function (translation) {
  if (scrollIntoView === true) _check.style.visibility = `visible`;
  if (!document.body.contains(document.querySelector(`#group`))) groupBuild();
  let result = document.querySelector(`.result`);
  if (id && id != 0 && !location.href.match(`\\?q=`)) {
    if (menu[id].media == true)
      var media = `<div class='media' style='display:none'>Images</div>`;
    else var media = `<div class='blank'></div>`;
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
      var media = `<div class='media' style='display:none'>Images</div>`;
    else var media = `<div class='blank'></div>`;
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
    displayDescription(showDescription)
    unloading();
  }
  main.setAttribute(`tabindex`, -1);
  main.focus();
};

var reverseCategoryGroup = function (translation) {
  let group = document.querySelector(`#group`);
  let result = document.querySelector(`.result`);
  if (!document.body.contains(document.querySelector(`.air`))) {
    let div = document.createElement(`div`);
    div.classList.add(`air`);
    group.prepend(div);
  }
  let air = document.querySelector(`.air`);
  for (let i = 1; i < menu.length - 1; i++) {
    if (category == menu[i].category) {
      if (menu[i].media == true)
        var media = `<div class='media' style='display:none'>Images</div>`;
      else var media = `<div class='blank'></div>`;
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
  displayDescription(showDescription)
  displayExpand(expand);
  unloading();
};

var filterInputResponse = function (
  initPassthrough,
  extendedextendedURI,
  filterURI,
  categoryBloat
) {
  var exact;
  var match;
  filter = [];
  _visit.style.display = `none`;
  if (translations.includes(filterURI.toString().capitalize())) {
    populateCategoryGroup(filterURI.toString().capitalize());
    category = filterURI.toString().capitalize();
    unloading();
    return false;
  }
  if (filterURI) var filterURI = filterURI.toString().toLowerCase().space();
  if (extendedURI)
    var extendedURI = extendedURI.toString().toLowerCase().space();
  else var extendedURI = filterURI;
  for (let i = 1; i <= menu.length - 1; i++) {
    let menuObject = menu[i].id.space().toLowerCase();
    let translation = menu[i].category.space().toLowerCase();
    let description = menu[i].description.space().toLowerCase();
    if (menu[i].hash == filterURI) {
      filter.push(menu.indexOf(menu[i]));
      exact = i;
      match = i;
      break;
    } else if (menuObject == filterURI || id == extendedURI) {
      filter.push(menu.indexOf(menu[i]));
      exact = i;
      match = i;
      break;
    } else if (menuObject.match(filterURI) || menuObject.match(extendedURI))
      filter.push(menu.indexOf(menu[i]));
    else if (description.match(filterURI) || description.match(extendedURI))
      filter.push(menu.indexOf(menu[i]));
    else if (translation.match(filterURI) || translation.match(extendedURI))
      filter.push(menu.indexOf(menu[i]));
  }
  if (!match) match = filter[0];
  if (filter.length == 0){
    xmlRequestParsing(`search`, filterURI.toLowerCase(), 0, null);
    document.querySelector(`body`).classList.remove(`blink`);
    return false
  }
  if (initPassthrough == false || !isNumeric(match) || !isNumeric(exact)) {
    if (!document.body.contains(document.querySelector(`#group`))) groupBuild();
    for (i = 0; i <= filter.length - 1; i++) writeFilterResponse(filter[i]);
  } else if (initPassthrough == true) {
    if (isNumeric(exact)){
      xmlRequestParsing(false, null, null, exact);
    }
    else if (isNumeric(match) && filter.length == 1){
      xmlRequestParsing(false, null, null, match);
    }
    return false;
  }
  if (categoryBloat == true && !isNumeric(match) || !isNumeric(exact))
    populateCategoryGroup(menu[match].category);
};

var writeFilterResponse = function (menuObject) {
  let result = document.querySelector(`.result`);
  if (menu[menuObject].media == true)
    var media = `<div class='media' style='display:none'>Images</div>`;
  else var media = `<div class='blank'></div>`;
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

var guideImageAttributes = function (src) {
  let newImg = new Image();
  newImg.setAttribute(`src`, src);
  newImg.onload = function () {
    _guide.querySelector(`.img`).setAttribute(`src`, src);
    if (_main.clientWidth <= 425) {
      _main.classList.add(`guide`);
      _guide.querySelector(`.sticky .header`).style.position = `absolute`;
      if (newImg.naturalWidth >= newImg.naturalHeight) {
        _guide.querySelector(`.img`).style.maxHeight = `70vh`;
        _guide.querySelector(`.img`).style.maxWidth = `100vw`;
        _guide.querySelector(`.wrap`).style.display = `block`;
        _guide.querySelector(`.wrap`).style.height = `fit-content`;
        _guide.querySelector(`.pub`).style.height = `fit-content`;
        _guide.querySelector(`.wrap`).style.maxWidth = `100vw`;
      } else if (newImg.naturalHeight >= newImg.naturalWidth) {
        _guide.querySelector(`.img`).style.maxWidth = `100vw`;
        _guide.querySelector(`.img`).style.maxHeight = `70vh`;
        _guide.querySelector(`.wrap`).style.maxWidth = `100vw`;
        _guide.querySelector(`.sticky`).style.top = `40px`
      }
      _guide.querySelector(`.ago`).style.position = `relative`;
      _guide.querySelector(`.sticky .header`).style.top =
        ~_guide.querySelector(`.img`).style.height - `60`;
    } else {
      _main.classList.add(`guide`);
      if (newImg.naturalWidth >= newImg.naturalHeight) {
        _guide.querySelector(`.img`).style.maxHeight = `80vh`;
        _guide.querySelector(`.img`).style.maxWidth = `70vw`;
      } else if (newImg.naturalHeight >= newImg.naturalWidth) {
        _guide.querySelector(`.img`).style.maxWidth = `40vw`;
        _guide.querySelector(`.img`).style.maxHeight = `70vh`;
      }
    }
    document.querySelector(`.sticky`).style.display = `block`
    _guide.style.display = `flex`;
  };
};
