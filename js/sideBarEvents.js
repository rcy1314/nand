document.addEventListener('mousemove', (evt) => {
    if (
      event.target.classList.contains(`favorite`) ||
      event.target.classList.contains(`choose`) ||
      event.target.classList.contains(`adjust`) ||
      event.target.classList.contains(`border`) ||
      event.target.classList.contains(`parse`) ||
      event.target.classList.contains(`cat`) ||
      event.target.classList.contains(`sel`)
    ) {
      let x = event.pageX;
      let p = (x / event.target.offsetWidth) * 100;
      event.target.style.borderImage =
      `linear-gradient(
        to right,
        rgba(147,147,147,.01) 0%,
        rgba(147,147,147,.75) ${parseInt(p)}%,
        rgba(147,147,147,.01) 100%
      )`;
      event.target.style.borderWidth = `.3px .3px .3px .3px`;
      event.target.style.borderImageSlice = `9`;
      event.target.style.borderStyle = `solid`;
    }
  },
  false
);
document.addEventListener('mouseout', (evt) => {
    if (
      event.target.classList.contains(`favorite`) ||
      event.target.classList.contains(`choose`) ||
      event.target.classList.contains(`adjust`) ||
      event.target.classList.contains(`border`) ||
      event.target.classList.contains(`parse`) ||
      event.target.classList.contains(`cat`) ||
      event.target.classList.contains(`sel`)
    ) {
      event.target.style.borderImage =
        `linear-gradient(
          to right,
          rgba(0,0,0,0) 0%,
          rgba(0,0,0,0) 100%
        )`;
    }
  },
  false
);
document.addEventListener('click', (evt) => {
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
        init();
        document.querySelector(`#xml`).remove();
        xmlRequestParsing(null, null, id);
      }
      sideBarStar(event.target, youtubeMedia);
    }
    if (event.target.classList.contains(`sideBarMousewheel`)) {
      sideBarMousewheel = sideBarMousewheel != true;
      sideBarStar(event.target, sideBarMousewheel);
    }
    if (event.target.classList.contains(`showDescription`)) {
      showDescription = showDescription != true;
      sideBarStar(event.target, showDescription);
      displayDescription(showDescription);
    }
    if (event.target.classList.contains(`scrollIntoView`)) {
      scrollIntoView = scrollIntoView != true;
      sideBarStar(event.target, scrollIntoView);
    }
    if (event.target.classList.contains(`showRipple`)) {
      showRipple = showRipple != true;
      sideBarStar(event.target, showRipple);
    }
    if (event.target.classList.contains(`showFireworks`)) {
      showFireworks = showFireworks != true;
      sideBarStar(event.target, showFireworks);
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
          } else if (
            Array.isArray(backgroundImage) &&
            typeof backgroundImage[0].path == "string" &&
            backgroundImage[0].element == `main`
          ) {
            _main.style.backgroundImage = `url(${content})`;
            _container.style.backgroundImage = `url()`;
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
          unloading();
        }
      };

      xhr.send();
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
      if (sideBarBackdrop == false) {
        _sidebar.style.cssText = `backdrop-filter: blur (10px);left:0`;
      } else {
        _sidebar.style.cssText = `backdrop-filter: none;left:0`;
      }
      sideBarStar(event.target, sideBarBackdrop);
    }
    if (event.target.classList.contains(`topBarBackdrop`)) {
      topBarBackdrop = topBarBackdrop != true;
      if (topBarBackdrop == false) {
        _top.style.cssText = `backdrop-filter: none`;
        topMenuBarDisplay(topBar);
      } else {
        _top.style.cssText = `backdrop-filter: blur(10px)`;
        topMenuBarDisplay(topBar);
      }
      sideBarStar(event.target, topBarBackdrop);
    }
    if (event.target.classList.contains(`mainBackground`)) {
      if (
        Array.isArray(backgroundImage) &&
        typeof backgroundImage[0].path === "string"
      )
        _main.style.backgroundImage = `url(${backgroundImage[0].path})`;
      _container.style.backgroundImage = `url()`;
    }
    if (event.target.classList.contains(`containerBackground`)) {
      if (
        Array.isArray(backgroundImage) &&
        typeof backgroundImage[0].path === "string"
      )
        _container.style.backgroundImage = `url(${backgroundImage[0].path})`;
      _main.style.backgroundImage = `url()`;
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
      id = 0;
      first = true;
      if (showFireworks == true) explode(event);
      if (showRipple == true) rippleBuild(event, event.target);
      if (_main.clientWidth <= 425) {
        onScreen = onScreen != true;
        sideBarDisplay(onScreen);
      }
      category = event.target.closest(`.cat`).getAttribute(`aria-item`);
      if (Reader == true) {
        randomDuplicate = [];
        xmlRequestParsing(null, null, anyRandomMenuObject());
      } else {
        if (document.body.contains(document.querySelector(`#xml`)))
          document.querySelector(`#xml`).remove();
        if (document.body.contains(document.querySelector(`#group`)))
          document.querySelector(`#group`).remove();
        location.pathname.state();
        _toggle.style.display = `none`;
        _visit.style.display = `none`;
        populateCategoryGroup(
          event.target.closest(`.cat`).getAttribute(`aria-item`)
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
      id = 0;
      if (document.body.contains(document.querySelector(`#xml`)))
        document.querySelector(`#xml`).remove();
      if (document.body.contains(document.querySelector(`#group`)))
        document.querySelector(`#group`).remove();
      if (quickFeeds == false) _show.style.visibility = `visible`;
      _label.style.visibility = `visible`;
      _quick.style.visibility = `visible`;
      _link.style.visibility = `visible`;
      if (quickFeeds == false) _just.style.visibility = `visible`;
      _top.style.display = `none`;
      _toggle.style.display = `block`;
      _first.style.display = `none`;
      _visit.style.visibility = `visible`;
      _visit.style.display = `flex`;
      _feed.scrollLeft = 0;
      quickFeedDisplay(quickFeeds);
      document.title = ``;
    }
    if (
      !event.target.classList.contains(`fa-heart`) &&
      event.target.classList.contains(`Reader`)
    ) {
      id = 0;
      first = true;
      randomDuplicate = [];
      _visit.style.display = `none`;
      if (showSplash == true) _check.style.display = `block`;
      Reader = Reader != true;
      if (Reader == false) {
        justRead = false;
        first = true;
        id = 0;
        xmlChannelFooter();
        document
          .querySelectorAll(`.joi`)
          .forEach((a) => (a.classList.remove(`luv`)));
      } else if (Reader == true) {
        if (document.body.contains(document.querySelector(`#xml`)))
          document.querySelector(`#xml`).remove();
        if (document.body.contains(document.querySelector(`#group`)))
          document.querySelector(`#group`).remove();
        xmlRequestParsing(null, null, anyRandomMenuObject());
        document
          .querySelectorAll(`.joi`)
          .forEach((a) => (a.classList.add(`luv`)));
      }
      sideBarStar(event.target, Reader);
    }    if (event.target.classList.contains(`parse`)) {
      expandFilter = expandFilter != true
      if (expandFilter == false)
        document.querySelector(`.exclude`).style.height = `31px`;
      else if (expandFilter == true)
        if (exclude.length == 0)
          document.querySelector(`.exclude`).style.height = `75px`;
        else
          document.querySelector(`.exclude`).style.height = `${
            exclude.length * 32 + 80
          }px`;
    }
    if (event.target.classList.contains(`favorite`)) {
      expandFavorites = expandFavorites != true
      if (expandFavorites == false)
        document.querySelector(`.fav`).style.height = `31px`;
      else if (expandFavorites == true)
        document.querySelector(`.fav`).style.height =
          `${(favorites.length + 1) * 36}px`;
    }
    if (event.target.classList.contains(`border`)) {
      expandVisual = expandVisual != true
      if (expandVisual == false)
        document.querySelector(`.themes`).style.height = `31px`;
      else if (expandVisual == true)
        document.querySelector(`.themes`).style.height =
          `${(themes.length + 1) * 36}px`;
    }
    if (event.target.classList.contains(`adjust`)) {
      expandBackground = expandBackground != true
      if (expandBackground == false)
        document.querySelector(`.bg`).style.height = `31px`;
      else if (expandBackground == true)
        document.querySelector(`.bg`).style.height =
          `${(background.length + 1) * 36 + 30}px`;
    }
    if (event.target.classList.contains(`choose`)) {
      expandSettings = expandSettings != true
      if (expandSettings == false)
        document.querySelector(`.set`).style.height = `31px`;
      else if (expandSettings == true)
        document.querySelector(`.set`).style.height =
          `${(settings.length + 1) * 35}px`;
    }
    if (event.target.classList.contains(`List`)) {
      expand = true;
      groupType = `list`;
      if (document.body.contains(document.querySelector(`#group`)))
        document.querySelector(`#group`).remove();
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
    if (
      event.target.classList.contains(`fa-camera-retro`) ||
      event.target.classList.contains(`onlyImages`)
    ) {
      onlyImages = onlyImages != true;
      sideBarStar(document.querySelector(`.onlyImages`), onlyImages);
      _visit.style.display = `none`;
      if (document.body.contains(document.querySelector(`#xml`)))
        document.querySelector(`#xml`).remove();
      if (document.body.contains(document.querySelector(`#group`)))
        document.querySelector(`#group`).remove();
      if (Reader == false) populateCategoryGroup(category);
      topMenuBarDisplay(topBar);
      displayExpand(expand);
      unloading();
    }
    if (event.target.classList.contains(`Percent`)) {
      loading = `percent`;
      sideBarStar(event.target, Percent);
      sideBarStar(document.querySelector(`.Dots`), false);
    }
    if (event.target.classList.contains(`Info`)) {
      let uri = repository;
      uri.blank();
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
    if (event.target.classList.contains(`topBar`)) {
      topBar = topBar != true;
      sideBarStar(event.target, topBar);
      topMenuBarDisplay(topBar);
    }
    if (event.target.classList.contains(`showOption`)) {
      showOption = showOption != true;
      sideBarStar(event.target, showOption);
      if (showOption == false)
        document.querySelector(`#top #arm #option`).style.display = `none`;
      else if (showOption == true)
        document.querySelector(`#top #arm #option`).style.display = `block`;
    }
    if (event.target.classList.contains(`Random`)) {
      let code = [];
      if (document.body.contains(document.querySelector(`#xml`)))
        document.querySelector(`#xml`).remove();
      if (document.body.contains(document.querySelector(`#group`)))
        document.querySelector(`#group`).remove();
      showOption = showOption != true;
      if (showOption == false)
        document.querySelector(`#top #arm #option`).style.display = `none`;
      else if (showOption == true)
      document.querySelector(`#top #arm #option`).style.display = `block`;
      for (i = 1; i <= menu.length - 1; i++) {
        if (onlyImages == true && menu[i].media == true)
          code.push(menu.indexOf(menu[i]));
        else if (onlyImages == false)
          code.push(menu.indexOf(menu[i]));
      }
      let randomMenuObject = code[Math.floor(Math.random() * code.length - 1)];
      xmlRequestParsing(null, null, randomMenuObject);
    }
    if (event.target.classList.contains(`RandomCategory`)) {
      let code = [];
      _visit.style.display = `none`;
      if (document.body.contains(document.querySelector(`#xml`)))
        document.querySelector(`#xml`).remove();
      if (document.body.contains(document.querySelector(`#group`)))
        document.querySelector(`#group`).remove();
      for (i = 1; i <= menu.length - 1; i++) {
        if (onlyImages == true) {
          if (menu[i].category == category && menu[i].media == true)
            code.push(menu.indexOf(menu[i]));
        } else if (onlyImages == false) {
          if (menu[i].category == category) code.push(menu.indexOf(menu[i]));
        }
      }
      let randomMenuObject = code[Math.floor(Math.random() * code.length - 1)];
      xmlRequestParsing(null, null, randomMenuObject);
    }
    if (event.target.classList.contains(`RandomImages`)) {
      let code = [];
      _visit.style.display = `none`;
      if (document.body.contains(document.querySelector(`#xml`)))
        document.querySelector(`#xml`).remove();
      if (document.body.contains(document.querySelector(`#group`)))
        document.querySelector(`#group`).remove();
      for (i = 1; i <= menu.length - 1; i++) {
        if (menu[i].media == true) code.push(menu.indexOf(menu[i]));
      }
      var randomMenuObject = code[Math.floor(Math.random() * code.length - 1)];
      xmlRequestParsing(null, null, randomMenuObject);
    }
    event.preventDefault();
  },
  false
);
