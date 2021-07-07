window.onload = function () {
  if (window.clientWidth <= 425) flexBox = false;
  if (flexBox == true && _main.clientWidth >= 426)
    offset = 5550;
  else offset = 1050;

  if (backgroundImage[0].element == `container`)
    _container.style.backgroundImage = `url(${backgroundImage[0].path})`;
  else if (backgroundImage[0].element == `main`)
    _main.style.backgroundImage = `url(${backgroundImage[0].path})`;

  _container.style.backgroundPosition = `${backgroundImage[0].position}`;
  _main.style.backgroundPosition = `${backgroundImage[0].position}`;
  _container.style.backgroundSize = `${backgroundImage[0].size}`;
  _main.style.backgroundSize = `${backgroundImage[0].size}`;

    if (imageLoader == `double-circle`) {
    _main
      .querySelectorAll(`.loader`)
      .forEach(
        (a) => a.style.display = `block`
      );
    _main
      .querySelectorAll(`.bars`)
      .forEach(
        (a) => a.style.display = `none`
      );
    _main
      .querySelectorAll(`.animation`)
      .forEach(
        (a) => a.style.display = `none`
      );
    } else if (imageLoader == `v-bars`) {
    _main
      .querySelectorAll(`.bars`)
      .forEach(
        (a) => a.style.display = `block`
      );
    _main
      .querySelectorAll(`.animation`)
      .forEach(
        (a) => a.style.display = `none`
      );
    _main
      .querySelectorAll(`.loader`)
      .forEach(
        (a) => a.style.display = `none`
      );
   } else if (imageLoader == `ring-circle`) {
    _main
      .querySelectorAll(`.animation`)
      .forEach(
        (a) => a.style.display = `block`
      );
    _main
      .querySelectorAll(`.loader`)
      .forEach(
        (a) => a.style.display = `none`
      );
    _main
      .querySelectorAll(`.wrapper`)
      .forEach(
        (a) => a.style.display = `none`
      );
  } else if (imageLoader == false) {
    _main
      .querySelectorAll(`.bars`)
      .forEach(
        (a) => a.style.display = `none`
      );
    _main
      .querySelectorAll(`.loader`)
      .forEach(
        (a) => a.style.display = `none`
      );
    _main
      .querySelectorAll(`.animation`)
      .forEach(
        (a) => a.style.display = `none`
      );
  }

};

_quick.addEventListener('touchstart', (evt) => {
    quickFeedAsset(8);
  },
  { passive: true }
);

document.addEventListener('touchstart', (evt) => {
    touchmove = false;
    touchstartX = evt.changedTouches[0].screenX;
  },
  { passive: true }
);

document.addEventListener('touchend', (evt) => {
  touchendX = evt.changedTouches[0].screenX;
  handleSwipe();
  let isScrolling;
  // Clear our timeout throughout the scroll
  window.clearTimeout( isScrolling );

  // Set a timeout to run after scrolling ends
  isScrolling = setTimeout(function() {

    // Run the callback
    touchmove = true;

  }, 4000);
    touchendX = evt.changedTouches[0].screenX;
    if (
      _guide.style.display != `flex` &&
      sideScroll == false
    )
      handleSwipe();
  },
  { passive: true }
);
document.addEventListener('wheel', (e) => {
  if (document.body.contains(document.querySelector(`.channel`)))
    document.querySelector('.channel').scrollLeft += e.deltaY /4;
})
document.addEventListener('scroll', (evt) => {
    if (
      evt.target.classList.contains(`channel`) ||
      evt.target.id == `main`
    ) {
      let isScrolling;
      // Clear our timeout throughout the scroll
    	window.clearTimeout( isScrolling );
      touchmove = false;
    	// Set a timeout to run after scrolling ends
    	isScrolling = setTimeout(function() {

    		// Run the callback
        touchmove = true;

    	}, 4000);
      if (
        (
          _main.scrollHeight - _main.scrollTop - _main.clientHeight <= offset &&
          sideScroll == false &&
          Reader == true &&
          stop == false
        ) ||
        (
          sideScroll == true &&
          _main.querySelector(`.channel`).scrollWidth -
          _main.querySelector(`.channel`).scrollLeft -
          _main.querySelector(`.channel`).clientWidth <=
          _main.querySelector(`.channel`).clientWidth &&
          Reader == true &&
          stop == false
        )
      ) {
        stop = true;
        first = false;
        if (showSplash == true) {
          _check.style.display = `block`;
        }
        xmlRequestParsing(anyRandomMenuObject());
      }
    }
  },
  true
);

