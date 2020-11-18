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
      event.target.style
      .borderImage = `linear-gradient(to right,rgba(147,147,147,.01) 0%,rgba(147,147,147,.75)
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
      event.target.style.borderImage = `linear-gradient(to right,  rgba(0,0,0,0) 0%,rgba(0,0,0,0) 100%)`;
    }
  },
  false
); //:before pseudo-elements not loaded in DOM
document.addEventListener(
  `click`,
  function (event) {
    if (event.target.classList.contains(`showDescription`)) {
      showDescription = showDescription != true
      displayDescription(showDescription)
      if (showDescription == true) {
        event.target.nextElementSibling.classList.remove(`fa-minus`)
        event.target.nextElementSibling.classList.add(`fa-plus`)
      } else if (showDescription == false) {
        event.target.nextElementSibling.classList.remove(`fa-plus`)
        event.target.nextElementSibling.classList.add(`fa-minus`)
      }
    }
    if (event.target.classList.contains(`scrollIntoView`)) {
      scrollIntoView = scrollIntoView != true
      if (scrollIntoView == true) {
        event.target.nextElementSibling.classList.remove(`fa-minus`)
        event.target.nextElementSibling.classList.add(`fa-plus`)
      } else if (scrollIntoView == false) {
        event.target.nextElementSibling.classList.remove(`fa-plus`)
        event.target.nextElementSibling.classList.add(`fa-minus`)
      }
    }
    if (event.target.classList.contains(`showRipple`)) {
      showRipple = showRipple != true
      if (showRipple == true){
        event.target.nextElementSibling.classList.remove(`fa-minus`)
        event.target.nextElementSibling.classList.add(`fa-plus`)
      } else if (showRipple == false){
        event.target.nextElementSibling.classList.remove(`fa-plus`)
        event.target.nextElementSibling.classList.add(`fa-minus`)
      }
    }
    if (event.target.classList.contains(`urlInput`)) {
      event.target.select()
    }
    if (event.target.classList.contains(`resetBackground`)) {
      if (
        Array.isArray(backgroundImage) &&
        typeof backgroundImage[0].path == "string" &&
        backgroundImage[0].element == `container`
      ) {
        _container.style.backgroundImage = `url(${backgroundImage[0].path})`;
        _main.style.backgroundImage = `url()`;
      } else if (
        Array.isArray(backgroundImage) &&
        typeof backgroundImage[0].path == "string" &&
        backgroundImage[0].element == `main`
      ) {
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
          if (Array.isArray(backgroundImage)) backgroundImage[0].path = content;
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
    if (event.target.classList.contains(`saveBackground`) &&
        document.querySelector(`.urlInput`).value
      .match(/\b(https?:\/\/\S*?\.(?:png|jpe?g|gif|webp))/g)
    ) {
      var xhr = new XMLHttpRequest();
      var url = document.querySelector(`.urlInput`).value;

      xhr.responseType = 'arraybuffer'; //Set the response type to arraybuffer so xhr.response returns ArrayBuffer
      xhr.open('GET', cors + url , true);

      xhr.onreadystatechange = function () {
          if (xhr.readyState == xhr.DONE) {
              //When request is done
              //xhr.response will be an ArrayBuffer
              var file = new Blob([xhr.response], {type:'image'});
              saveAs(
                file,
                document.querySelector(`.urlInput`).value
                .match(/\b(\/.+\.(?:png|jpe?g|gif|webp))/g)
              );
              unloading()
          }
      };

      xhr.send();
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
    if (
      event.target.classList.contains(`translation`) ||
      event.target.classList.contains(`filterBlur`) ||
      event.target.classList.contains(`classic`) ||
      event.target.classList.contains(`header`) ||
      event.target.classList.contains(`select`) ||
      event.target.classList.contains(`copy`) ||
      event.target.classList.contains(`item`) ||
      event.target.classList.contains(`wrap`) ||
      event.target.classList.contains(`ago`) ||
      event.target.classList.contains(`pub`) ||
      event.target.classList.contains(`cat`) ||
      event.target.classList.contains(`sel`)
    ) {
      _main.classList.remove(`guide`);
      _guide.style.display = `none`;
      while (_guide.firstChild)
        _guide.removeChild(_guide.lastChild);
      if (_main.clientWidth <= 768) {
        onScreen = false;
        sideBarDisplay(false);
      }
    }
    if (event.target.id == `hide`) {
      if (sideBarFirst == true) {
        let sideBarFirst = false;
        onScreen = onScreen != true;
        sideBarDisplay(onScreen);
      }
      if (sideBarFirst == false) {
        let sideBarFirst = true;
        sideBarDisplay(onScreen);
      }
    }
    if (event.target.classList.contains(`cat`)) {
      id = 0
      if (showRipple == true){
        const button = event.target.getBoundingClientRect();
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
        event.target.appendChild(circle);
        setTimeout(function () {
          document.querySelector(`.ripple`).remove();
        }, 500);
      }
      category = event.target.closest(`.cat`).getAttribute(`aria-item`);
      if (reader == true) {
        if (document.body.contains(document.querySelector(`.channel`)))
          first = false;
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
      _visit.style.display = `none`;
      if (reader == true) {
        let reader = false;
        let first = true;
        let id = 0;
        xmlChannelFooter();
      } else if (reader == false) {
        if (document.body.contains(document.querySelector(`#xml`)))
          document.querySelector(`#xml`).remove();
        if (document.body.contains(document.querySelector(`#group`)))
          document.querySelector(`#group`).remove();
        reader = true;
        if (document.body.contains(document.querySelector(`#xml .center`)))
          first = false;
        else first = true;
        xmlRequestParsing(null, null, anyRandomMenuObject());
      }
    }
    if (event.target.classList.contains(`parse`)) {
      if (document.querySelector(`.exclude`).clientHeight != `50`) {
        document.querySelector(`.exclude`).style.height = `30px`;
      } else {
        if (exclude.length == 0)
          document.querySelector(`.exclude`).style.height = `75px`
        else
        document.querySelector(`.exclude`).style.height =
          `${(exclude.length * 34.25) + 75}px`;
      }
    }
    if (event.target.classList.contains(`border`)) {
      if (document.querySelector(`.themes`).clientHeight != `50`) {
        document.querySelector(`.themes`).style.height = `30px`;
        return false;
      }
      let count = themes.length + 1;
      document.querySelector(`.themes`).style.height = `${count * 35}px`;
    }
    if (event.target.classList.contains(`adjust`)) {
      if (document.querySelector(`.bg`).clientHeight != `50`) {
        document.querySelector(`.bg`).style.height = `30px`;
        return false;
      }
      let count = background.length + 1;
      document.querySelector(`.bg`).style.height = `${count * 35}px`;
    }
    if (event.target.classList.contains(`choose`)) {
      if (document.querySelector(`.set`).clientHeight != `50`) {
        document.querySelector(`.set`).style.height = `30px`;
        return false;
      }
      let count = settings.length + 1;
      document.querySelector(`.set`).style.height = `${count * 35}px`;
    }
    if (event.target.classList.contains(`List`)) {
      expand = true;
      groupType = `list`;
        event.target.nextElementSibling.classList.remove(`fa-minus`)
        event.target.nextElementSibling.classList.add(`fa-plus`)
        document.querySelector(`.Blocks`).nextElementSibling.classList.remove(`fa-plus`)
        document.querySelector(`.Blocks`).nextElementSibling.classList.add(`fa-minus`)
    }
    if (event.target.classList.contains(`Blocks`)) {
      expand = false;
      groupType = `blocks`;
        event.target.nextElementSibling.classList.remove(`fa-minus`)
        event.target.nextElementSibling.classList.add(`fa-plus`)
        document.querySelector(`.List`).nextElementSibling.classList.remove(`fa-plus`)
        document.querySelector(`.List`).nextElementSibling.classList.add(`fa-minus`)
    }
    if (event.target.classList.contains(`Dots`)) {
      loading = `dots`;
      event.target.nextElementSibling.classList.remove(`fa-minus`)
      event.target.nextElementSibling.classList.add(`fa-plus`)
      document.querySelector(`.Percent`).nextElementSibling.classList.remove(`fa-plus`)
      document.querySelector(`.Percent`).nextElementSibling.classList.add(`fa-minus`)
    }
    if (event.target.classList.contains(`onlyImages`)) {
      onlyImages = onlyImages != true;
      if (onlyImages == true) {
        event.target.nextElementSibling.classList.remove(`fa-minus`)
        event.target.nextElementSibling.classList.add(`fa-plus`)
      } else if (onlyImages == false) {
        event.target.nextElementSibling.classList.remove(`fa-plus`)
        event.target.nextElementSibling.classList.add(`fa-minus`)
      }
      _toggle.style.display = `none`;
      _visit.style.visibility = `none`;
      _visit.style.display = `none`;
      if (document.body.contains(document.querySelector(`#xml`)))
        document.querySelector(`#xml`).remove();
      if (document.body.contains(document.querySelector(`#group`)))
        document.querySelector(`#group`).remove();
      if (reader == false) populateCategoryGroup(category);
      topMenuBarDisplay(topBar);
      displayExpand(expand);
      unloading();
    }
    if (event.target.classList.contains(`Percent`)) {
      loading = `percent`;
      event.target.nextElementSibling.classList.remove(`fa-minus`)
      event.target.nextElementSibling.classList.add(`fa-plus`)
      document.querySelector(`.Dots`).nextElementSibling.classList.remove(`fa-plus`)
      document.querySelector(`.Dots`).nextElementSibling.classList.add(`fa-minus`)
    }
    if (event.target.classList.contains(`Info`)) {
      let uri = repository;
      uri.blank();
    }
    if (
      event.target.classList.contains(`fadeIntoView`)
    ) {
      fadeIntoView = fadeIntoView != true;
      if (fadeIntoView == true) {
        event.target.nextElementSibling.classList.remove(`fa-minus`)
        event.target.nextElementSibling.classList.add(`fa-plus`)
      } else if (fadeIntoView == false) {
        event.target.nextElementSibling.classList.remove(`fa-plus`)
        event.target.nextElementSibling.classList.add(`fa-minus`)
      }
      if (fadeIntoView == false) {
      } else if (fadeIntoView == true) {
        if (document.body.contains(document.querySelector(`#xml`))) {

          document
            .querySelectorAll(`.img`)
            .forEach((a) => (a.classList.remove(`fade-in-element`)));
          document
            .querySelectorAll(`.img`)
            .forEach((a) => (a.classList.add(`hidden`)));
          (function() {
            var elements;
            var windowHeight;

            function init() {
              elements = document.querySelectorAll('.hidden');
              windowHeight = _main.clientHeight;
            }

            function checkPosition() {
              for (var i = 0; i < elements.length; i++) {
                var element = elements[i];
                var positionFromTop = elements[i].getBoundingClientRect().top;

                if (positionFromTop - windowHeight <= 0) {
                  if (fadeIntoView == true)
                    element.classList.add('fade-in-element');
                  if (fadeIntoView == false) {
                    document
                      .querySelectorAll(`.img`)
                      .forEach((a) => (a.classList.remove(`hidden`)));
                    _main.removeEventListener("scroll", checkPosition);
                    _main.removeEventListener("resize", init);
                    element.classList.remove('hidden');
                  }
                }
              }
            }

            _main.addEventListener('scroll', checkPosition);
            _main.addEventListener('resize', init);

            init();
            checkPosition();
          })();
        }

      }
    }
    if (event.target.classList.contains(`topBar`)) {
      topBar = topBar != true;
      if (topBar == true) {
        event.target.nextElementSibling.classList.remove(`fa-minus`)
        event.target.nextElementSibling.classList.add(`fa-plus`)
      } else if (topBar == false) {
        event.target.nextElementSibling.classList.remove(`fa-plus`)
        event.target.nextElementSibling.classList.add(`fa-minus`)
      }
      topMenuBarDisplay(topBar);
    }
    if (event.target.classList.contains(`showOption`)) {
      showOption = showOption != true;
      if (showOption == true) {
        event.target.nextElementSibling.classList.remove(`fa-minus`)
        event.target.nextElementSibling.classList.add(`fa-plus`)
      } else if (showOption == false) {
        event.target.nextElementSibling.classList.remove(`fa-plus`)
        event.target.nextElementSibling.classList.add(`fa-minus`)
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
    if (event.target.classList.contains(`fa-sun`)) {
      var iteration = themes.findIndex((item) => item.name === set);
      if (iteration == themes.length - 1) iteration = -1;
      iteration = iteration + 1;
      set = themes[iteration].name;
      window[themes[iteration].name]();
    }
    event.preventDefault();
  },
  false
);
