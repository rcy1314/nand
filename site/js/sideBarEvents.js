document.addEventListener('click', (evt) => {
    if (event.target.classList.contains(`hide`)) {
      _sb.style.display = `block`;
      onScreen = false;
      sideBarDisplay(onScreen);
      _bar.style.display = `block`;
    }
    if (event.target.classList.contains(`feed`)) {
      if (document.body.contains(document.querySelector(`#xml`)))
        document.querySelector(`#xml`).remove();
      if (document.body.contains(document.querySelector(`#group`)))
        document.querySelector(`#group`).remove();
      filterInputResponse(event.target.innerHTML)
      _toggle.style.display = `none`;
    }
    if (event.target.classList.contains(`youtubeMedia`)) {
      youtubeMedia = youtubeMedia != true;
      if (document.body.contains(document.querySelector(`#xml`))) {
        if (menu[id].id.match(/Youtube/g)) {
          init();
          document.querySelector(`#xml`).remove();
          xmlRequestParsing(id);
        }
      }
      sideBarStar(event.target, youtubeMedia);
    }
    if (event.target.classList.contains(`sideBarMousewheel`)) {
      sideBarMousewheel = sideBarMousewheel != true;
      sideBarStar(event.target, sideBarMousewheel);
    }
    if (event.target.classList.contains(`scrollIntoView`)) {
      scrollIntoView = scrollIntoView != true;
      sideBarStar(event.target, scrollIntoView);
    }
    if (event.target.classList.contains(`excludeInput`)) {
      event.target.value = ``;
    }
    if (event.target.classList.contains(`urlInput`)) {
      event.target.select();
    }
    if (event.target.classList.contains(`resetBackground`)) {
      if (backgroundImage[0].element == `container`) {
        _container.style.backgroundImage = `url(${backgroundImage[0].path})`;
        _main.style.backgroundImage = `url()`;
      } else if (backgroundImage[0].element == `main`) {
        _main.style.backgroundImage = `url(${backgroundImage[0].path})`;
        _container.style.backgroundImage = `url()`;
      }
    }
    if (event.target.classList.contains(`setBackground`)) {
      let input = document.createElement(`input`);
      input.type = `file`;
      input.setAttribute("accept", "image/*");

      input.onchange = (e) => {
        // getting a hold of the file reference
        var file = e.target.files[0];

        // setting up the reader
        var reader = new FileReader();
        reader.readAsDataURL(file); // this is reading as data url

        // here we tell the reader what to do when it`s done reading...
        reader.onload = (readerEvent) => {
          var content = readerEvent.target.result; // this is the content!
          if (
            Array.isArray(backgroundImage) &&
            typeof backgroundImage[0].path == "string" &&
            backgroundImage[0].element == `container`
          ) {
            _container.style.backgroundImage = `url(${content})`;
            _main.style.backgroundImage = `url()`;
            backgroundImage[0].path = content
          } else if (
            Array.isArray(backgroundImage) &&
            typeof backgroundImage[0].path == "string" &&
            backgroundImage[0].element == `main`
          ) {
            _main.style.backgroundImage = `url(${content})`;
            _container.style.backgroundImage = `url()`;
            backgroundImage[0].path = content
          }
        };
      };
      input.click();
    }
    if (
      event.target.classList.contains(`saveBackground`) &&
      document
        .querySelector(`.urlInput`)
        .value.match(/\b(https?:\/\/\S*?\.(?:png|jpe?g|gif|webp))/g)
    ) {
      if (showSplash == true) _check.style.display = `block`;
      var xhr = new XMLHttpRequest();
      var url = document.querySelector(`.urlInput`).value;

      xhr.responseType = "arraybuffer";
      xhr.open("GET", cors + url, true);

      xhr.onreadystatechange = function () {
        if (xhr.readyState == xhr.DONE) {
          var file = new Blob([xhr.response], { type: "image" });
          saveAs(
            file,
            document
              .querySelector(`.urlInput`)
              .value.match(/\b(\/.+\.(?:png|jpe?g|gif|webp))/g)
          );
          _check.style.display = `none`;
        }
      };

      xhr.send();
    }
    if (event.target.classList.contains(`cropImages`)) {
      cropImages = cropImages != true;
      if (cropImages == true) {
        _main
          .querySelectorAll(`.img`)
          .forEach((a) => a.closest(`.image`).style.height = `270px`);
      } else if (cropImages == false) {
        _main
          .querySelectorAll(`.image`)
          .forEach((a) => a.style.height = `auto`);
      }
      if (flexBox == true) displayFlex(flexBox);
      sideBarStar(event.target, cropImages);
    }
    if (event.target.classList.contains(`sideBarCenter`)) {
      sideBarCenter = sideBarCenter != true;
      if (sideBarCenter == false) {
        _content.style.position = `relative`;
      } else if (sideBarCenter == true) {
        _content.style.position = `absolute`;
      }
      sideBarStar(event.target, sideBarCenter);
    }
    if (event.target.classList.contains(`sideBarBackdrop`)) {
      sideBarBackdrop = sideBarBackdrop != true;
      if (sideBarBackdrop == true) {
        _sidebar.classList.add(`blur`);
        _sidebar.style.backgroundColor = `transparent`;
      } else if (sideBarBackdrop == false) {
        _sidebar.classList.remove(`blur`);
        _sidebar.style.backgroundColor = `var(--color-secondary)`;
      }
      sideBarStar(event.target, sideBarBackdrop);
    }
    if (event.target.classList.contains(`containerBackground`)) {
      if (
        _container.style.backgroundImage != ``
      ) {
        _main.style.backgroundImage = `url(${backgroundImage[0].path})`
        _container.style.backgroundImage = ``;
      } else if (
        _main.style.backgroundImage != ``
      ) {
        _container.style.backgroundImage = `url(${backgroundImage[0].path})`
        _main.style.backgroundImage = ``;
      }
    }
    if (event.target.classList.contains(`coverBackground`)) {
      if (
        _container.style.backgroundSize == `cover` ||
        _main.style.backgroundSize == `cover` ||
        _container.style.backgroundSize == `auto 100%` ||
        _main.style.backgroundSize == `auto 100%`
      ) {
        _container.style.backgroundSize = `initial`;
        _main.style.backgroundSize = `initial`;
      } else {
        _container.style.backgroundSize = `cover`;
        _main.style.backgroundSize = `cover`;
      }
    }
    if (event.target.classList.contains(`fitBackground`)) {
      if (
        _container.style.backgroundSize == `cover` ||
        _main.style.backgroundSize == `cover`
      ) {
        _container.style.backgroundSize = `contain`;
        _main.style.backgroundSize = `contain`;
      } else if (
        _container.style.backgroundSize == `contain` ||
        _main.style.backgroundSize == `contain`
      ) {
        _container.style.backgroundSize = `cover`;
        _main.style.backgroundSize = `cover`;
      }
    }
    if (event.target.classList.contains(`removeBackground`)) {
      _container.style.backgroundImage = `none`;
      _main.style.backgroundImage = `none`;
    }
    if (event.target.classList.contains(`cat`)) {
      first = true;
      if (location.href.split(`?`)[0]) location.href.split(`?`)[0].state();
        onScreen = onScreen != true;
        sideBarDisplay(onScreen);
      category = event.target.getAttribute(`aria-item`);
      if (Reader == true) {
        xmlRequestParsing(anyRandomMenuObject());
      } else {
        if (document.body.contains(document.querySelector(`#xml`)))
          document.querySelector(`#xml`).remove();
        if (document.body.contains(document.querySelector(`#group`)))
          document.querySelector(`#group`).remove();
        location.pathname.state();
        _toggle.style.display = `none`;
        _visit.style.display = `none`;
        populateCategoryGroup(
          event.target.getAttribute(`aria-item`)
        );
        topMenuBarDisplay(topBar);
        displayExpand(expand);
      }
      document.title = category
    }
    if (
      (event.target.id == `mobileHome` && event.target.id != `Home`) ||
      event.target.classList.contains(`sideHome`) ||
      event.target.classList.contains(`side`)
    ) {
      _sb.style.display = `block`;
      if (location.href.split(`?`)[0]) location.href.split(`?`)[0].state();
      if (document.body.contains(document.querySelector(`#xml`)))
        document.querySelector(`#xml`).remove();
      if (document.body.contains(document.querySelector(`#group`)))
        document.querySelector(`#group`).remove();
      if (quickFeeds == false) _show.style.visibility = `visible`;
      _label.style.visibility = `visible`;
      _quick.style.visibility = `visible`;
      _link.style.visibility = `visible`;
      _visit.style.visibility = `visible`;
      _toggle.style.display = `block`;
      _first.style.display = `none`;
      _visit.style.display = `flex`;
      quickFeedDisplay(quickFeeds);
      _top.style.display = `none`;
      _feed.scrollLeft = 0;
      document.title = ``;
      main.setAttribute(`tabindex`, -1);
      main.focus();
    }
    if (
      event.target.classList.contains(`fa-lock`) ||
      event.target.classList.contains(`fa-unlock`)
    ) {
      sideBarLock = sideBarLock != true
      if (sideBarLock == true) {
        event.target.classList.remove(`fa-unlock`);
        event.target.classList.add(`fa-lock`);
      } else if (sideBarLock == false) {
        event.target.classList.remove(`fa-lock`);
        event.target.classList.add(`fa-unlock`);
      }
    }
    if (event.target.classList.contains(`parse`)) {
      expandFilter = expandFilter != true
      if (expandFilter == false) {
        document.querySelector(`.exclude`).style.borderBottom = `none`;
        document.querySelector(`.exclude`).style.borderTop = `none`;
        document.querySelector(`.exclude`).style.height = `31px`;
      } else if (expandFilter == true) {
        if (exclude.length == 0)
          document.querySelector(`.exclude`).style.height = `75px`;
        else {
          document.querySelector(`.exclude`).style.borderBottom = `var(--border-color)`;
          document.querySelector(`.exclude`).style.borderTop = `var(--border-color)`;
          document.querySelector(`.exclude`).style.height = `${
            exclude.length * 34 + 80}px`;
        }
      }
    }
    if (event.target.classList.contains(`favorite`)) {
      if (location.href.split(`?`)[0]) location.href.split(`?`)[0].state();
      expandFavorites = expandFavorites != true
      if (expandFavorites == false) {
        document.querySelector(`.fav`).style.borderBottom = `none`;
        document.querySelector(`.fav`).style.borderTop = `none`;
        document.querySelector(`.fav`).style.height = `31px`;
      } else if (expandFavorites == true) {
        document.querySelector(`.fav`).style.borderBottom = `var(--border-color)`;
        document.querySelector(`.fav`).style.borderTop = `var(--border-color)`;
        document.querySelector(`.fav`).style.height =
          `${(favorites.length + 1) * 36}px`;
      }
    }
    if (event.target.classList.contains(`border`)) {
      expandVisual = expandVisual != true
      if (expandVisual == false) {
        document.querySelector(`.themes`).style.borderBottom = `none`;
        document.querySelector(`.themes`).style.borderTop = `none`;
        document.querySelector(`.themes`).style.height = `31px`;
      } else if (expandVisual == true) {
        document.querySelector(`.themes`).style.borderBottom = `var(--border-color)`;
        document.querySelector(`.themes`).style.borderTop = `var(--border-color)`;
        document.querySelector(`.themes`).style.height =
          `${(themes.length + 1) * 36}px`;
      }
    }
    if (event.target.classList.contains(`adjust`)) {
      expandBackground = expandBackground != true
      if (expandBackground == false) {
        document.querySelector(`.bg`).style.borderBottom = `none`;
        document.querySelector(`.bg`).style.borderTop = `none`;
        document.querySelector(`.bg`).style.height = `31px`;
      } else if (expandBackground == true) {
        document.querySelector(`.bg`).style.borderBottom = `var(--border-color)`;
        document.querySelector(`.bg`).style.borderTop = `var(--border-color)`;
        document.querySelector(`.bg`).style.height =
          `${(background.length + 1) * 34 + 48}px`;
      }
    }
    if (event.target.classList.contains(`choose`)) {
      expandSettings = expandSettings != true
      if (expandSettings == false) {
        document.querySelector(`.set`).style.borderBottom = `none`;
        document.querySelector(`.set`).style.borderTop = `none`;
        document.querySelector(`.set`).style.height = `31px`;
      } else if (expandSettings == true) {
        document.querySelector(`.set`).style.borderBottom = `var(--border-color)`;
        document.querySelector(`.set`).style.borderTop = `var(--border-color)`;
        document.querySelector(`.set`).style.height =
          `${(settings.length + 1) * 35}px`;
      }
    }
    if (event.target.classList.contains(`List`)) {
      expand = true;
      groupType = `list`;
      if (document.body.contains(document.querySelector(`#group`)))
        document.querySelector(`#group`).remove();
      if (document.body.contains(document.querySelector(`#xml`)))
        document.querySelector(`#xml`).remove();
      populateCategoryGroup(category);
      sideBarStar(document.querySelector(`.Blocks`), false);
      sideBarStar(event.target, List);
      topMenuBarDisplay(topBar);
    }
    if (event.target.classList.contains(`Blocks`)) {
      expand = false;
      groupType = `blocks`;
      if (document.body.contains(document.querySelector(`#group`)))
        document.querySelector(`#group`).remove();
      if (document.body.contains(document.querySelector(`#xml`)))
        document.querySelector(`#xml`).remove();
      sideBarStar(document.querySelector(`.List`), false);
      sideBarStar(event.target, true);
      populateCategoryGroup(category);
      topMenuBarDisplay(topBar);
    }
    if (event.target.classList.contains(`Dots`)) {
      loading = `dots`;
      sideBarStar(event.target, true);
      sideBarStar(document.querySelector(`.Percent`), false);
    }
    if (event.target.classList.contains(`loaderfalse`)) {
      imageLoader = false;
      _main
        .querySelectorAll(`.bars`)
        .forEach((a) => a.style.display = `none`);
      _main
        .querySelectorAll(`.animation`)
        .forEach((a) => a.style.display = `none`);
      _main
        .querySelectorAll(`.loader`)
        .forEach((a) => a.style.display = `none`);
      sideBarStar(event.target, true);
      sideBarStar(document.querySelector(`.verticalbars`), false);
      sideBarStar(document.querySelector(`.circleloader`), false);
      sideBarStar(document.querySelector(`.ringloader`), false);
    }
    if (event.target.classList.contains(`verticalbars`)) {
      imageLoader = `v-bars`;
      _main
        .querySelectorAll(`.bars`)
        .forEach((a) => a.style.display = `block`);
      _main
        .querySelectorAll(`.animation`)
        .forEach((a) => a.style.display = `none`);
      _main
        .querySelectorAll(`.loader`)
        .forEach((a) => a.style.display = `none`);
      sideBarStar(event.target, true);
      sideBarStar(document.querySelector(`.circleloader`), false);
      sideBarStar(document.querySelector(`.ringloader`), false);
      sideBarStar(document.querySelector(`.loaderfalse`), false);
    }
    if (event.target.classList.contains(`circleloader`)) {
      imageLoader = `double-circle`;
      _main
        .querySelectorAll(`.loader`)
        .forEach((a) => a.style.display = `block`);
      _main
        .querySelectorAll(`.bars`)
        .forEach((a) => a.style.display = `none`);
      _main
        .querySelectorAll(`.animation`)
        .forEach((a) => a.style.display = `none`);
      sideBarStar(event.target, true);
      sideBarStar(document.querySelector(`.verticalbars`), false);
      sideBarStar(document.querySelector(`.ringloader`), false);
      sideBarStar(document.querySelector(`.loaderfalse`), false);
    }
    if (event.target.classList.contains(`ringloader`)) {
      imageLoader = `ring-circle`;
      _main
        .querySelectorAll(`.animation`)
        .forEach((a) => a.style.display = `block`);
      _main
        .querySelectorAll(`.bars`)
        .forEach((a) => a.style.display = `none`);
      _main
        .querySelectorAll(`.loader`)
        .forEach((a) => a.style.display = `none`);
      sideBarStar(event.target, true);
      sideBarStar(document.querySelector(`.verticalbars`), false);
      sideBarStar(document.querySelector(`.circleloader`), false);
      sideBarStar(document.querySelector(`.loaderfalse`), false);
    }
    if (
      event.target.classList.contains(`onlyImages`)
    ) {
      onlyImages = onlyImages != true;
      if (onlyImages == true) notifyOption(`Images`, `fa-check-circle`);
      if (onlyImages == false) notifyOption(`Images`, `fa-times-circle`);
      sideBarStar(document.querySelector(`.onlyImages`), onlyImages);
      touchmove = true;
      if (Reader == true)
        if (document.body.contains(document.querySelector(`#xml`)))
          xmlRequestParsing(anyRandomMenuObject());
      if (Reader == false) {
        _visit.style.display = `none`;
        if (document.body.contains(document.querySelector(`#xml`)))
          document.querySelector(`#xml`).remove();
        if (document.body.contains(document.querySelector(`#group`)))
          document.querySelector(`#group`).remove();
        populateCategoryGroup(category);
        topMenuBarDisplay(topBar);
        displayExpand(expand);
        unloading();
      }
    }
    if (
      event.target.classList.contains(`feedImages`)
    ) {
      feedImages = feedImages != true;
      sideBarStar(document.querySelector(`.feedImages`), feedImages);
      if (feedImages == true && id) {
        init();
        if (document.body.contains(document.querySelector(`#xml`)))
          document.querySelector(`#xml`).remove();
        xmlRequestParsing(id);
      } else if (feedImages == false) {
        document
          .querySelectorAll(`.image`)
          .forEach((a) => a.remove());
      }
    }
    if (event.target.classList.contains(`Percent`)) {
      loading = `percent`;
      sideBarStar(event.target, document.querySelector(`.Percent`));
      sideBarStar(document.querySelector(`.Dots`), false);
    }
    if (
      event.target.classList.contains(`safeSearch`)
  ) {
      safeSearch = safeSearch != true;
      if (
        safeSearch == true
      ) {
        sideBarStar(document.querySelector(`.safeSearch`), true);
        notifyOption(`Safe Search`, `fa-check-circle`);
      if (document.body.contains(document.querySelector(`#xml`)))
        document
          .querySelectorAll(`.filterBlur`)
          .forEach((a) => a.classList.add(`blur`));
      } else if (
        safeSearch == false
      ) {
        sideBarStar(document.querySelector(`.safeSearch`), false);
        notifyOption(`Safe Search`, `fa-times-circle`);
      if (document.body.contains(document.querySelector(`#xml`)))
        document
          .querySelectorAll(`.filterBlur`)
          .forEach((a) => a.classList.remove(`blur`));
      }
    }
    if (event.target.classList.contains(`fadeIntoView`)) {
      fadeIntoView = fadeIntoView != true;
      sideBarStar(event.target, fadeIntoView);
      if (fadeIntoView == false) {
        document
          .querySelectorAll(`.img`)
          .forEach((a) => a.classList.remove(`hidden`));
      } else if (fadeIntoView == true) {
        if (document.body.contains(document.querySelector(`#xml`))) {
          document
            .querySelectorAll(`.img`)
            .forEach((a) => a.classList.remove(`fade-in-element`));
          document
            .querySelectorAll(`.img`)
            .forEach((a) => a.classList.add(`hidden`));
          (function () {
            function startPosition() {
              let elements = document.querySelectorAll(".img");
              for (var i = 0; i < elements.length - 1; i++) {
                if (
                  elements[i].getBoundingClientRect().top - _main.clientHeight <= 0
                ) {
                  if (fadeIntoView == true) {
                    elements[i].classList.add("fade-in-element");
                    elements[i].classList.remove("hidden");
                  }
                  if (fadeIntoView == false) {
                    document
                      .querySelectorAll(`.img`)
                      .forEach((a) => a.classList.remove(`hidden`));
                    _main.removeEventListener("scroll", startPosition);
                  }
                }
              }
            }
            _main.addEventListener("scroll", startPosition);
            startPosition();
          })();
        }
      }
    }
    event.preventDefault();
  },
  false
);
