document.addEventListener(
  "click",
  function (event) {
    if (event.target.classList.contains("buttonSearch")) {
      if (
        document.querySelector(".guest").value.length > 0 &&
        document.querySelector(".guest").value != ""
      )
        document.querySelector("#front").submit();
    }
    event.preventDefault();
  },
  false
); //:before pseudo-elements not loaded in DOM
document.addEventListener(
  "click",
  function (event) {
    if (event.target.classList.contains("guest")) {
      inputListingIndex("", '#first');
      visual();
    }
    event.preventDefault();
  },
  false
); //:before pseudo-elements not loaded in DOM
document.addEventListener(
  "click",
  function (event) {
    if (event.target.classList.contains("view")) {
      document.querySelector("#match").style.display = "block";
      var match = document.querySelector("#match .listing");
      while (match.firstChild) {
        match.removeChild(match.lastChild);
      }
      for (i = 0; i < translations.length; i++) {
        var index;
        index =
          "<div class='index' tabIndex='-1' aria-item='" +
          translations[i].toLowerCase() +
          "'>" +
          "  <div class='detail translation'>" +
          "    <img class='hue' src='images/" +
          translations[i] +
          ".webp" +
          "'>" +
          "    <div class='text'>&emsp;<b>" +
          translations[i] +
          "</b>" +
          "      <br>&emsp;" +
          translations[i].grep() +
          " sites" +
          "    </div>" +
          "  </div>" +
          "</div>";
        document.querySelector("#match .listing").innerHTML =
          document.querySelector("#match .listing").innerHTML + index;
      }
      event.target.style.caretColor = "#e4e4e4";
      event.target.style.paddingLeft = "30px";
      event.target.style.textAlign = "left";
      event.target.value = "";
      document.querySelector('#search .view').setAttribute("placeholder", "Search Feeds");
      document.querySelector("#input .icon").classList.add("slide");
      visual();
    }
    event.preventDefault();
  },
  false
); //:before pseudo-elements not loaded in DOM
document.addEventListener(
  "click",
  function (event) {
    if (event.target.classList.contains("side")) {
      event.target.value = "";
    }
    event.preventDefault();
  },
  false
); //:before pseudo-elements not loaded in DOM
document.addEventListener(
  "click",
  function (event) {
    if (
      event.target.classList.contains("index") ||
      event.target.classList.contains("text") ||
      event.target.classList.contains("detail") ||
      event.target.classList.contains("input") ||
      event.target.classList.contains("textMatch") ||
      event.target.classList.contains("textSuggest")
    ) {
      if (document.getElementById("match").style.display === "block")
        document.getElementById("match").style.display = "none";
      if (document.getElementById("first").style.display === "block")
        document.getElementById("first").style.display = "none";
      if (translations.includes(event.target.closest(".index").getAttribute("aria-item").capitalize())) {
        id = 0;
        document.querySelector('#top').style.display = 'block'
        if (document.body.contains(document.querySelector("#feed")))
          document.querySelector("#feed").remove();
        if (document.body.contains(document.querySelector("#group")))
          document.querySelector("#group").remove();
        populateCategoryGroup(event.target.closest(".index").getAttribute("aria-item").capitalize());
        if (expand == true) var groupType = "list";
        else var groupType = "blocks";
        displayExpand(expand);
        unloading();
        visual();

      } else {
        if (reader == true) {
          var channel = document.querySelector(".channel");
          if (document.body.contains(document.querySelector("channel")))
            while (channel.lastChild) {
              channel.removeChild(channel.lastChild);
            }
          category = event.target.closest(".index").getAttribute("response");
          randomDuplicate = [];
          first = false;
          xmlRequestParsing(null, null, random());
          notifyOption("Switched to now reading " + category + ".");
        } else {
          if (document.body.contains(document.querySelector("#feed")))
            document.querySelector("#feed").remove();
          if (document.body.contains(document.querySelector("#group")))
            document.querySelector("#group").remove();
          if (document.body.contains(document.querySelector("#visit")))
            document.querySelector("#visit").style.display = "none";
          topMenuBarDisplay(topBar);
          init();
          category =
            menu[event.target.closest(".index").getAttribute("aria-item")].cat;
          xmlRequestParsing(
            null,
            null,
            event.target.closest(".index").getAttribute("aria-item")
          );
        }
      }
    }
    event.preventDefault();
  },
  false
); //:before pseudo-elements not loaded in DOM
document.addEventListener(
  "keyup",
  function (event) {
    if (event.target.classList.contains("guest")) {
      var keyup = event.target.value;
      if (event.keyCode === 13) return false;
      else if (
        event.target.value.length >= 3 &&
        event.keyCode >= 65 &&
        event.keyCode <= 90
      )
        inputListingIndex(event.target.value, '#first');
      else if (event.target.value.length >= 2 && event.keyCode === 8)
        inputListingIndex(event.target.value, '#first');
      else if (event.target.value.length <= 2 && event.keyCode === 8)
        document.querySelector("#first").style.display = "none";
      else if (event.keyCode === 40) {
        document.querySelector("#first .listing .index").focus();
      } else if (event.keyCode === 38) {
        document.querySelector("#first .listing .index").focus();
      } else if (event.keyCode === 27)
        document.querySelector("#first").style.display = "none";
      event.target.setAttribute("tabIndex", -1);
      event.target.value = keyup;
      visual();
    }
    event.preventDefault();
  },
  false
); //:before pseudo-elements not loaded in DOM
document.addEventListener(
  "keyup",
  function (event) {
    if (event.target.classList.contains("view")) {
      event.target.setAttribute("placeholder", "");
      var keyup = event.target.value;
      if (event.keyCode === 13) return false;
      else if (
        event.target.value.length >= 3 &&
        event.keyCode >= 65 &&
        event.keyCode <= 90
      )
        inputListingIndex(event.target.value, '#match');
      else if (event.target.value.length >= 2 && event.keyCode === 8)
        inputListingIndex(event.target.value, '#match');
      else if (event.target.value.length <= 2 && event.keyCode === 8)
        document.querySelector("#match").style.display = "none";
      if (event.keyCode === 40) {
        document.querySelector("#match .listing .index").focus();
      } else if (event.keyCode === 38) {
        document.querySelector("#match .listing .index").focus();
      } else if (event.keyCode === 27)
        document.querySelector("#match").style.display = "none";
      event.target.setAttribute("tabindex", -1);
      event.target.value = keyup;
      event.target.focus();
      visual();
    }
    event.preventDefault();
  },
  false
); //:before pseudo-elements not loaded in DOM
document.addEventListener(
  "submit",
  function (event) {
    if (event.target.classList.contains("filter")) {
      if (document.querySelector(".sideFilter").value.length) {
        init();
        topMenuBarDisplay(topBar);
        document.querySelector("#visit").style.display = "none";
        document.querySelector("#toggle").style.display = "none";
        filterInputfilterInputResponse(
          false,
          false,
          document.querySelector(".sideFilter").value,
          true
        );
        topMenuBarDisplay(topBar);
        var uri =
          "?q=" +
          document.querySelector(".sideFilter").value.replace(/\s/g, "+");
        uri.define();
      }
    } else if (event.target.classList.contains("hold")) {
      document.querySelector("#match").style.display = "none";
      if (document.querySelector(".view").value.length) {
        init();
        topMenuBarDisplay(topBar);
        filterInputfilterInputResponse(false, false, document.querySelector(".view").value, true);
      }
    } else if (event.target.id == "front") {
      document.querySelector("#top").style.display = "block";
      document.querySelector("#toggle").style.display = "none";
      if (document.querySelector(".guest").value.length) {
        init();
        topMenuBarDisplay(topBar);
        document.querySelector("#visit").style.display = "none";
        filterInputfilterInputResponse(false, false, document.querySelector(".guest").value, true);
      }
    }
    event.preventDefault();
  },
  false
); //:before pseudo-elements not loaded in DOM
