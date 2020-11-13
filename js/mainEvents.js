window.onload = function () {
  _guest.setAttribute(`placeholder`, `Search Feeds`);
  _guest.style.caretColor = `#e4e4e4`;
  _guest.style.paddingLeft = `40px`;
  _guest.style.textAlign = `left`;
  _guest.focus();
  document.querySelector(`#front .icon`).classList.add(`search`);
  quickFeedDisplay(quickFeeds);
  if (_main.clientWidth <= 425 || quickFeedsTranslations == true) {
    _container.style.display = `block`;
    quickFeedAsset(7);
  }
  else if (quickFeedsTranslations == false) quickFeedAsset(8);
  else quickFeedAsset(7);
    if (!post) {
      if (
        Array.isArray(backgroundImage) &&
        typeof backgroundImage[0].path == "string" &&
        backgroundImage[0].element == `container`
      ) {
        _container.style.backgroundImage = `url(${backgroundImage[0].path})`;
      } else if (
        Array.isArray(backgroundImage) &&
        typeof backgroundImage[0].path == "string" &&
        backgroundImage[0].element == `main`
      ) {
        _main.style.backgroundImage = `url(${backgroundImage[0].path})`;
      }
      if (
        Array.isArray(backgroundImage) &&
        typeof backgroundImage[0].position == "string"
      ) {
        _container.style.backgroundPosition = `${backgroundImage[0].position}`;
        _main.style.backgroundPosition = `${backgroundImage[0].position}`;
      }
      if (
        Array.isArray(backgroundImage) &&
        typeof backgroundImage[0].size == "string"
      ) {
        _container.style.backgroundSize = `${backgroundImage[0].size}`;
        _main.style.backgroundSize = `${backgroundImage[0].size}`;
      }
    }
  ready(() => {
    setTimeout(function(){
      if (isNumeric(post)) sideBarDisplay(false);
      else if (_main.clientWidth <= 768) {
        expand = false;
        onScreen = false;
        groupType = `blocks`;
        sideBarDisplay(true);
      } else {
        sideBarFirst = true;
        sideBarDisplay(onScreen);
      }
      if (expandBackground == true)
        document.querySelector(`.bg`).style.height = `${
          (background.length + 1) * 35
        }px`;
      if (expandVisual == true)
        document.querySelector(`.themes`).style.height = `${
          (themes.length + 1) * 35
        }px`;
      if (typeof set === `string`)
        var startup = setInterval(function () {
          if (typeof eval(set) === `function`) {
            window[set]();
            setTimeout(function () {
              clearInterval(startup);
            }, 500);
          }
        }, 250);
      if (!post && !location.search.split(`?`)[1])
        _visit.style.display = `flex`
      unloading()
    }, 25)
  });
};

_container.addEventListener('touchstart', function(event) {
  touchstartX = event.changedTouches[0].screenX;
}, false);

_container.addEventListener('touchend', function(event) {
  touchendX = event.changedTouches[0].screenX;
    handleSwipe();
}, false);

