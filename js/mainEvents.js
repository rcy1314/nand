window.onload = function () {

  quickFeedDisplay(quickFeeds);
  if (sideBarCenter == false) _content.style.position = `relative`
  else _content.style.position = `absolute`
  if (_main.clientWidth <= 425 && quickFeedsTranslations == true) quickFeedAsset(7);
  else if (quickFeedsTranslations == false) quickFeedAsset(8);

      if (backgroundImage[0].element == `container`)
        _container.style.backgroundImage = `url(${backgroundImage[0].path})`;
      else if (backgroundImage[0].element == `main`)
        _main.style.backgroundImage = `url(${backgroundImage[0].path})`;

      _container.style.backgroundPosition = `${backgroundImage[0].position}`;
      _main.style.backgroundPosition = `${backgroundImage[0].position}`;
      _container.style.backgroundSize = `${backgroundImage[0].size}`;
      _main.style.backgroundSize = `${backgroundImage[0].size}`;

      if (expandBackground == true)
        document.querySelector(`.bg`).style.height = `${
          (background.length + 1) * 35
        }px`;
      if (expandSettings == true)
        document.querySelector(`.set`).style.height = `${
          (settings.length + 1) * 35
        }px`;
      if (expandVisual == true)
        document.querySelector(`.themes`).style.height = `${
          (themes.length + 1) * 35
        }px`;
      if (expandFilter == true)
      document.querySelector(`.exclude`).style.height =
        `${(exclude.length * 34.25) + 75}px`;

    _container.style.display = `block`;
    //overwriting settings.js
    if (_main.clientWidth <= 425) {
      window[`Holidays`]();
      set = `Holidays`
      return false;
    }

};

window.addEventListener('touchstart', function(event) {
  touchstartX = event.changedTouches[0].screenX;
}, { passive: true} );

window.addEventListener('touchend', function(event) {
  touchendX = event.changedTouches[0].screenX;
    handleSwipe();
}, { passive: true} );

document.addEventListener(
  `scroll`,
  function (event) {
    if (event.target.id == `main`) {
      if (
        _main.scrollHeight - _main.scrollTop - _main.clientHeight <= 350 &&
        httpRequest.status == 200 &&
        httpRequest.status != 4 &&
        Reader == true &&
        stop == false
      ) {
        first = false;
        xmlRequestParsing(null, null, anyRandomMenuObject());
      };
    }
  },
  true
);

