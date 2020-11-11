document.addEventListener(
  `mousemove`,
  function (event) {
    if (
      event.target.classList.contains(`adjust`) ||
      event.target.classList.contains(`border`) ||
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
      if (
        event.target.nextElementSibling.nextElementSibling !=
          document.querySelector(`#basic`) &&
        document.body.contains(
          event.target.nextElementSibling.nextElementSibling
        )
      ) {
        event.target.nextElementSibling.nextElementSibling.style
        .borderImage = `linear-gradient(to right,rgba(147,147,147,0) 0%,rgba(147,147,147,.15)
          ${parseInt(p)}% ,rgba(147,147,147,0) 100%)`;
        event.target.nextElementSibling.nextElementSibling.style.borderWidth = `.3px 0 0 .3px`;
        event.target.nextElementSibling.nextElementSibling.style.borderImageSlice = `9`;
        event.target.nextElementSibling.nextElementSibling.style.borderStyle = `solid`;
      }
      if (
        event.target != document.querySelector(`.adjust`) &&
        event.target != document.querySelector(`.border`) &&
        event.target != document.querySelector(`.cat:first-child`) &&
        event.target != document.querySelector(`.sel:first-child`)
      ) {
        event.target.previousElementSibling.previousElementSibling.style
        .borderImage = `linear-gradient(to right,rgba(147,147,147,0) 0%,rgba(147,147,147,.15)
          ${parseInt(p)}%,rgba(147,147,147,0) 100%)`;
        event.target.previousElementSibling.previousElementSibling.style.borderWidth = `.3px 0 0 .3px`;
        event.target.previousElementSibling.previousElementSibling.style.borderImageSlice = `9`;
        event.target.previousElementSibling.previousElementSibling.style.borderStyle = `solid`;
      }
    }
  },
  false
); //:before pseudo-elements not loaded in DOM
document.addEventListener(
  `mouseout`,
  function (event) {
    if (
      event.target.classList.contains(`adjust`) ||
      event.target.classList.contains(`border`) ||
      event.target.classList.contains(`cat`) ||
      event.target.classList.contains(`sel`)
    ) {
      event.target.style.borderImage = `linear-gradient(to right,  rgba(0,0,0,0) 0%,rgba(0,0,0,0) 100%)`;
      if (
        document.body.contains(
          event.target.nextElementSibling.nextElementSibling
        )
      )
        event.target.nextElementSibling.nextElementSibling.style
        .borderImage = `linear-gradient(to right,  rgba(0,0,0,0) 0%,rgba(0,0,0,0) 100%)`;
      if (
        event.target != document.querySelector(`.adjust`) &&
        event.target != document.querySelector(`.border`) &&
        event.target != document.querySelector(`.cat:first-child`) &&
        event.target != document.querySelector(`.sel:first-child`)
      )
        event.target.previousElementSibling.previousElementSibling.style
        .borderImage = `linear-gradient(to right,  rgba(0,0,0,0) 0%,rgba(0,0,0,0) 100%)`;
    }
  },
  false
); //:before pseudo-elements not loaded in DOM
document.addEventListener(
  `click`,
  function (event) {
    if (event.target.classList.contains(`urlInput`)) {
      event.target.select()
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
      init()
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
        _main.style.backgroundSize == `cover`
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
        _container.style.backgroundSize == `auto 100%` ||
        _main.style.backgroundSize == `auto 100%`
      ) {
        _container.style.backgroundSize = `contain`;
        _main.style.backgroundSize = `contain`;
      } else {
        _container.style.backgroundSize = `auto 100%`;
        _main.style.backgroundSize = `auto 100%`;
      }
    }
    if (event.target.classList.contains(`removeBackground`)) {
      _container.style.backgroundImage = `none`;
      _main.style.backgroundImage = `none`;
    }
    if (
      event.target.classList.contains(`cat`) ||
      event.target.classList.contains(`sel`)
    ) {
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
    if (
      event.target.classList.contains(`translation`) ||
      event.target.classList.contains(`cat`)
    ) {
      id = 0;
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
      }, 750);
    }
    if (event.target.classList.contains(`cat`)) {
      category = event.target.closest(`.cat`).getAttribute(`aria-item`);
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
        init();
        notifyOption(`Reading ${category} enabled.`);
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
    if (event.target.classList.contains(`List`)) {
      let expand = true;
      let groupType = `list`;
      if (document.body.contains(document.getElementById(`group`))) {
        var group = document.getElementById(`#group`);
        group.style.display = `none`;
      }
      _visit.style.visibility = `none`;
      _visit.style.display = `none`;
      if (document.body.contains(document.getElementById(`xml`)))
        document.getElementById(`xml`).remove();
      if (document.body.contains(document.getElementById(`group`)))
        document.getElementById(`group`).remove();
      populateCategoryGroup(category);
      displayExpand(expand);
      topMenuBarDisplay(topBar);
    }
    if (event.target.classList.contains(`Blocks`)) {
      let expand = false;
      let groupType = `blocks`;
      if (document.body.contains(document.getElementById(`group`))) {
        document.getElementById(`group`).style.display = `none`;
      }
      _visit.style.visibility = `none`;
      _visit.style.display = `none`;
      if (document.body.contains(document.getElementById(`xml`)))
        document.getElementById(`xml`).remove();
      if (document.body.contains(document.getElementById(`group`)))
        document.getElementById(`group`).remove();
      populateCategoryGroup(category);
      topMenuBarDisplay(topBar);
      displayExpand(expand);
    }
    if (event.target.classList.contains(`Dots`)) {
      let loading = `dots`;
      document
        .querySelectorAll(`#dots .fill`)
        .forEach((a) => a.classList.add(`dots`));
      document
        .querySelectorAll(`#dots .fill`)
        .forEach((a) => (a.style.visibility = `visible`));
      document.querySelector(`#dots`).style.zIndex = `11`;
      setTimeout(function () {
        document.querySelector(`#dots`).style.zIndex = `-1`;
        document
          .querySelectorAll(`#dots .fill`)
          .forEach((a) => a.classList.remove(`dots`));
        document
          .querySelectorAll(`#dots .fill`)
          .forEach((a) => (a.style.visibility = `hidden`));
      }, 3000);
    }
    if (event.target.classList.contains(`toggleImages`)) {
      onlyImages = onlyImages != true;
      _toggle.style.display = `none`;
      if (onlyImages == true) notifyOption(`Displaying only Images.`);
      else notifyOption(`Displaying all Feeds.`);
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
      let loading = `percent`;
      unloading();
    }
    if (event.target.classList.contains(`Info`)) {
      let uri = repository;
      uri.blank();
    }
    if (event.target.classList.contains(`TopBar`)) {
      topBar = topBar != true;
      notifyOption(`TopBar set to ${topBar.toString().capitalize()}`);
      topMenuBarDisplay(topBar);
    }
    if (event.target.classList.contains(`ShowOption`)) {
      showOption = showOption != true;
      notifyOption(`Option set to ${showOption.toString().capitalize()}`);
      if (showOption == false)
        document.querySelector(`#top #arm #option`).style.display = `none`;
      else if (showOption == true)
        document.querySelector(`#top #arm #option`).style.display = `block`;
    }
    if (event.target.classList.contains(`Random`)) {
      init();
      showOption = showOption != true;
      notifyOption(`Option set to ${showOption.toString().capitalize()}`);
      if (showOption == false)
        document.querySelector(`#top #arm #option`).style.display = `none`;
      else if (showOption == true)
        document.querySelector(`#top #arm #option`).style.display = `block`;
      xmlRequestParsing(null, null, anyRandomMenuObject());
    }
    if (event.target.classList.contains(`RandomCategory`)) {
      init();
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
      init();
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
      notifyOption(`Visual set to ${themes[iteration].name.capitalize()}`);
    }
    event.preventDefault();
  },
  false
);
