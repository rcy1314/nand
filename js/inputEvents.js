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
          translations[i] +
          "'>" +
          "  <div class='detail translation'>" +
          "    <img class='hue' src='images/" +
          translations[i] +
          ".webp" +
          "'>" +
          "    <div class='text'>&emsp;" +
          translations[i] +
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
      document.querySelector('#search .view').setAttribute("placeholder", "Search feeds");
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
      event.target.classList.contains("hue") ||
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
      if (translations.includes(event.target.closest(".index").getAttribute("aria-item"))) {
        id = 0;
        document.querySelector('#top').style.display = 'block'
        if (document.body.contains(document.querySelector("#feed")))
          document.querySelector("#feed").remove();
        if (document.body.contains(document.querySelector("#group")))
          document.querySelector("#group").remove();
        category = event.target.closest(".index").getAttribute("aria-item")
        populateCategoryGroup(event.target.closest(".index").getAttribute("aria-item"));
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
  "mouseout",
  function (event) {
    if (
      event.target.classList.contains("hue") ||
      event.target.classList.contains("text") ||
      event.target.classList.contains("detail") ||
      event.target.classList.contains("input") ||
      event.target.classList.contains("textMatch") ||
      event.target.classList.contains("textSuggest")
    ) {
      document
        .querySelectorAll(".listing .hover")
        .forEach((a) => a.classList.add('index'));
        document
          .querySelectorAll(".listing .index")
          .forEach((a) => a.classList.remove('hover'));
      visual()
    }
  },
  false
); //:before pseudo-elements not loaded in DOM
document.addEventListener(
  "mouseover",
  function (event) {
    if (
      event.target.classList.contains("hue") ||
      event.target.classList.contains("text") ||
      event.target.classList.contains("detail") ||
      event.target.classList.contains("input") ||
      event.target.classList.contains("textMatch") ||
      event.target.classList.contains("textSuggest")
    ) {
      event.target.closest('.index').classList.add('hover');
      event.target.closest('.hover').classList.remove('index');
      visual()
    }
  },
  false
); //:before pseudo-elements not loaded in DOM
document.addEventListener(
  "keyup",
  function (event) {
    if (event.target.classList.contains("guest")) {
      if (event.keyCode === 13) return false
      else if (
        event.target.value.length > 3 &&
        event.keyCode !== 40 &&
        event.keyCode !== 38
      )
        inputListingIndex(event.target.value, '#first');
      else if (event.target.value.length > 2 && event.keyCode === 8)
        inputListingIndex(event.target.value, '#first');
      else if (event.keyCode === 40) {
          if (!document.body.contains(document.querySelector("#first .listing .hover"))) {
          document.querySelector('#first .listing .index:first-child').classList.add('hover')
          document.querySelector('#first .listing .index:first-child').classList.remove('index')
        } else {
          if (document.body.contains(document.querySelector("#first .listing .hover").nextSibling)) {
            document.querySelector('#first .listing .hover').classList.add('index')
            document.querySelector('#first .listing .hover').nextSibling.classList.add('hover')
            document.querySelector('#first .listing .hover').nextSibling.classList.remove('index')
            document.querySelector('#first .listing .hover').classList.remove('hover')
            document.querySelector('#first .listing .hover').focus()
            document.querySelector('.focus .guest').focus()
          }
        }
      } else if (event.keyCode === 38) {
        if (!document.body.contains(document.querySelector("#first .listing .hover"))) {
          document.querySelector('#first .listing .index:first-child').classList.add('hover')
          document.querySelector('#first .listing .index:first-child').classList.remove('index')
        } else {
          if (document.body.contains(document.querySelector("#first .listing .hover").previousSibling)) {
            document.querySelector('#first .listing .hover').previousSibling.classList.remove('index')
            document.querySelector('#first .listing .hover').previousSibling.classList.add('hover')
            document.querySelector('#first .listing .hover').nextSibling.classList.add('index')
            document.querySelector('#first .listing .hover').nextSibling.classList.remove('hover')
            document.querySelector('#first .listing .hover').focus()
            document.querySelector('.focus .guest').focus()
          }
        }
      } else if (event.keyCode === 27)
        document.querySelector("#first").style.display = "none";
      event.target.setAttribute("tabIndex", -1);
      event.target.focus();
      visual();
    }
    if (event.target.classList.contains("view")) {
      event.target.setAttribute("placeholder", "");
      if (event.keyCode === 13) return false;
      else if (
        event.target.value.length > 3 &&
        event.keyCode !== 40 &&
        event.keyCode !== 38
      )
        inputListingIndex(event.target.value, '#match');
        else if (event.keyCode === 40) {
            if (!document.body.contains(document.querySelector("#match .listing .hover"))) {
            document.querySelector('#match .listing .index:first-child').classList.add('hover')
            document.querySelector('#match .listing .index:first-child').classList.remove('index')
          } else {
            if (document.body.contains(document.querySelector("#match .listing .hover").nextSibling)) {
              document.querySelector('#match .listing .hover').classList.add('index')
              document.querySelector('#match .listing .hover').nextSibling.classList.add('hover')
              document.querySelector('#match .listing .hover').nextSibling.classList.remove('index')
              document.querySelector('#match .listing .hover').classList.remove('hover')
              document.querySelector('#match .listing .hover').focus()
              document.querySelector('#input .view').focus()
            }
          }
        } else if (event.keyCode === 38) {
          if (!document.body.contains(document.querySelector("#match .listing .hover"))) {
            document.querySelector('#match .listing .index:first-child').classList.add('hover')
            document.querySelector('#match .listing .index:first-child').classList.remove('index')
          } else {
            if (document.body.contains(document.querySelector("#match .listing .hover").previousSibling)) {
              document.querySelector('#match .listing .hover').previousSibling.classList.remove('index')
              document.querySelector('#match .listing .hover').previousSibling.classList.add('hover')
              document.querySelector('#match .listing .hover').nextSibling.classList.add('index')
              document.querySelector('#match .listing .hover').nextSibling.classList.remove('hover')
              document.querySelector('#match .listing .hover').focus()
              document.querySelector('#input .view').focus()
            }
          }
      } else if (event.keyCode === 27)
        document.querySelector("#match").style.display = "none";
      event.target.setAttribute("tabindex", -1);
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
    event.preventDefault();
    if (event.target.classList.contains("filter")) {
      if (document.querySelector(".sideFilter").value.length) {
        init();
        topMenuBarDisplay(topBar);
        document.querySelector("#visit").style.display = "none";
        document.querySelector("#toggle").style.display = "none";
        filterInputResponse(
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
    } else if (event.target.id == "search") {
      if (document.body.contains(document.querySelector("#match .listing .hover")) &&
      translations.includes(document.querySelector("#match .listing .hover")
          .getAttribute('aria-item'))){
              document.querySelector('#match').style.display = 'none'
              if (document.body.contains(document.querySelector("#feed")))
                document.querySelector("#feed").remove();
              if (document.body.contains(document.querySelector("#group")))
                document.querySelector("#group").remove();
              category = document.querySelector("#match .listing .hover")
                  .getAttribute('aria-item')
              document.title = category;
              populateCategoryGroup(category);
              if (expand == true) var groupType = "list";
              else var groupType = "blocks";
              displayExpand(expand);
              unloading();
              visual();
        } else if (document.body.contains(document.querySelector("#match .hover"))) {
          document.querySelector('#match').style.display = 'none'
          if (document.body.contains(document.querySelector("#feed")))
            document.querySelector("#feed").remove();
          if (document.body.contains(document.querySelector("#group")))
            document.querySelector("#group").remove();
          xmlRequestParsing(
            null,
            null,
            document.querySelector('#match .hover').getAttribute('aria-item')
          )
          return false
        } else if (document.querySelector('#input .view').value.length) {
        var query = document.querySelector('#input .view').value.space()
        query.replace(/\s/, '+')
        var uri = '?q=' + query
        uri.define().exit()
      }
    } else if (event.target.id == "front") {
      if (document.body.contains(document.querySelector("#first .hover"))){
        document.querySelector('#first').style.display = 'none'
        if (document.body.contains(document.querySelector("#feed")))
          document.querySelector("#feed").remove();
        if (document.body.contains(document.querySelector("#group")))
          document.querySelector("#group").remove();
        xmlRequestParsing(
          null,
          null,
          document.querySelector('#first .hover').getAttribute('aria-item')
        )
        return false
      } else if (document.querySelector('.focus .guest').value.length > 0) {
        var query = document.querySelector('.focus .guest').value.space()
        query.replace(/\s/, '+')
        var uri = '?q=' + query
        uri.define().exit()
      }
    }
  },
  false
); //:before pseudo-elements not loaded in DOM