document.addEventListener(
  `ontouchmove`,
  function (event) {
    if (event.target.id == `main`) {
      if (
        _main.scrollHeight - _main.scrollTop - _main.clientHeight <= 450 &&
        Reader == true &&
        httpRequest.status == 200
      ) {
        xmlRequestParsing(null, null, anyRandomMenuObject());
      }
    }
    event.preventDefault();
  },
  false
); //:before pseudo-elements not loaded in DOM
document.addEventListener(
  `click`,
  function (event) {
    if (event.target.id == `just`) {
      document.querySelector(`.Reader`)
        .nextElementSibling.classList.remove(`fa-minus`)
      document.querySelector(`.Reader`)
        .nextElementSibling.classList.add(`fa-star`)
      document.querySelector(`.onlyImages`)
        .nextElementSibling.classList.remove(`fa-minus`)
      document.querySelector(`.onlyImages`)
        .nextElementSibling.classList.add(`fa-star`)
      Reader = true;
      justRead = true;
      onlyImages = true;
      xmlRequestParsing(null, null, anyRandomMenuObject());
    }
    if (
      event.target.classList.contains(`exit`) ||
      event.target.classList.contains(`ext`)
    ) event.target.closest(`.courtesy`).getAttribute(`ext`).blank();
    if (event.target.id == `check`) repository.blank();
    if (
      event.target.classList.contains(`fa-angle-up`) ||
      event.target.id == `link` ||
      event.target.id == `show`
    ) {
      quickFeeds = quickFeeds != true;
      quickFeedDisplay(quickFeeds);
    }
    if (event.target.id == `home`) {
      id = 0;
      document.title = category.capitalize();
      if (expand == true) var groupType = `list`;
      else var groupType = `blocks`;
      populateCategoryGroup(category);
      topMenuBarDisplay(topBar);
      displayExpand(expand);
    }
    if (
      event.target.classList.contains(`construct`) ||
      event.target.classList.contains(`picture`) ||
      event.target.classList.contains(`header`) ||
      event.target.classList.contains(`result`) ||
      event.target.classList.contains(`post`) ||
      event.target.classList.contains(`site`) ||
      event.target.classList.contains(`cat`) ||
      event.target.classList.contains(`sel`) ||
      event.target.id == `container` ||
      event.target.id == `search` ||
      event.target.id == `option` ||
      event.target.id == `visit` ||
      event.target.id == `group` ||
      event.target.id == `main` ||
      event.target.id == `hide` ||
      event.target.id == `page` ||
      event.target.id == `xml` ||
      event.target.id == `air` ||
      event.target.id == `top` ||
      event.target.id == `arm`
    ) {
      if (
        !document
          .querySelectorAll(`.attribute`)
          .forEach((a) => (a.style.display = `none`))
      ) {
        document
          .querySelectorAll(`.attribute`)
          .forEach((a) => (a.style.display = `none`));
        var attribute = document.querySelectorAll(`.fa-ellipsis-v`);
        for (i = 0; i < attr.length; i++) {
          attribute[i].classList.remove(`fa-ellipsis-v`);
          attribute[i].classList.add(`fa-ellipsis-h`);
        }
      }
      if (_match.style.display === `block`) {
        document.querySelector(`#input .icon`).classList.remove(`slide`);
        _view.setAttribute(`placeholder`, ``);
        _view.style.textAlign = `center`;
        _view.style.paddingLeft = `10px`;
        _match.style.display = `none`;
        _view.value = `Search`;
        _view.blur();
      } else if (_first.style.display === `block`) {
        _label.style.visibility = `visible`;
        _quick.style.visibility = `visible`;
        _first.style.display = `none`;
        _guest.blur();
      }
      event.stopPropagation();
    }
    if (
      event.target.classList.contains(`construct`)
    ) {
      let url =
        menu[id].uri
          .match(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.([a-z]{2,6}){1}/g)
      url.toString().blank()
    }
    if (event.target.classList.contains(`fa-expand-alt`)) {
      if (!document.body.contains(document.querySelector(`#group`)))
        populateCategoryGroup(category);
      document.querySelector(`#group`).style.display = `none`
      _visit.style.display = `none`;
      topMenuBarDisplay(topBar);
      expand = expand != true;
      if (expand == false) {
        document.querySelector(`.List`)
          .nextElementSibling.classList.remove(`fa-star`)
        document.querySelector(`.List`)
          .nextElementSibling.classList.add(`fa-minus`)
        document.querySelector(`.Blocks`)
          .nextElementSibling.classList.add(`fa-star`)
        document.querySelector(`.Blocks`)
          .nextElementSibling.classList.remove(`fa-minus`)
      }
      displayExpand(expand);
      if (expand == true){
        document.querySelector(`.List`)
          .nextElementSibling.classList.add(`fa-star`)
        document.querySelector(`.List`)
          .nextElementSibling.classList.remove(`fa-minus`)
        document.querySelector(`.Blocks`)
          .nextElementSibling.classList.remove(`fa-star`)
        document.querySelector(`.Blocks`)
          .nextElementSibling.classList.add(`fa-minus`)
        var groupType = `list`;
        if (showDescription == false) {
          _main
            .querySelectorAll(`.populate`)
            .forEach((a) => a.classList.remove(`expand`));
          _main
            .querySelectorAll(`.populate`)
            .forEach((a) => a.classList.add(`basic`));
        } else if (showDescription == true) {
          _main
            .querySelectorAll(`.populate`)
            .forEach((a) => a.classList.remove(`expand`));
          _main
            .querySelectorAll(`.populate`)
            .forEach((a) => a.classList.add(`expand`));
        }
      } else if (showDescription == true){
        var groupType = `blocks`;
        _main
          .querySelectorAll(`.populate`)
          .forEach((a) => a.classList.remove(`expand`));
        _main
          .querySelectorAll(`.populate`)
          .forEach((a) => a.classList.remove(`basic`));
      }
      unloading();
    }
    if (event.target.classList.contains(`select`)) {
      let setPause
      if (showRipple == true) {
        rippleBuild(event, event.target.closest(`.populate`))
        setPause = 500
      } else setPause = 0
      setTimeout(function () {
        if (_match.style.display === `block`) {
          _match.style.display = `none`;
          _view.blur();
          return false;
        } else if (_first.style.display === `block`) {
          _first.style.display = `none`;
          _guest.blur();
          return false;
        }
        xmlRequestParsing(
          null,
          null,
          event.target.closest(`.populate`).getAttribute(`aria-item`)
        );
        _toggle.style.display = `none`;
        _visit.style.display = `none`;
      }, setPause);
    }
    if (event.target.classList.contains(`translation`)) {
      id = 0;
      first = true;
      category = event.target.closest(`.translation`).getAttribute(`aria-item`);
        if (Reader == true) {
          randomDuplicate = [];
          xmlRequestParsing(null, null, anyRandomMenuObject());
        } else {
          let setPause
          if (showRipple == true) {
            rippleBuild(event, event.target.closest(`.translation`))
            setPause = 500
          } else setPause = 0
          if (document.body.contains(document.querySelector(`#xml`)))
            document.querySelector(`#xml`).remove();
          if (document.body.contains(document.querySelector(`#group`)))
            document.querySelector(`#group`).remove();
          setTimeout(function () {
            populateCategoryGroup(
              event.target.closest(`.translation`).getAttribute(`aria-item`)
            );
            topMenuBarDisplay(topBar);
            displayExpand(expand);
            _toggle.style.display = `none`;
            _visit.style.display = `none`;
          }, setPause);
        }
    }
    if (
      event.target.classList.contains(`entity`) ||
      event.target.classList.contains(`asset`) ||
      event.target.classList.contains(`query`)
    ) {
      xmlRequestParsing(
        null,
        null,
        event.target.closest(`.asset`).getAttribute(`aria-item`)
      );
      topMenuBarDisplay(topBar);
      _toggle.style.display = `none`;
      _visit.style.display = `none`;
    }
    if (
      event.target.classList.contains(`checkmark__circle`) ||
      event.target.classList.contains(`checkmark__check`) ||
      event.target.classList.contains(`checkmark`) ||
      event.target.classList.contains(`blur`)
    ) {
      _guide.style.display = `none`;
      sideBarFirst = true;
      onScreen = guideOnScreen;
      if (post && _main.clientWidth >= 426) sideBarDisplay(guideOnScreen);
      else if (post) {
        onScreen = false
        _sidebar.querySelector(`#hide`).style.left = `240`;
        sideBarDisplay(onScreen)
      }
      topMenuBarDisplay(topBar);
      local = -1
      post = -1
    }
    if (event.target.classList.contains(`bottom`)) {
      event.target.closest(`#xml`).remove();
      if (id === 0) populateCategoryGroup(category);
      else {
        if (location.href.match(`\\?q=`)) {
          var uri = location.search.split(`?q=`)[1].match(/[^&]+/g);
          if (location.href.match(`\\+1`))
            var query = uri[0].replace(/\+1/g, ``).space();
          else var query = uri[0].space();
          filterInputResponse(false, false, query, true);
        } else populateCategoryGroup(category);
        document.title = category;
        displayExpand(expand);
      }
    }
    if (event.target.classList.contains(`more`)) {
      event.target.parentNode.innerHTML = event.target.parentNode.getAttribute(
        `text`
      );
      event.target.style.display = `none`;
      event.stopPropagation();
    }
    if (
      event.target.classList.contains(`classic`) ||
      event.target.classList.contains(`item`) ||
      event.target.classList.contains(`wrap`) ||
      event.target.classList.contains(`pub`) ||
      event.target.classList.contains(`ago`)
    ) {
      event.target.closest(`.item`).getAttribute(`ext`).blank();
    }
    if (
      event.target.classList.contains(`combine`) ||
      event.target.classList.contains(`suggest`) ||
      event.target.classList.contains(`circle`) ||
      event.target.classList.contains(`random`) ||
      event.target.classList.contains(`bold`)
    ) {
      if (document.body.contains(document.querySelector(`#xml`)))
        document.querySelector(`#xml`).remove();
      xmlRequestParsing(
        null,
        null,
        event.target.closest(`.suggest`).getAttribute(`aria-item`)
      );
    }
    if (event.target.classList.contains(`asset`))
      xmlRequestParsing(null, null, event.target.getAttribute(`aria-item`));
    if (
      event.target.classList.contains(`flip-front`) ||
      event.target.classList.contains(`flip-back`) ||
      event.target.classList.contains(`front`) ||
      event.target.classList.contains(`next`) ||
      event.target.classList.contains(`back`)
    ) {
      event.target.closest(`#xml`).remove();
      xmlRequestParsing(
        null,
        null,
        event.target.closest(`.btn`).getAttribute(`aria-item`)
      );
    }
    if (
      event.target.classList.contains(`option`)
    ) {
      if (tap == 0) {
        tap = new Date().getTime();
        setTimeout(function () {
          tap = 0
        }, 350)
      } else {
        if (new Date().getTime() - tap < 350) {
          let i = exclude.indexOf(event.target.innerHTML)
          exclude.splice(i, 1)
          event.target.remove()
          if (exclude.length == 0)
            document.querySelector(`.exclude`).style.height = `70px`
          else
          document.querySelector(`.exclude`).style.height =
            `${(exclude.length * 34.25) + 65}px`;
          tap = 0;
        }
      }
      event.stopPropagation();
    }
    if (
      event.target.classList.contains(`filterBlur`) ||
      event.target.classList.contains(`img`)
    ) {
      if (tap == 0) {
        tap = new Date().getTime();
        setTimeout(function () {
          if (
            new Date().getTime() - tap >= 350 &&
            new Date().getTime() - tap < 400
          )
            if (
              !event.target
                .closest(`.item`)
                .querySelector(`.img`)
                .classList.contains(`guide`) &&
              event.target
                .closest(`.item`)
                .querySelector(`.img`)
                .classList.contains(`default`)
            ) {
              count = [];
              let sticky = [];
              sticky.push({
                courtesy: event.target.closest(`.item`).querySelector(`.header`)
                  .innerHTML,
                element: event.target
                  .closest(`.item`)
                  .getAttribute(`aria-item`),
                image: menu[
                  event.target.closest(`.item`).getAttribute(`aria-object`)
                ].image.image(),
                title: event.target
                  .closest(`.item`)
                  .querySelector(`.pub`)
                  .getAttribute(`text`),
                share: event.target.closest(`.item`).querySelector(`.share`)
                  .value,
                dst: event.target
                  .closest(`.item`)
                  .querySelector(`.ago:last-child`).innerHTML,
                src: event.target.closest(`.item`).querySelector(`.source`)
                  .value,
                externalURI: event.target.closest(`.item`).getAttribute(`ext`),
                id: event.target.closest(`.item`).getAttribute(`aria-object`),
              });
              guideDisplay(sticky);
            } else if (
              event.target
                .closest(`.item`)
                .querySelector(`.img`)
                .classList.contains(`guide`)
            )
              event.target.closest(`.item`).getAttribute(`ext`).blank();
            else if (
              !event.target
                .closest(`.item`)
                .querySelector(`.img`)
                .classList.contains(`default`)
            )
              event.target.closest(`.item`).getAttribute(`ext`).blank();
            else if (category != `Social`)
              event.target.closest(`.item`).getAttribute(`ext`).blank();
          tap = 0;
        }, 350);
      } else {
        if (new Date().getTime() - tap < 350) {
          if (event.target.classList.contains(`leave`)) {
            event.target.closest(`.item`).getAttribute(`ext`).blank();
            return false;
          }
          event.target
            .closest(`.image`)
            .querySelector(
              `.fa-heart`
            ).style.animation = `scale .7s ease-in-out .1s both`;
          event.target
            .closest(`.image`)
            .querySelector(`.fa-heart`).style.display = `block`;
          event.target
            .closest(`.image`)
            .querySelector(`.fa-heart`).style.zIndex = `12`;
          setTimeout(function () {
            event.target
              .closest(`.image`)
              .querySelector(`.fa-heart`).style.animation = `none`;
            event.target
              .closest(`.image`)
              .querySelector(`.fa-heart`).style.display = `none`;
            event.target
              .closest(`.image`)
              .querySelector(`.fa-heart`).style.zIndex = `0`;
          }, 1500);
          tap = 0;
        }
      }
      event.stopPropagation();
    }
    if (
      event.target.classList.contains(`fa-ellipsis-h`) ||
      event.target.classList.contains(`fa-ellipsis-v`) ||
      event.target.classList.contains(`copy`)
    ) {
      if (event.target.closest(`.copy`).querySelector(`.fa-ellipsis-v`)) {
        event.target
          .closest(`.copy`)
          .querySelector(`.fa-ellipsis-v`)
          .classList.add(`fa-ellipsis-h`);
        event.target
          .closest(`.copy`)
          .querySelector(`.fa-ellipsis-h`)
          .classList.remove(`fa-ellipsis-v`);
        event.target
          .closest(`.copy`)
          .querySelector(`.attribute`).style.display = `none`;
      } else if (
        event.target.closest(`.copy`).querySelector(`.fa-ellipsis-h`)
      ) {
        event.target
          .closest(`.copy`)
          .querySelector(`.fa-ellipsis-h`)
          .classList.add(`fa-ellipsis-v`);
        event.target
          .closest(`.copy`)
          .querySelector(`.fa-ellipsis-v`)
          .classList.remove(`fa-ellipsis-h`);
        event.target
          .closest(`.copy`)
          .querySelector(`.attribute`).style.display = `block`;
      }
      event.stopPropagation();
    }
    if (
      event.target.classList.contains(`fa-at`) ||
      event.target.classList.contains(`site`)
    ) {
      event.target.closest(`.item`).querySelector(`.url`).select();
      document.execCommand(`copy`);
      event.stopPropagation();
    }
    if (
      event.target.classList.contains(`fa-share`) ||
      event.target.classList.contains(`post`)
    ) {
      event.target.closest(`.item`).querySelector(`.share`).select();
      document.execCommand(`copy`);
      event.stopPropagation();
    }
    if (
      event.target.classList.contains(`fa-camera`) ||
      event.target.classList.contains(`picture`)
    ) {
      event.target.closest(`.item`).querySelector(`.source`).select();
      document.execCommand(`copy`);
    }
    if (
      event.target.classList.contains(`fa-plus`) ||
      event.target.classList.contains(`right`)
    ) {
      quickFeedAsset(6);
      let leftPos = _feed.scrollLeft;
      _feed.scrollLeft = leftPos + _feed.clientWidth;
      if (_feed.scrollLeft >= 0)
        document.querySelector(`.left`).style.display = `block`;
    }
    if (
      event.target.classList.contains(`fa-minus`) ||
      event.target.classList.contains(`left`)
    ) {
      let leftPos = _feed.scrollLeft;
      _feed.scrollLeft = leftPos - _feed.clientWidth;
      if (_feed.scrollLeft - _feed.clientWidth <= 0)
        document.querySelector(`.left`).style.display = `none`;
    }
    event.preventDefault();
  },
  false
);
