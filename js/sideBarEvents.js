document.addEventListener(
  `mousemove`,
  function (event) {
    if (
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
      `linear-gradient(to right,rgba(147,147,147,.01) 0%,rgba(147,147,147,.75)
        ${parseInt(p)}%, rgba(147,147,147,.01) 100%)`;
      event.target.style.borderWidth = `.3px .3px .3px .3px`;
      event.target.style.borderImageSlice = `9`;
      event.target.style.borderStyle = `solid`;
    }
  },
  false
); //:before pseudo-elements not loaded in DOM
document.addEventListener(
  `mouseout`,
  function (event) {
    if (
      event.target.classList.contains(`choose`) ||
      event.target.classList.contains(`adjust`) ||
      event.target.classList.contains(`border`) ||
      event.target.classList.contains(`parse`) ||
      event.target.classList.contains(`cat`) ||
      event.target.classList.contains(`sel`)
    ) {
      event.target.style.borderImage =
        `linear-gradient(to right,  rgba(0,0,0,0) 0%,rgba(0,0,0,0) 100%)`;
    }
  },
  false
); //:before pseudo-elements not loaded in DOM
document.addEventListener(
  `click`,
  function (event) {
    if (event.target.classList.contains(`youtubeMedia`)) {
      youtubeMedia = youtubeMedia != true;
      if (document.body.contains(document.querySelector(`#xml`))) {
        init();
        document.querySelector(`#xml`).remove();
        xmlRequestParsing(null, null, id);
      }
      if (youtubeMedia == true) {
        event.target.nextElementSibling.classList.remove(`fa-minus`);
        event.target.nextElementSibling.classList.add(`fa-star`);
      } else if (youtubeMedia == false) {
        event.target.nextElementSibling.classList.remove(`fa-star`);
        event.target.nextElementSibling.classList.add(`fa-minus`);
      }
    }
    if (event.target.classList.contains(`showDescription`)) {
      showDescription = showDescription != true;
      displayDescription(showDescription);
      if (showDescription == true) {
        event.target.nextElementSibling.classList.remove(`fa-minus`);
        event.target.nextElementSibling.classList.add(`fa-star`);
      } else if (showDescription == false) {
        event.target.nextElementSibling.classList.remove(`fa-star`);
        event.target.nextElementSibling.classList.add(`fa-minus`);
      }
    }
    if (event.target.classList.contains(`scrollIntoView`)) {
      scrollIntoView = scrollIntoView != true;
      if (scrollIntoView == true) {
        event.target.nextElementSibling.classList.remove(`fa-minus`);
        event.target.nextElementSibling.classList.add(`fa-star`);
      } else if (scrollIntoView == false) {
        event.target.nextElementSibling.classList.remove(`fa-star`);
        event.target.nextElementSibling.classList.add(`fa-minus`);
      }
    }
    if (event.target.classList.contains(`showRipple`)) {
      showRipple = showRipple != true;
      if (showRipple == true) {
        event.target.nextElementSibling.classList.remove(`fa-minus`);
        event.target.nextElementSibling.classList.add(`fa-star`);
      } else if (showRipple == false) {
        event.target.nextElementSibling.classList.remove(`fa-star`);
        event.target.nextElementSibling.classList.add(`fa-minus`);
      }
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
        event.target.nextElementSibling.classList.remove(`fa-star`);
        event.target.nextElementSibling.classList.add(`fa-minus`);
        _content.style.position = `relative`;
      } else if (sideBarCenter == true) {
        event.target.nextElementSibling.classList.remove(`fa-minus`);
        event.target.nextElementSibling.classList.add(`fa-star`);
        _content.style.position = `absolute`;
      }
    }
    if (event.target.classList.contains(`sideBarBackdrop`)) {
      sideBarBackdrop = sideBarBackdrop != true;
      if (sideBarBackdrop == false) {
        event.target.nextElementSibling.classList.remove(`fa-minus`);
        event.target.nextElementSibling.classList.add(`fa-star`);
        _sidebar.style.cssText = `backdrop-filter: blur (10px);left:0`;
      } else {
        event.target.nextElementSibling.classList.remove(`fa-star`);
        event.target.nextElementSibling.classList.add(`fa-minus`);
        _sidebar.style.cssText = `backdrop-filter: none;left:0`;
      }
    }
    if (event.target.classList.contains(`topBarBackdrop`)) {
      topBarBackdrop = topBarBackdrop != true;
      if (topBarBackdrop == false) {
        event.target.nextElementSibling.classList.remove(`fa-star`);
        event.target.nextElementSibling.classList.add(`fa-minus`);
        _top.style.cssText = `backdrop-filter: none`;
        topMenuBarDisplay(topBar);
      } else {
        event.target.nextElementSibling.classList.remove(`fa-minus`);
        event.target.nextElementSibling.classList.add(`fa-star`);
        _top.style.cssText = `backdrop-filter: blur(10px)`;
        topMenuBarDisplay(topBar);
      }
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
    if (event.target.id == `hide`) {
      onScreen = onScreen != true;
      sideBarDisplay(onScreen);
    }
    if (event.target.classList.contains(`cat`)) {
      id = 0;
      first = true;
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
      _top.style.display = `none`;
      _toggle.style.display = `block`;
      _first.style.display = `none`;
      _visit.style.visibility = `visible`;
      _visit.style.display = `flex`;
      _feed.scrollLeft = 0;
      quickFeedDisplay(quickFeeds);
      document.title = ``;
      unloading();
    }
    if (event.target.classList.contains(`Reader`)) {
      id = 0;
      first = true;
      randomDuplicate = [];
      _visit.style.display = `none`;
      Reader = Reader != true;
      if (Reader == false) {
        justRead = false;
        event.target.nextElementSibling.classList.remove(`fa-star`);
        event.target.nextElementSibling.classList.add(`fa-minus`);
        first = true;
        id = 0;
        xmlChannelFooter();
      } else if (Reader == true) {
        event.target.nextElementSibling.classList.remove(`fa-minus`);
        event.target.nextElementSibling.classList.add(`fa-star`);
        if (document.body.contains(document.querySelector(`#xml`)))
          document.querySelector(`#xml`).remove();
        if (document.body.contains(document.querySelector(`#group`)))
          document.querySelector(`#group`).remove();
        xmlRequestParsing(null, null, anyRandomMenuObject());
      }
    }
    if (event.target.classList.contains(`parse`)) {
      if (document.querySelector(`.exclude`).clientHeight != `36`) {
        document.querySelector(`.exclude`).style.height = `31px`;
      } else {
        if (exclude.length == 0)
          document.querySelector(`.exclude`).style.height = `75px`;
        else
          document.querySelector(`.exclude`).style.height = `${
            exclude.length * 32 + 80
          }px`;
      }
    }
    if (event.target.classList.contains(`border`)) {
      if (document.querySelector(`.themes`).clientHeight != `36`) {
        document.querySelector(`.themes`).style.height = `31px`;
        return false;
      }
      let count = themes.length + 1;
      document.querySelector(`.themes`).style.height = `${count * 36}px`;
    }
    if (event.target.classList.contains(`adjust`)) {
      if (document.querySelector(`.bg`).clientHeight != `36`) {
        document.querySelector(`.bg`).style.height = `31px`;
        return false;
      }
      let count = background.length + 1;
      document.querySelector(`.bg`).style.height = `${count * 36 + 30}px`;
    }
    if (event.target.classList.contains(`choose`)) {
      if (document.querySelector(`.set`).clientHeight != `36`) {
        document.querySelector(`.set`).style.height = `31px`;
        return false;
      }
      let count = settings.length + 1;
      document.querySelector(`.set`).style.height = `${count * 35}px`;
    }
    if (event.target.classList.contains(`List`)) {
      expand = true;
      groupType = `list`;
      if (document.body.contains(document.querySelector(`#group`)))
        document.querySelector(`#group`).remove();
      populateCategoryGroup(category);
      event.target.nextElementSibling.classList.remove(`fa-minus`);
      event.target.nextElementSibling.classList.add(`fa-star`);
      document
        .querySelector(`.Blocks`)
        .nextElementSibling.classList.remove(`fa-star`);
      document
        .querySelector(`.Blocks`)
        .nextElementSibling.classList.add(`fa-minus`);
      topMenuBarDisplay(topBar);
    }
    if (event.target.classList.contains(`Blocks`)) {
      expand = false;
      groupType = `blocks`;
      if (document.body.contains(document.querySelector(`#group`)))
        document.querySelector(`#group`).remove();
      populateCategoryGroup(category);
      event.target.nextElementSibling.classList.remove(`fa-minus`);
      event.target.nextElementSibling.classList.add(`fa-star`);
      document
        .querySelector(`.List`)
        .nextElementSibling.classList.remove(`fa-star`);
      document
        .querySelector(`.List`)
        .nextElementSibling.classList.add(`fa-minus`);
      topMenuBarDisplay(topBar);
    }
    if (event.target.classList.contains(`Dots`)) {
      loading = `dots`;
      event.target.nextElementSibling.classList.remove(`fa-minus`);
      event.target.nextElementSibling.classList.add(`fa-star`);
      document
        .querySelector(`.Percent`)
        .nextElementSibling.classList.remove(`fa-star`);
      document
        .querySelector(`.Percent`)
        .nextElementSibling.classList.add(`fa-minus`);
    }
    if (
      event.target.classList.contains(`fa-camera-retro`) ||
      event.target.classList.contains(`onlyImages`)
    ) {
      onlyImages = onlyImages != true;
      if (onlyImages == true) {
        document
          .querySelector(".onlyImages")
          .nextElementSibling.classList.remove(`fa-minus`);
        document
          .querySelector(".onlyImages")
          .nextElementSibling.classList.add(`fa-star`);
      } else if (onlyImages == false) {
        document
          .querySelector(".onlyImages")
          .nextElementSibling.classList.remove(`fa-star`);
        document
          .querySelector(".onlyImages")
          .nextElementSibling.classList.add(`fa-minus`);
      }
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
      event.target.nextElementSibling.classList.remove(`fa-minus`);
      event.target.nextElementSibling.classList.add(`fa-star`);
      document
        .querySelector(`.Dots`)
        .nextElementSibling.classList.remove(`fa-star`);
      document
        .querySelector(`.Dots`)
        .nextElementSibling.classList.add(`fa-minus`);
    }
    if (event.target.classList.contains(`Info`)) {
      let uri = repository;
      uri.blank();
    }
    if (event.target.classList.contains(`fadeIntoView`)) {
      fadeIntoView = fadeIntoView != true;
      if (fadeIntoView == true) {
        event.target.nextElementSibling.classList.remove(`fa-minus`);
        event.target.nextElementSibling.classList.add(`fa-star`);
      } else if (fadeIntoView == false) {
        event.target.nextElementSibling.classList.remove(`fa-star`);
        event.target.nextElementSibling.classList.add(`fa-minus`);
      }
      if (fadeIntoView == false) {
        document
          .querySelectorAll(`.img`)
          .forEach((a) => a.classList.add(`hidden`));
      } else if (fadeIntoView == true) {
        if (document.body.contains(document.querySelector(`#xml`))) {
          document
            .querySelectorAll(`.img`)
            .forEach((a) => a.classList.remove(`fade-in-element`));
          document
            .querySelectorAll(`.img`)
            .forEach((a) => a.classList.add(`hidden`));
          (function () {
            var elements;
            var windowHeight;

            function init() {
              elements = document.querySelectorAll(".hidden");
              windowHeight = _main.clientHeight;
            }

            function startPosition() {
              for (var i = 0; i < elements.length; i++) {
                var element = elements[i];
                var positionFromTop = elements[i].getBoundingClientRect().top;

                if (positionFromTop - windowHeight <= 0) {
                  if (fadeIntoView == true)
                    element.classList.add("fade-in-element");
                  if (fadeIntoView == false) {
                    document
                      .querySelectorAll(`.img`)
                      .forEach((a) => a.classList.remove(`hidden`));
                    _main.removeEventListener("scroll", startPosition);
                    _main.removeEventListener("resize", init);
                    element.classList.remove("hidden");
                  }
                }
              }
            }

            _main.addEventListener("scroll", startPosition);
            _main.addEventListener("resize", init);

            init();
            startPosition();
          })();
        }
      }
    }
    if (event.target.classList.contains(`topBar`)) {
      topBar = topBar != true;
      if (topBar == true) {
        event.target.nextElementSibling.classList.remove(`fa-minus`);
        event.target.nextElementSibling.classList.add(`fa-star`);
      } else if (topBar == false) {
        event.target.nextElementSibling.classList.remove(`fa-star`);
        event.target.nextElementSibling.classList.add(`fa-minus`);
      }
      topMenuBarDisplay(topBar);
    }
    if (event.target.classList.contains(`showOption`)) {
      showOption = showOption != true;
      if (showOption == true) {
        event.target.nextElementSibling.classList.remove(`fa-minus`);
        event.target.nextElementSibling.classList.add(`fa-star`);
      } else if (showOption == false) {
        event.target.nextElementSibling.classList.remove(`fa-star`);
        event.target.nextElementSibling.classList.add(`fa-minus`);
      }
      if (showOption == false)
        document.querySelector(`#top #arm #option`).style.display = `none`;
      else if (showOption == true)
        document.querySelector(`#top #arm #option`).style.display = `block`;
    }
    if (event.target.classList.contains(`Random`)) {
      showOption = showOption != true;
      if (showOption == false)
        document.querySelector(`#top #arm #option`).style.display = `none`;
      else if (showOption == true)
        document.querySelector(`#top #arm #option`).style.display = `block`;
      xmlRequestParsing(null, null, anyRandomMenuObject());
    }
    if (event.target.classList.contains(`RandomCategory`)) {
      let code = [];
      _visit.style.display = `none`;
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
      for (i = 1; i <= menu.length - 1; i++) {
        if (menu[i].media == true) code.push(menu.indexOf(menu[i]));
      }
      var randomMenuObject = code[Math.floor(Math.random() * code.length - 1)];
      xmlRequestParsing(null, null, randomMenuObject);
    }
    if (
      event.target.classList.contains(`fa-sun`) ||
      event.target.id == `toggle`
    ) {
      var iteration = themes.findIndex((item) => item.obFn === set);
      if (iteration == themes.length - 1) iteration = -1;
      iteration = iteration + 1;
      set = themes[iteration].obFn;
      console.log(set);
      window[set]();
    }
    event.preventDefault();
  },
  false
);