document.addEventListener('ontouchmove', (evt) => {
    if (
      evt.target.classList.contains(`channel`) ||
      evt.target.id == `main`
    ) {
      let isScrolling;
      // Clear our timeout throughout the scroll
    	window.clearTimeout( isScrolling );
      touchmove = false;

    	// Set a timeout to run after scrolling ends
    	isScrolling = setTimeout(function() {

    		// Run the callback
        touchmove = true;

    	}, 2600);
      if (
        (
          sideScroll == false &&
          _main.scrollHeight - _main.scrollTop - _main.clientHeight <= offset &&
          Reader == true &&
          stop == false
        ) ||
        (
          sideScroll == true &&
          _main.querySelector(`.channel`).scrollWidth -
          _main.querySelector(`.channel`).scrollLeft -
          _main.querySelector(`.channel`).clientWidth <=
          _main.querySelector(`.channel`).clientWidth &&
          Reader == true &&
          stop == false
        )
      ) {
        stop = true;
        first = false;
        if (showSplash == true) {
          _check.style.display = `block`;
        }
      }
    }
  },
  true
);
document.addEventListener('click', (evt) => {
    if (
      evt.target.classList.contains(`construct`) ||
      evt.target.classList.contains(`download`) ||
      evt.target.classList.contains(`picture`) ||
      evt.target.classList.contains(`source`) ||
      evt.target.classList.contains(`bottom`) ||
      evt.target.classList.contains(`header`) ||
      evt.target.classList.contains(`select`) ||
      evt.target.classList.contains(`result`) ||
      evt.target.classList.contains(`center`) ||
      evt.target.classList.contains(`post`) ||
      evt.target.classList.contains(`site`) ||
      evt.target.classList.contains(`wrap`) ||
      evt.target.classList.contains(`pub`) ||
      evt.target.classList.contains(`ago`) ||
      evt.target.classList.contains(`cat`) ||
      evt.target.classList.contains(`sel`) ||
      evt.target.classList.contains(`btn`) ||
      evt.target.id == `container` ||
      evt.target.id == `search` ||
      evt.target.id == `option` ||
      evt.target.id == `visit` ||
      evt.target.id == `group` ||
      evt.target.id == `main` ||
      evt.target.id == `hide` ||
      evt.target.id == `page` ||
      evt.target.id == `xml` ||
      evt.target.id == `air` ||
      evt.target.id == `top` ||
      evt.target.id == `arm`
    ) {
      if (
        _view.getAttribute(`placeholder`) == `Search` ||
        _match.style.display === `block`
      ) {
        _main.querySelector(`#input .icon`).classList.remove(`slide`);
        _view.setAttribute(`placeholder`, ``);
        _view.style.textAlign = `center`;
        _view.style.paddingLeft = `10px`;
        _match.style.display = `none`;
        _view.value = `Search`;
        _view.blur();
        return false;
      } else if (_first.style.display === `block`) {
        if (quickFeeds == false) _show.style.visibility = `visible`;
        _options.style.visibility = `visible`;
        _social.style.visibility = `visible`;
        _label.style.visibility = `visible`;
        _quick.style.visibility = `visible`;
        _link.style.visibility = `visible`;
        _first.style.display = `none`;
        _guest.blur();
        return false;
      } else if (
        !document
          .querySelectorAll(`.attribute`)
          .forEach((a) => (a.style.display = `none`))
      ) {
        document
          .querySelectorAll(`.attribute`)
          .forEach((a) => (a.style.display = `none`));
        var attribute = _main.querySelectorAll(`.fa-ellipsis-v`);
        for (i = 0; i < attribute.length; i++) {
          attribute[i].classList.remove(`fa-ellipsis-v`);
          attribute[i].classList.add(`fa-ellipsis-h`);
        }
      }
      evt.stopPropagation();
    }
    if (
      evt.target.getAttribute(`aria-item`) == `Assets`
    )
      populateAssets();
    else if (
      evt.target.classList.contains(
        `notify`
      )
    ) {
      _notify.classList.remove(`notify`);
      _notify.style.display = `none`;
    }
    else if (
      event.target.classList.contains(
        `fa-camera-retro`
      )
    ) {
    if (flexBox == false) {
        sideScroll = sideScroll != true
        if (
          sideScroll == true
        ) {
          scrollIntoView = false;
          let leaveOff = _main.scrollTop -
            ((parseInt(
              _main.querySelectorAll(`.item`).length) * parseInt(100)));
          notifyOption(`Horizontal`, `fa-check-circle`);
          if (
            document.body.contains(
              _main.querySelector(`#xml`))) {
            _main.querySelector(`.channel`).classList.add(`sideChannel`);
            _main.querySelector(`.center`).style.top = `60px`;
            _main.querySelector(`#xml`).style.top = 0;
            _main
              .querySelectorAll(`.item`)
              .forEach((a) => (a.classList.add(`sideItem`)));
            _main
              .querySelectorAll(`.classic`)
              .forEach((a) => (a.style.display = `block`));
            document.querySelector(`.channel`).scrollLeft = leaveOff;
          }
        } else if (
            sideScroll == false
          ) {
            let leaveOff = _main.querySelector(`.channel`).scrollLeft +
              (parseInt(
                _main.querySelectorAll(`.item`).length) * parseInt(100)
              );
            notifyOption(`Vertical`, `fa-check-circle`);
          if (
            document.body.contains(
              _main.querySelector(`#xml`)
            )
          ) {
            _main.querySelector(`.channel`).classList.remove(`sideChannel`);
            _main.querySelector(`.center`).style.top = `60px`;
            _main.querySelector(`#xml`).style.top = 0;
            _main
              .querySelectorAll(`.item`)
              .forEach((a) => (
                a.classList.remove(`sideItem`)
              )
            );
            _main
              .querySelectorAll(`.classic`)
              .forEach(
                (a) => a.style.display = `flex`
              );
            _main.scrollTop = leaveOff;
          }
        }
      }
    }
    else if (
      evt.target.classList.contains(
        `download`
      )
    ) {
      var menuObject = evt.target.closest(`.item`).getAttribute(`aria-object`);
      var pubIndex = evt.target.closest(`.item`).getAttribute(`aria-item`);
      var xhr = new XMLHttpRequest();
      var url =
      document
        .querySelector(
          `[aria-object='${menuObject}'][aria-item='${pubIndex}'] .source`
        ).value
      xhr.responseType = "arraybuffer";
      xhr.open("GET", cors + url, true);

      xhr.onreadystatechange = function () {
        if (xhr.readyState == xhr.DONE) {
          var file = new Blob([xhr.response], { type: "image" });
          saveAs(
            file,
            document
              .querySelector(
                `[aria-object='${menuObject}'][aria-item='${pubIndex}'] .source`
              ).value
          )
        }
      };

      xhr.send();
    }
    else if (
      evt.target.classList.contains(
        `fa-git`
      )
    )
      repository.blank();
    else if (
      evt.target.classList.contains(
        `fa-amazon`
      )
    )
      amazon.blank();
    else if (
      evt.target.classList.contains(
        `fa-twitter`
      )
    )
      twitter.blank();
    else if (
      evt.target.classList.contains(
        `fa-pinterest`
      )
    )
      pinterest.blank();
    else if (
      evt.target.classList.contains(
        `fa-instagram`
      )
    )
      instagram.blank();
    else if (
      evt.target.classList.contains(
        `fa-facebook-f`
      )
    )
      facebook.blank();
    else if (
      evt.target.classList.contains(
        `fa-youtube`
      )
    )
      youtube.blank();
    else if (
      evt.target.classList.contains(
        `fa-wordpress`
      )
    )
      wordpress.blank();
    else if (
      evt.target.classList.contains(
        `fa-github`
      )
    )
      repository.blank();
    else if (
      evt.target.classList.contains(
        `bar`
      )
    ) {
      _min.style.display = `block`;
      onScreen = onScreen != true;
      sideBarDisplay(onScreen);
      if (onScreen == true)
        _bar.style.display = `none`;
    }
    else if (
      evt.target.classList.contains(
        `joi`
      )
    ) {
      _visit.style.display = `none`;
      topMenuBarDisplay(topBar);
      first = true;
      Reader = Reader != true;
      if (Reader == false) {
        notifyOption(`Reading`, `fa-times-circle`);
        first = true;
        _main
          .querySelectorAll(`.joi`)
          .forEach(
            (a) => a.classList.remove(`luv`)
          );
      } else if (Reader == true) {
        first = true;
        touchmove = true;
        onlyImages = true;
        randomDuplicate = [];
        notifyOption(`Reading`, `fa-check-circle`);
        if (showSplash == true) _check.style.display = `Block`;
        if (
          document.body.contains(
            _main.querySelector(`#group`)
          )
        )
          _main.querySelector(`#group`).remove();
        if (
          document.body.contains(
            _main.querySelector(`#bottom`)
          )
        )
          _main.querySelector(`#bottom`).remove();
        if (showSplash == true) _check.style.display = `block`;
        _sb.style.display = `none`;
        _main
          .querySelectorAll(`.joi`)
          .forEach(
            (a) => a.classList.add(`luv`)
          );
        xmlRequestParsing(anyRandomMenuObject());
      }
    }
    else if (
      evt.target.classList.contains(`fa-sun`) ||
      evt.target.id == `toggle`
    ) {
      var iteration = themes.findIndex((item) => item.obFn === set);
      if (iteration == themes.length - 1) iteration = -1;
      iteration = iteration + 1;
      set = themes[iteration].obFn;
      window[set]();
      notifyOption(themes[iteration].obFn, `fa-check-circle`);
    }
    else if (
      evt.target.classList.contains(
        `show`
      )
    ) {
      onScreen = true
      sideBarDisplay(onScreen);
      _sb.style.display = `none`;
    }
    else if (
      evt.target.classList.contains(`exit`) ||
      evt.target.classList.contains(`ext`)
    )
      evt.target.closest(`.courtesy`).getAttribute(`ext`).blank();
    else if (
      evt.target.id == `check`
    )
      repository.blank();
    else if (
      evt.target.classList.contains(`fa-angle-up`) ||
      evt.target.id == `link` ||
      evt.target.id == `show`
    ) {
      quickFeeds = quickFeeds != true;
      quickFeedDisplay(quickFeeds);
    }
    else if (
      evt.target.id == `home`
    ) {
      if (location.href.split(`?`)[0]) location.href.split(`?`)[0].state();
      if (
        document.body.contains(
          _main.querySelector(`#xml`)
        )
      )
        _main.querySelector(`#xml`).remove();
      if (
        document.body.contains(
          _main.querySelector(`#group`)
        )
      )
        _main.querySelector(`#group`).remove();
      if (quickFeeds == false)
        _show.style.visibility = `visible`;
      _label.style.visibility = `visible`;
      _quick.style.visibility = `visible`;
      _visit.style.visibility = `visible`;
      _link.style.visibility = `visible`;
      _toggle.style.display = `block`;
      _first.style.display = `none`;
      _visit.style.display = `flex`;
      quickFeedDisplay(quickFeeds);
      _top.style.display = `none`;
      _sb.style.display = `block`;
      _feed.scrollLeft = 0;
      document.title = ``;
      main.setAttribute(`tabindex`, -1);
      main.focus();
    }
    else if (
      evt.target.classList.contains(
        `construct`
      )
    ) {
      let url = menu[id].uri.match(
        /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.([a-z]{2,6}){1}/g
      );
      url.toString().blank();
    }
    else if (
      evt.target.classList.contains(
        `fa-expand-alt`
      )
    ) {
      first = true;
      _sb.style.display = `none`;
      if (
        document.body.contains(
          _main.querySelector(`#xml`)
        )
      )
        _main.querySelector(`#xml`).remove();
      if (
        document.body.contains(
          _main.querySelector(`#group`)
        )
      )
        return false;
      setTimeout(function () {
        populateCategoryGroup(category);
        displayDescription(showDescription);
        topMenuBarDisplay(topBar);
        displayExpand(expand);
        unloading();
      }, 25)
    }
    else if (
      evt.target.classList.contains(
        `select`
      )
    ) {
      if (_match.style.display === `block`) {
        _match.style.display = `none`;
        _view.blur();
        return false;
      }
      xmlRequestParsing(
        evt.target.closest(`.populate`).getAttribute(`aria-item`)
      );
      _toggle.style.display = `none`;
      _visit.style.display = `none`;
    }
    else if (
      evt.target.getAttribute(`aria-item`) != `Assets` &&
      evt.target.classList.contains(`translation`)
    ) {
      first = true;
      category = evt.target.closest(`.translation`).getAttribute(`aria-item`);
      if (Reader == true) {
        randomDuplicate = [];
        xmlRequestParsing(anyRandomMenuObject());
      } else {
        let target = event;
        if (
          document.body.contains(
            _main.querySelector(`#xml`)
          )
        )
          _main.querySelector(`#xml`).remove();
        if (
          document.body.contains(
            _main.querySelector(`#group`)
          )
        )
          _main.querySelector(`#group`).remove();
        populateCategoryGroup(
          evt.target.closest(`.translation`).getAttribute(`aria-item`)
        );
        _toggle.style.display = `none`;
        _visit.style.display = `none`;
        topMenuBarDisplay(topBar);
        displayExpand(expand);
      }
    }
    else if (
      evt.target.classList.contains(`entity`) ||
      evt.target.classList.contains(`asset`) ||
      evt.target.classList.contains(`query`)
    ) {
      xmlRequestParsing(
        evt.target.closest(`.asset`).getAttribute(`aria-item`)
      );
      topMenuBarDisplay(topBar);
      _toggle.style.display = `none`;
      _visit.style.display = `none`;
    }
    else if (
      event.target.classList.contains(`checkmark__circle`) ||
      event.target.classList.contains(`checkmark__check`) ||
      event.target.classList.contains(`checkmark`) ||
      evt.target.id == `guide`
    ) {
      if (
        Array.isArray(pub)
      )
        xmlAppendPublication(id);
        _main.classList.remove(`guide`);
      if (loading == `percent`) _progress.style.width = `100%`;
      while (_guide.lastChild) _guide.removeChild(_guide.lastChild);
      if (sideBarLock == true) onScreen = true;
      _guide.style.display = `none`;
      _check.style.display = `none`;
      topMenuBarDisplay(topBar);
      sideBarDisplay(onScreen);
      guideOnScreen = true;
      _main.focus();
      pub = null;
    }
    else if (
      evt.target.classList.contains(
        `bottom`
      )
    ) {
      if (location.href.split(`?`)[0]) location.href.split(`?`)[0].state();
      evt.target.closest(`#xml`).remove();
        if (location.href.match(`\\?q=`)) {
          var uri = location.search.split(`?q=`)[1].match(/[^&]+/g);
          let description = menu.filter(function (item) {
            return item.description.space().toLowerCase()
              .match(uri.toString().toLowerCase().space());
          })
          groupBuild();
          for (i = 0; i <= description.length - 1; i++)
            writeFilterResponse(menu.indexOf(description[i]));
          displayDescription(showDescription);
          displayExpand(expand);
          populateCategoryGroup(category)
          unloading();
        } else populateCategoryGroup(category);
        displayExpand(expand);
    }
    else if (
      evt.target.classList.contains(
        `more`
      )
    ) {
      evt.target.parentNode.innerHTML = evt.target.parentNode.getAttribute(
        `text`
      );
      evt.target.style.display = `none`;
      evt.stopPropagation();
    }
    else if (
      evt.target.classList.contains(`classic`) ||
      evt.target.classList.contains(`wrap`) ||
      evt.target.classList.contains(`item`) ||
      evt.target.classList.contains(`pub`) ||
      evt.target.classList.contains(`ago`)
    ) {
      evt.target.closest(`.item`).getAttribute(`ext`).blank();
    }
    else if (
      evt.target.classList.contains(`combine`) ||
      evt.target.classList.contains(`suggest`) ||
      evt.target.classList.contains(`circle`) ||
      evt.target.classList.contains(`random`) ||
      evt.target.classList.contains(`bold`)
    ) {
      if (location.href.split(`?`)[0]) location.href.split(`?`)[0].state();
      if (
        document.body.contains(
          _main.querySelector(`#xml`)
        )
      )
        _main.querySelector(`#xml`).remove();
      first = true;
      xmlRequestParsing(
        evt.target.closest(`.suggest`).getAttribute(`aria-item`)
      );
    }
    else if (
      evt.target.classList.contains(
        `detail`
      )
    ) {
      xmlRequestParsing(evt.target.closest(`.hover`)
        .getAttribute(`aria-item`));
      _match.style.display = `none`;
    }
    else if (
      evt.target.classList.contains(
        `asset`
      )
    )
      xmlRequestParsing(evt.target.getAttribute(`aria-item`));
    else if (
      evt.target.classList.contains(`flip-front`) ||
      evt.target.classList.contains(`flip-back`) ||
      evt.target.classList.contains(`front`) ||
      evt.target.classList.contains(`next`) ||
      evt.target.classList.contains(`back`)
    ) {
      if (location.href.split(`?`)[0]) location.href.split(`?`)[0].state();
      if (
        document.body.contains(
          _main.querySelector(`#bottom`)
        )
      )
        _main.querySelector(`#bottom`).remove();
      xmlRequestParsing(
        evt.target.closest(`.btn`).getAttribute(`aria-item`)
      );
    }
    else if (
      evt.target.classList.contains(
        `option`
      )
    ) {
      if (tap == 0) {
        tap = new Date().getTime();
        setTimeout(function () {
          tap = 0;
        }, 350);
      } else {
        if (new Date().getTime() - tap < 350) {
          let i = exclude.indexOf(evt.target.innerHTML);
          exclude.splice(i, 1);
          evt.target.remove();
          if (exclude.length == 0)
            document.querySelector(`.exclude`).style.height = `70px`;
          else
            document.querySelector(`.exclude`).style.height = `${
              exclude.length * 34.25 + 65
            }px`;
          tap = 0;
        }
      }
      evt.stopPropagation();
    }
    else if (
      evt.target.classList.contains(`filterBlur`) ||
      evt.target.classList.contains(`img`)
    ) {
      let cid = evt.target.closest(`.item`).getAttribute(`aria-object`)
      if (loading == `percent`) _progress.style.width = `100%`;
      if (tap == 0) {
        tap = new Date().getTime();
        setTimeout(function () {
          if (
            new Date().getTime() - tap >= 350 &&
            new Date().getTime() - tap < 400
          )
            if (
              !evt.target
                .closest(`.item`)
                .querySelector(`.img`)
                .classList.contains(`guide`) &&
              evt.target
                .closest(`.item`)
                .querySelector(`.img`)
                .classList.contains(`default`) &&
              menu[cid].category == `Reddit`
            ) {
              count = [];
              let sticky = [];
              if (showSplash == true) _check.style.display = `block`;
              sticky.push({
                courtesy: evt.target.closest(`.item`).querySelector(`.header`)
                  .innerHTML,
                element: evt.target
                  .closest(`.item`)
                  .getAttribute(`aria-item`),
                image: menu[
                  evt.target.closest(`.item`).getAttribute(`aria-object`)
                ].image.image(),
                title: evt.target
                  .closest(`.item`)
                  .querySelector(`.pub`)
                  .getAttribute(`text`),
                share: evt.target.closest(`.item`).querySelector(`.share`)
                  .value,
                dst: evt.target
                  .closest(`.item`)
                  .querySelector(`.ago:last-child`).innerHTML,
                src: evt.target.closest(`.item`).querySelector(`.source`)
                  .value,
                externalURI: evt.target.closest(`.item`).getAttribute(`ext`),
                menuObject: evt.target
                  .closest(`.item`)
                  .getAttribute(`aria-object`),
                pubIndex: evt.target
                  .closest(`.item`)
                  .getAttribute(`aria-item`),
              });
              if (safeSearchIDs.includes(menu[id].id))
                if (showSplash == true) _check.style.display = `block`;
              guideDisplay(sticky);
            } else if (
              evt.target
                .closest(`.item`)
                .querySelector(`.img`)
                .classList.contains(`guide`)
            )
              evt.target.closest(`.item`).getAttribute(`ext`).blank();
            else if (
              !evt.target
                .closest(`.item`)
                .querySelector(`.img`)
                .classList.contains(`default`)
            )
              evt.target.closest(`.item`).getAttribute(`ext`).blank();
            else if (category != `Reddit`)
              evt.target.closest(`.item`).getAttribute(`ext`).blank();
          tap = 0;
        }, 350);
      } else {
        if (new Date().getTime() - tap < 350) {
          if (evt.target.classList.contains(`leave`)) {
            evt.target.closest(`.item`).getAttribute(`ext`).blank();
            return false;
          } else if (!evt.target.classList.contains(`blur`)) {
            evt.target
              .closest(`.image`)
              .querySelector(
                `.fa-heart`
              ).style.animation = `scale .7s ease-in-out .1s both`;
            evt.target
              .closest(`.image`)
              .querySelector(`.fa-heart`).style.display = `block`;
            evt.target
              .closest(`.image`)
              .querySelector(`.fa-heart`).style.zIndex = `12`;
            setTimeout(function () {
              evt.target
                .closest(`.image`)
                .querySelector(`.fa-heart`).style.animation = `none`;
              evt.target
                .closest(`.image`)
                .querySelector(`.fa-heart`).style.display = `none`;
              evt.target
                .closest(`.image`)
                .querySelector(`.fa-heart`).style.zIndex = `0`;
            }, 1500);
          }
          tap = 0;
        }
      }
      evt.stopPropagation();
    }
    else if (
      evt.target.classList.contains(`fa-ellipsis-h`) ||
      evt.target.classList.contains(`fa-ellipsis-v`) ||
      evt.target.classList.contains(`copy`)
    ) {
      if (evt.target.closest(`.copy`).querySelector(`.fa-ellipsis-v`)) {
        evt.target
          .closest(`.copy`)
          .querySelector(`.fa-ellipsis-v`)
          .classList.add(`fa-ellipsis-h`);
        evt.target
          .closest(`.copy`)
          .querySelector(`.fa-ellipsis-h`)
          .classList.remove(`fa-ellipsis-v`);
        evt.target
          .closest(`.copy`)
          .querySelector(`.attribute`).style.display = `none`;
      } else if (
        evt.target.closest(`.copy`).querySelector(`.fa-ellipsis-h`)
      ) {
        evt.target
          .closest(`.copy`)
          .querySelector(`.fa-ellipsis-h`)
          .classList.add(`fa-ellipsis-v`);
        evt.target
          .closest(`.copy`)
          .querySelector(`.fa-ellipsis-v`)
          .classList.remove(`fa-ellipsis-h`);
        evt.target
          .closest(`.copy`)
          .querySelector(`.attribute`).style.display = `block`;
      }
      evt.stopPropagation();
    }
    else if (
      evt.target.classList.contains(`fa-at`) ||
      evt.target.classList.contains(`site`)
    ) {
      evt.target.closest(`.item`).querySelector(`.url`).select();
      document.execCommand(`copy`);
      evt.stopPropagation();
    }
    else if (
      evt.target.classList.contains(`fa-share`) ||
      evt.target.classList.contains(`post`)
    ) {
      evt.target.closest(`.item`).querySelector(`.share`).select();
      document.execCommand(`copy`);
      evt.stopPropagation();
    }
    else if (
      evt.target.classList.contains(`fa-camera`) ||
      evt.target.classList.contains(`picture`)
    ) {
      if (youtubeMedia == true && menu[id].id.match(/Youtube/g)) {
        evt.target.closest(`.item`).querySelector(`.url`).select();
        document.execCommand(`copy`);
      } else {
        evt.target.closest(`.item`).querySelector(`.source`).select();
        document.execCommand(`copy`);
      }
    }
    else if (
      evt.target.classList.contains(`fa-plus`) ||
      evt.target.classList.contains(`right`)
    ) {
      quickFeedAsset(6);
      let leftPos = _feed.scrollLeft;
      _feed.scrollLeft = leftPos + _feed.clientWidth;
      if (_feed.scrollLeft >= 0)
        document.querySelector(`.left`).style.display = `block`;
    }
    else if (
      evt.target.classList.contains(`fa-minus`) ||
      evt.target.classList.contains(`left`)
    ) {
      let leftPos = _feed.scrollLeft;
      _feed.scrollLeft = leftPos - _feed.clientWidth;
      if (_feed.scrollLeft - _feed.clientWidth <= 0)
        document.querySelector(`.left`).style.display = `none`;
    }
    evt.preventDefault();
  },
  false
);