window.addEventListener(
  `resize`,
  function (event) {
    if (_main.clientWidth <= 768) {
      guideOnScreen = onScreen
      onScreen = false;
      sideBarFirst = true;
      sideBarDisplay(false);
    } else {
      sideBarFirst = true;
      sideBarDisplay(guideOnScreen);
    }
  },
  true
);
document.addEventListener(
  `scroll`,
  function (event) {
    if (event.target.id == `main`) {
      if (
        _main.scrollHeight - _main.scrollTop - _main.clientHeight <= 350 &&
        stop == false &&
        reader == true &&
        httpRequest.status != 4 &&
        httpRequest.status == 200
      ) {
        first = false;
        xmlRequestParsing(null, null, anyRandomMenuObject());
      } else stop = false;
    }
  },
  true
); //:before pseudo-elements not loaded in DOM
document.addEventListener(
  `ontouchmove`,
  function (event) {
    if (event.target.id == `main`) {
      if (
        _main.scrollHeight - _main.scrollTop - _main.clientHeight <= 450 &&
        reader == true &&
        httpRequest.status == 200
      ) {
        xmlRequestParsing(null, null, any());
      }
    }
    event.preventDefault();
  },
  false
); //:before pseudo-elements not loaded in DOM
document.addEventListener(
  `click`,
  function (event) {
    if (event.target.id == `check`) {
      repository.blank();
    }
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
      _top.style.display = `block`;
      document.title = category.capitalize();
      populateCategoryGroup(category);
      if (expand == true) var groupType = `list`;
      else var groupType = `blocks`;
      displayExpand(expand);
      unloading();
    }
    if (
      event.target.classList.contains(`construct`) ||
      event.target.classList.contains(`picture`) ||
      event.target.classList.contains(`header`) ||
      event.target.classList.contains(`result`) ||
      event.target.classList.contains(`post`) ||
      event.target.classList.contains(`site`) ||
      event.target.classList.contains(`cat`) ||
      event.target.classList.contains(`air`) ||
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
      event.target.id == `top` ||
      event.target.id == `arm` ||
      event.target.classList.contains(`fa`)
    ) {
      if (
        !document
          .querySelectorAll(`.attribute`)
          .forEach((a) => (a.style.display = `none`))
      ) {
        document
          .querySelectorAll(`.attribute`)
          .forEach((a) => (a.style.display = `none`));
        var attr = document.querySelectorAll(`.fa-ellipsis-v`);
        for (i = 0; i < attr.length; i++) {
          attr[i].classList.remove(`fa-ellipsis-v`);
          attr[i].classList.add(`fa-ellipsis-h`);
        }
      }
      if (_match.style.display === `block`) {
        document.querySelector(`#input .icon`).classList.remove(`slide`);
        _match.style.display = `none`;
        _view.setAttribute(`placeholder`, ``);
        _view.style.textAlign = `center`;
        _view.style.paddingLeft = `20px`;
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
    if (event.target.classList.contains(`fa-expand-alt`)) {
      if (!document.body.contains(document.querySelector(`#group`)))
        populateCategoryGroup(category);
      _visit.style.display = `none`;
      topMenuBarDisplay(topBar);
      expand = expand != true;
      displayExpand(expand);
      if (expand == true){
        var groupType = `list`;
        if (showDescription == false) {
          _main
            .querySelectorAll(`.populate`)
            .forEach((a) => a.classList.add(`basic`));
          _main
            .querySelectorAll(`.populate`)
            .forEach((a) => a.classList.remove(`expand`));
        } else if (showDescription == true) {
          _main
            .querySelectorAll(`.populate`)
            .forEach((a) => a.classList.remove(`expand`));
          _main
            .querySelectorAll(`.populate`)
            .forEach((a) => a.classList.add(`expand`));
        }
      }
      else {
        var groupType = `blocks`;
        _main
          .querySelectorAll(`.populate`)
          .forEach((a) => a.classList.remove(`basic`));
        _main
          .querySelectorAll(`.populate`)
          .forEach((a) => a.classList.remove(`expand`));
        notifyOption(`Displaying ${category} as ${groupType.capitalize()}`);
      }
    }
    if (event.target.classList.contains(`select`)) {
      if (showRipple == true) {
        const button = event.target.closest(`.populate`).getBoundingClientRect();
        const circle = document.createElement(`span`);
        const diameter = Math.max(
          event.target.clientWidth,
          event.target.clientHeight
        );
        const radius = diameter / 2;
        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${event.clientX - button.left - radius}px`;
        circle.style.top = `${event.clientY - button.top - radius}px`;
        circle.classList.add(`ripple`);
        if (document.querySelector(`.ripple`))
          document.querySelector(`.ripple`).remove();
        event.target.closest(`.populate`).appendChild(circle);
      }
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
        _toggle.style.display = `none`;
        _visit.style.display = `none`;
        xmlRequestParsing(
          null,
          null,
          event.target.closest(`.populate`).getAttribute(`aria-item`)
        );
      }, 500);
    }
    if (
      event.target.classList.contains(`construct`)
    ) {
      setTimeout(function() {
        event.target.closest(`.filter`).getAttribute(`aria-item`).blank();
      }, 750)
    }
    if (event.target.classList.contains(`translation`)) {
      id = 0;
      category = event.target.closest(`.translation`).getAttribute(`aria-item`);
      setTimeout(function () {
        if (reader == true) {
          if (document.body.contains(document.querySelector(`.channel`)))
            first = false;
          randomDuplicate = [];
          xmlRequestParsing(null, null, anyRandomMenuObject());
          notifyOption(`Switched to now reading ${category}.`);
        } else {
          if (document.body.contains(document.querySelector(`#xml`)))
            document.querySelector(`#xml`).remove();
          if (document.body.contains(document.querySelector(`#group`)))
            document.querySelector(`#group`).remove();
          location.pathname.state();
          _toggle.style.display = `none`;
          _visit.style.display = `none`;
          populateCategoryGroup(
            event.target.closest(`.translation`).getAttribute(`aria-item`)
          );
          topMenuBarDisplay(topBar);
          displayExpand(expand);
        }
      }, 500);
    }
    if (
      event.target.classList.contains(`entity`) ||
      event.target.classList.contains(`asset`) ||
      event.target.classList.contains(`query`)
    ) {
      _toggle.style.display = `none`;
      _visit.style.display = `none`;
      xmlRequestParsing(
        null,
        null,
        event.target.closest(`.asset`).getAttribute(`aria-item`)
      );
      topMenuBarDisplay(topBar);
    }
    if (
      event.target.classList.contains(`checkmark__circle`) ||
      event.target.classList.contains(`checkmark__check`) ||
      event.target.classList.contains(`checkmark`) ||
      event.target.classList.contains(`blur`)
    ) {
      if (
        Array.isArray(backgroundImage) &&
        typeof backgroundImage[0].path == "string" &&
        backgroundImage[0].element == `container`
      ) {
        _container.style.backgroundImage = `url(${backgroundImage[0].path})`;
      } else if (
        Array.isArray(backgroundImage) &&
        typeof backgroundImage[0].path == "string" &&
        backgroundImage[0].element == `main`
      ) {
        _main.style.backgroundImage = `url(${backgroundImage[0].path})`;
      }
      if (
        Array.isArray(backgroundImage) &&
        typeof backgroundImage[0].position == "string"
      ) {
        _container.style.backgroundPosition = `${backgroundImage[0].position}`;
        _main.style.backgroundPosition = `${backgroundImage[0].position}`;
      }
      if (
        Array.isArray(backgroundImage) &&
        typeof backgroundImage[0].size == "string"
      ) {
        _container.style.backgroundSize = `${backgroundImage[0].size}`;
        _main.style.backgroundSize = `${backgroundImage[0].size}`;
      }
      _main.classList.remove(`guide`);
      _guide.style.display = `none`;
      while (event.target.firstChild)
        event.target.removeChild(event.target.lastChild);
      sideBarFirst = true;
      onScreen = guideOnScreen;
      if (post && _main.clientWidth >= 426) sideBarDisplay(onScreen);
      else if (post) {
        onScreen = false
        _sidebar.querySelector(`#hide`).style.left = `240`;
        sideBarDisplay(onScreen)
      }
      topMenuBarDisplay(topBar);
      document.querySelector(`#xml`).style.display = `block`
      post = -1
      local = -1
    }
    if (event.target.classList.contains(`bottom`)) {
      document.title = category;
      event.target.closest(`#xml`).remove();
      if (location.href.match(`\\?q=`)) {
        var uri = location.search.split(`?q=`)[1].match(/[^&]+/g);
        if (location.href.match(`\\+1`))
          var query = uri[0].replace(/\+1/g, ``).space();
        else var query = uri[0].space();
        filterInputResponse(false, false, query, true);
      } else populateCategoryGroup(category);
      displayExpand(expand);
      unloading();
      id = 0;
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
      xmlRequestParsing(
        null,
        null,
        event.target.closest(`.suggest`).getAttribute(`aria-item`)
      );
    }
    if (event.target.classList.contains(`asset`)) {
      xmlRequestParsing(null, null, event.target.getAttribute(`aria-item`));
    }
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
      event.target.classList.contains(`filterBlur`) ||
      event.target.classList.contains(`img`)
    ) {
      if (tap == 0) {
        // set first click
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
        // compare first click to this click and see if they occurred within double click threshold
        if (new Date().getTime() - tap < 350) {
          // double click occurred
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
      notifyOption(`URL Copied to Clipboard.`);
    }
    if (
      event.target.classList.contains(`fa-share`) ||
      event.target.classList.contains(`post`)
    ) {
      event.target.closest(`.item`).querySelector(`.share`).select();
      document.execCommand(`copy`);
      notifyOption(`Post Copied to Clipboard.`);
      event.stopPropagation();
    }
    if (
      event.target.classList.contains(`fa-camera`) ||
      event.target.classList.contains(`picture`)
    ) {
      event.target.closest(`.item`).querySelector(`.source`).select();
      document.execCommand(`copy`);
      notifyOption(`Source Copied to Clipboard.`);
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
