document.addEventListener(
  "mousemove",
  function (event) {
    if (
      event.target.classList.contains("cat") ||
      event.target.classList.contains("sel")
    ) {
      let x = event.pageX;
      let p = (x / event.target.offsetWidth) * 100;
      event.target.style.borderImage =
        "linear-gradient(to right,  rgba(0,0,0,.05) 0%,rgba(147,147,147,.5) " +
        parseInt(p) +
        "%,rgba(0,0,0,.05) 100%)";
      event.target.style.borderWidth = ".3px .3px .3px .3px";
      event.target.style.borderImageSlice = "9";
      event.target.style.borderStyle = "solid";
    }
  },
  false
); //:before pseudo-elements not loaded in DOM
document.addEventListener(
  "mouseout",
  function (event) {
    if (
      event.target.classList.contains("cat") ||
      event.target.classList.contains("sel")
    ) {
      event.target.style.borderImage =
        "linear-gradient(to right,  rgba(0,0,0,0) 0%,rgba(0,0,0,0) 100%)";
    }
  },
  false
); //:before pseudo-elements not loaded in DOM
document.addEventListener(
  "click",
  function (event) {
    if (
      event.target.classList.contains("cat") ||
      event.target.classList.contains("sel")
    ) {
      if (document.querySelector('#main').clientWidth <= 768){
        onScreen = false;
        sideBarDisplay(false);
      }
    }
    if (event.target.id == "hide") {
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
      event.target.classList.contains("Social") ||
      event.target.classList.contains("webp") ||
      event.target.classList.contains("News") ||
      event.target.classList.contains("Entertainment") ||
      event.target.classList.contains("Technology") ||
      event.target.classList.contains("World") ||
      event.target.classList.contains("Sports") ||
      event.target.classList.contains("Youtube")
    ) {
      id = 0;
      if (document.body.contains(document.querySelector("#feed")))
        document.querySelector("#feed").remove();
      if (document.body.contains(document.querySelector("#group")))
        document.querySelector("#group").remove();
      location.pathname.state();
      document.querySelector("#toggle").style.display = "none";
      document.querySelector("#visit").style.display = "none";
      category = event.target.closest(".cat").getAttribute("aria-item");
      populateCategoryGroup(
        event.target.closest(".cat").getAttribute("aria-item")
      );
      topMenuBarDisplay(topBar);
      displayExpand(expand);
      visual();
    }
    if (
      event.target.classList.contains("sideHome") ||
      event.target.classList.contains("side") ||
      (event.target.id == "mobileHome" && event.target.id != "Home")
    ) {
      id = 0;
      if (document.body.contains(document.querySelector("#feed")))
        document.querySelector("#feed").remove();
      if (document.body.contains(document.querySelector("#group")))
        document.querySelector("#group").remove();
      document.querySelector("#top").style.display = "none";
      document.querySelector("#toggle").style.display = "block";
      if (document.body.contains(document.querySelector("#first")))
        document.querySelector("#first").style.display = "none";
      document.querySelector("#visit").style.visibility = "visible";
      document.querySelector("#visit").style.display = "flex";
      document.querySelector(".feed").scrollLeft = 0;
      quickFeedDisplay(quickFeeds);
      document.title = "";
      unloading();
    }
    if (
      event.target.classList.contains("Reader") ||
      event.target.classList.contains("continuous")
    ) {
      document.querySelector("#visit").style.display = "none";
      if (reader == true) {
        let id = 0;
        let reader = false;
        let first = true;
        xmlChannelxmlChannelFooter();
      } else if (reader == false) {
        init();
        notifyOption("Reading " + category + " enabled.");
        if (document.body.contains(document.querySelector("#feed")))
          document.querySelector("#feed").remove();
        if (document.body.contains(document.querySelector("#group")))
          document.querySelector("#group").remove();
        reader = true;
        if (document.body.contains(document.querySelector("#feed .center")))
          first = false;
        else first = true;
        xmlRequestParsing(null, null, anyMenuRandomObject());
      }
    }
    if (
      event.target.classList.contains("Day") ||
      event.target.classList.contains("fa-terminal")
    ) {
      op = 0;
      contrast = contrast != true;
      if (location.href.match("\\?\\+1") && location.href.match("\\+1"))
        var uri = window.location.href.replace(/\?\+1|\+1/g, "");
      else var uri = window.location.href;
      notifyOption("Invert Visual Applied.");
      uri.state();
      visual();
    }
    if (
      event.target.classList.contains("Night") ||
      event.target.classList.contains("fa-code")
    ) {
      op = 1;
      contrast = contrast != true;
      if (!location.href.match("\\?\\+1") && !location.href.match("\\+1"))
        var uri = window.location.href + "?+1";
      else var uri = window.location.href;
      notifyOption("Opposite Visual Applied.");
      uri.state();
      visual();
    }
    if (
      event.target.classList.contains("List") ||
      event.target.classList.contains("fa-th-large")
    ) {
      let expand = true;
      let groupType = "list";
      if (document.body.contains(document.getElementById("#main #group"))) {
        var group = document.querySelector("#main #group");
        group.style.display = "none";
      }
      document.querySelector("#visit").style.visibility = "none";
      document.querySelector("#visit").style.display = "none";
      if (document.body.contains(document.getElementById("#main #feed")))
        document.querySelector("#main #feed").remove();
      if (document.body.contains(document.getElementById("#main #group")))
        document.querySelector("#main #group").remove();
      populateCategoryGroup(category);
      displayExpand(expand);
      topMenuBarDisplay(topBar);
      visual();
    }
    if (
      event.target.classList.contains("Blocks") ||
      event.target.classList.contains("fa-list-ul")
    ) {
      let expand = false;
      let groupType = "blocks";
      if (document.body.contains(document.getElementById("#main #group"))) {
        var group = document.querySelector("#main #group");
        group.style.display = "none";
      }
      document.querySelector("#visit").style.visibility = "none";
      document.querySelector("#visit").style.display = "none";
      if (document.body.contains(document.getElementById("#main #feed")))
        document.querySelector("#main #feed").remove();
      if (document.body.contains(document.getElementById("#main #group")))
        document.querySelector("#main #group").remove();
      populateCategoryGroup(category);
      displayExpand(expand);
      topMenuBarDisplay(topBar);
      visual();
    }
    if (
      event.target.classList.contains("Dots") ||
      event.target.classList.contains("sideDots")
    ) {
      let loading = "dots";
        document
          .querySelectorAll("#dots .fill")
          .forEach((a) => a.classList.add("dots"));
        setTimeout(function () {
          document
            .querySelectorAll("#dots .fill")
            .forEach((a) => a.classList.remove("dots"));
        }, 3000);
    }
    if (
      event.target.classList.contains("toggleImages") ||
      event.target.classList.contains("fa-camera-retro")
    ) {
      onlyImages = onlyImages != true;
      document.querySelector("#toggle").style.display = "none";
      if (onlyImages == true) notifyOption("Displaying only Images.");
      else notifyOption("Displaying all Feeds.");
      document.querySelector("#visit").style.visibility = "none";
      document.querySelector("#visit").style.display = "none";
      if (document.body.contains(document.querySelector("#main #feed")))
        document.querySelector("#main #feed").remove();
      if (document.body.contains(document.querySelector("#main #group")))
        document.querySelector("#main #group").remove();
      if (reader == false) populateCategoryGroup(category);
      topMenuBarDisplay(topBar);
      displayExpand(expand);
      unloading();
    }
    if (
      event.target.classList.contains("Percent") ||
      event.target.classList.contains("fa-signal")
    ) {
      let loading = "percent";
      unloading();
    }
    if (
      event.target.classList.contains("Info") ||
      event.target.classList.contains("fa-exclamation-circle")
    ) {
      let uri = "https://github.com/acktic/acktic.github.io";
      uri.blank();
    }
    if (
      event.target.classList.contains("TopBar") ||
      event.target.classList.contains("fa-edit")
    ) {
      topBar = topBar != true;
      notifyOption("TopBar set to " + topBar.toString().capitalize());
      topMenuBarDisplay(topBar);
    }
    if (
      event.target.classList.contains("ShowOption") ||
      event.target.classList.contains("fa-puzzle-piece")
    ) {
      showOption = showOption != true;
      notifyOption("Option set to " + showOption.toString().capitalize());
      if (showOption == false)
        document.querySelector("#top #arm #option").style.display = "none";
      else if (showOption == true)
        document.querySelector("#top #arm #option").style.display = "block";
    }
    if (
      event.target.classList.contains("Random") ||
      event.target.classList.contains("fa-pie-chart")
    ) {
      init();
      showOption = showOption != true;
      notifyOption("Option set to " + showOption.toString().capitalize());
      if (showOption == false)
        document.querySelector("#top #arm #option").style.display = "none";
      else if (showOption == true)
        document.querySelector("#top #arm #option").style.display = "block";
      xmlRequestParsing(null, null, anyMenuRandomObject());
    }
    if (
      event.target.classList.contains("RandomCategory") ||
      event.target.classList.contains("fa-slider-h")
    ) {
      init();
      let code = [];
      document.querySelector("#visit").style.display = "none";
      for (i = 1; i <= menu.length - 1; i++) {
        if (onlyImages == true) {
          if (menu[i].cat == category && menu[i].media == true)
            code.push(menu.indexOf(menu[i]));
        } else if (onlyImages == false) {
          if (menu[i].cat == category) code.push(menu.indexOf(menu[i]));
        }
      }
      let randomMenuObject = code[Math.floor(Math.random() * code.length - 1)];
      xmlRequestParsing(null, null, randomMenuObject);
    }
    if (
      event.target.classList.contains("RandomImages") ||
      event.target.classList.contains("fa-photo")
    ) {
      init();
      let code = [];
      document.querySelector("#visit").style.display = "none";
      for (i = 1; i <= menu.length - 1; i++) {
        if (menu[i].media == true) code.push(menu.indexOf(menu[i]));
      }
      var randomMenuObject = code[Math.floor(Math.random() * code.length - 1)];
      xmlRequestParsing(null, null, randomMenuObject);
    }
    if (
      event.target.classList.contains("Switch") ||
      event.target.classList.contains("fa-adjust") ||
      event.target.classList.contains("fa-sun")
    ) {
      if (location.href.match("\\?+1") || location.href.match("\\+1")) {
        var uri = window.location.href.replace(/\?\+1|\+1/g, "");
        contrast = contrast != true;
        op = op != true;
      } else {
        var uri = window.location.href + "?+1";
        contrast = contrast != true;
        op = op != true;
      }
      notifyOption("Contrast set to " + contrast.toString().capitalize());
      uri.state();
      visual();
    }
    event.preventDefault();
  },
  false
);
