var notifyOption = function (displayContent) {
  var notification = document.querySelector("#sidebar .notify");
  if (onScreen == true) var pos = 'absolute'
  else var pos = 'fixed'
  notification.style.display = "block";
  notification.style.position = pos;
  notification.innerHTML = displayContent;
  setTimeout(function () {
    var Elem = notification;
    Elem.animate(
      {
        right: ["0px", "280px"],
      },
      {
        duration: 1500, // number in ms [this would be equiv of your speed].
        easing: "linear",
        iterations: 1, // infinity or a number.
        // fill: ''
      }
    );
  }, 1500);

  setTimeout(function () {
    notification.style.display = "none";
  }, 3000);
};

var displayExpand = function (n) {
  if (document.body.contains(document.getElementById("feed")))
    document.getElementById("feed").remove()
  var group = document.getElementById("group");
  if (n == true) {
    groupType = "list";
    if (document.body.contains(document.getElementById("group"))) {
      group.style.display = "none";
      group
        .querySelectorAll(".hash")
        .forEach((a) => (a.style.display = "block"));
      group
        .querySelectorAll(".media")
        .forEach((a) => (a.style.display = "block"));
      group
        .querySelectorAll(".description")
        .forEach((a) => (a.style.display = "block"));
      group
        .querySelectorAll(".populate")
        .forEach((a) => a.classList.add("expand"));
      group
        .querySelectorAll(".populate")
        .forEach((a) => (a.style.alignItems = "center"));
      group
        .querySelectorAll(".populate")
        .forEach((a) => (a.style.flexWrap = "nowrap"));
      if (document.body.contains(document.getElementById(".air")))
        document.querySelector(".air").style.display = "block";
      if (document.body.contains(document.getElementById(".result`")))
        document.querySelector(".result").style.display = "block";
    }
  } else if (n == false) {
    groupType = "blocks";
    if (document.body.contains(document.getElementById("group"))) {
      group.style.display = "none";
      group
        .querySelectorAll(".hash")
        .forEach((a) => (a.style.display = "none"));
      group
        .querySelectorAll(".media")
        .forEach((a) => (a.style.display = "none"));
      group
        .querySelectorAll(".description")
        .forEach((a) => (a.style.display = "none"));
      group
        .querySelectorAll(".populate")
        .forEach((a) => a.classList.remove("expand"));
      group
        .querySelectorAll(".populate")
        .forEach((a) => (a.style.flexWrap = "wrap"));
      if (op == 0 && groupType == "blocks")
        group
          .querySelectorAll(".populate")
          .forEach((a) => a.classList.add("invertAlt"));
      if (document.body.contains(document.querySelector(".air")))
        document.querySelector(".air").style.display = "inline-flex";
      if (document.body.contains(document.getElementById(".result")))
        document.querySelector(".result").style.display = "inline-flex";
    }
  }
  if (document.body.contains(document.querySelector("#group .populate"))) {
    if (groupType == "blocks" && op == 0) {
      document
        .querySelectorAll("#group .populate")
        .forEach((a) => a.classList.add("invertAlt"));
      document
        .querySelectorAll("#group .populate")
        .forEach((a) => a.classList.remove("invert"));
    } else if (groupType == "list" && op == 0) {
      document
        .querySelectorAll("#group .populate")
        .forEach((a) => a.classList.add("invert"));
      document
        .querySelectorAll("#group .populate")
        .forEach((a) => a.classList.remove("invertAlt"));
    }
  }
  unloading();
};

var sideBarDisplay = function (toggleOption) {
  if (toggleOption == true) {
    var Elem = document.querySelector("#sidebar");
    Elem.style.position = "fixed";
    Elem.animate(
      {
        width: ["0px", "240px"],
      },
      {
        duration: 300, // number in ms [this would be equiv of your speed].
        easing: "linear",
        iterations: 1, // infinity or a number.
        // fill: ''
      }
    );
    document.querySelector("#sidebar").style.width = "240px";
    document.querySelector("#sidebar").style.display = "block";
    document.querySelector("#content").style.display = "block";
    document.querySelector("#basic").style.display = "block";
    var category = document.querySelector("#category");
    var select = document.querySelector("#select");
    if (!document.body.contains(document.querySelector(".cat"))) {
      for (i = 0; i <= translations.length - 1; i++) {
        category.innerHTML =
          category.innerHTML + sideBarCategoryBuild(translations[i]);
      }
      for (i = 0; i <= selections.length - 1; i++) {
        select.innerHTML =
          select.innerHTML +
          sideBarOptionBuild(
            selections[i].class,
            selections[i].name,
            selections[i].icon
          );
      }
    }
    if (document.querySelector("#main").clientWidth >= 769) {
      document.querySelector("#main").style.left = "240px";
      document.querySelector("#top").style.width = "calc(100% - 256px)";
      document.querySelector("#main").style.width = "calc(100% - 240px)";
    }
    setTimeout(function() {
      document
        .querySelectorAll("#dots .fill")
        .forEach((a) => a.style.marginLeft = "150px");
    }, 300)
  } else if (toggleOption == false) {
    document
      .querySelectorAll("#dots .fill")
      .forEach((a) => a.style.marginLeft = "0");
    document.querySelector("#main").style.left = "0";
    document.querySelector("#sidebar").style.width = "0";
    document.querySelector("#main").style.width = "100%";
    document.querySelector("#top").style.width = "calc(100% - 16px)";
  }
  visual();
};

var topMenuBarDisplay = function (toggleOption) {
  if (document.body.contains(document.querySelector("#top"))) {
    var top = document.getElementById("top");
    if (toggleOption == true) top.style.display = "block";
    else if (toggleOption == false) top.style.display = "none";
  }
};

var quickFeedDisplay = function (toggleOption) {
  if (toggleOption == true) {
    document.querySelector(".quick").classList.add("visible");
    document.querySelector(".quick").classList.remove("invisible");
    document.querySelector("#front").classList.add("toggleHidden");
    document.querySelector("#front").classList.remove("toggle");
    if (document.body.contains(document.querySelector(".link"))) {
      document.querySelector(".link .fa-angle-up").classList.add("rotate");
      document.querySelector(".link .fa-angle-up").classList.remove("rotateReverse");
      document.querySelector(".link").classList.add("slideRight");
      document.querySelector(".show").style.visibility = "hidden";
      setTimeout(function () {
        document.querySelector(".fa-angle-up").classList.add("rotate");
      }, 1000);
    }
  } else if (toggleOption == false) {
    document.querySelector("#page .quick").classList.remove("visible");
    document.querySelector("#page .quick").classList.add("invisible");
    document.querySelector("#front").classList.remove("toggleHidden");
    document.querySelector("#front").classList.add("toggle");
    if (document.body.contains(document.querySelector(".link"))) {
      document.querySelector(".fa-angle-up").classList.remove("rotate");
      document.querySelector(".fa-angle-up").classList.add("rotateReverse");
      document.querySelector(".link").classList.remove("slideRight");
      document.querySelector(".show").style.visibility = "visible";
    }
  }
};

var xmlChannelFooter = function () {
  if (document.body.contains(document.querySelector(".center"))) {
    var center = document.querySelector(".channel");
    center.innerHTML = center.innerHTML + footerBuild();
  }
};

var guideDisplay = function (pubArray) {
  var guide = document.querySelector("#guide");
  while (guide.firstChild) guide.removeChild(guide.lastChild);
  document.querySelector("#top").style.display = "hide";
  guide.innerHTML = guideBuild(pubArray);
  guide.style.display = "flex";
  guideImageAttributes(pubArray[0].src);
  visual();
};

var guideDisplayYoutube = function (pubArray) {
  var guide = document.querySelector("#guide");
  while (guide.firstChild) guide.removeChild(guide.lastChild);
  document.querySelector("#top").style.display = "hide";
  guide.innerHTML = guideBuildYoutube(pubArray);
  guide.querySelector(".checkmark").style.display = "block";
  guide.style.display = "flex";
  visual();
};

var contentStatusDisplay = function (
  menuIndex,
  recentPost,
  oldestPost,
  postsCount
) {
  if (document.body.contains(document.querySelector("#feed .status"))) {
    var status = document.querySelector("#feed .status");
    status.innerHTML = contentBuild(
      oldestPost,
      recentPost,
      postsCount,
      menuIndex
    );
  }
};

var quickFeedAsset = function (feedAssets) {
  var dupe = [];
  var feed = document.querySelector(".quick .feed");
  if (feedAssets == 7)
    for (var i = 0; i <= translations.length - 1; i++) {
      feed.innerHTML = feed.innerHTML + translationBuild(translations[i]);
    }
  else
    for (var i = 1; i <= menu.length - 1; i++) {
      var randomMenuObject = menu.indexOf(
        menu[Math.floor(Math.random() * menu.length - 1)]
      );
      if (
        randomMenuObject != 0 &&
        menu[randomMenuObject] &&
        !dupe.includes(randomMenuObject) &&
        menu[randomMenuObject].media == true
      ) {
        dupe.push(randomMenuObject);
        var asset;
        feed.innerHTML =
          feed.innerHTML +
          assetBuild(
            menu.indexOf(menu[randomMenuObject]),
            menu[randomMenuObject].img.image(),
            menu[randomMenuObject].id
          );
          if (dupe.length === feedAssets) return false
      }
    }
  visual();
};

var inputListingIndex = function (inputFilter, listingWrapper) {
  var suggest = [];
  var listing = document.querySelector(listingWrapper + " .listing");
  while (listing.lastChild) {
    listing.removeChild(listing.lastChild);
  }
  document.querySelector(listingWrapper).style.display = "block";
  if (inputFilter != "")
    for (var i = menu.length - 1; i >= 1; i--) {
      if (
        menu[i].des.toLowerCase().match(inputFilter)
      ) {
        ready(() => {
          /* Do things after DOM has fully loaded */
          listing.innerHTML =
            listingIndexBuild(
              menu[i].id.match(/[^\/]+$/g),
              menu.indexOf(menu[i]),
              menu[i].img.image(),
              menu[i].cat,
              false,
              i
            ) + listing.innerHTML;
        });
        suggest.push(i);
      }
      setTimeout(500);
    }
  for (i = 1; i <= menu.length - 1; i++) {
    var randomMenuObject = menu.indexOf(
      menu[Math.floor(Math.random() * menu.length - 1)]
    );
    if (
      menu[randomMenuObject] &&
      menu[randomMenuObject].media == true &&
      !suggest.includes(randomMenuObject)
    )
      ready(() => {
        if (suggest.length >= suggestionBuffer) return false;
        suggest.push(randomMenuObject);
        listing.innerHTML += listingIndexBuild(
          menu[randomMenuObject].id.match(/[^\/]+$/g),
          menu.indexOf(menu[randomMenuObject]),
          menu[randomMenuObject].img.image(),
          menu[randomMenuObject].cat,
          true,
          i
        );
      });
    setTimeout(500);
  }
};

var progressBackDrop = function (done, percent) {
  if (
    !location.href.match("\\?+1") &&
    !location.href.match("\\?q=") &&
    !location.href.match("\\+1") &&
    !location.href.match("\\?") &&
    contrast == true
  ) {
    var extendedURI = window.location.href + "?+1";
    extendedURI.state();
  }
  if (done == true) {
    var progressBar = document.getElementById("progressBar");
    progressBar.style.transitionDelay = "none";
    progressBar.style.transition = "width .25s ease-in-out";
    progressBar.style.width = percent + "%";
    if (document.body.contains(document.getElementById("group")))
      document.querySelector("#group").style.display = "block";
    if (document.body.contains(document.getElementById("feed")))
      document.querySelector("#feed").style.display = "block";
    if (onlyImages == false) {
      if (document.body.contains(document.querySelector(".air")))
        document.querySelector("#main").scrollTop = document.querySelector(
          ".air"
        ).clientHeight;
    } else if (onlyImages == true)
      if (document.body.contains(document.querySelector(".result")))
        document.querySelector("#main").scrollTop = 0;
    if (document.body.contains(document.querySelector("#feed .channel")))
      if (reader == true && first == true) {
        if (
          document.querySelector("#main").innerHeight >=
          document.querySelector("#feed .channel").innerHeight
        )
          if (httpRequest.status == 200) {
            first = false;
            xmlRequestParsing(null, null, random());
          }
      }
    setTimeout(function () {
      progressBar.style.transitionDelay = "none";
      progressBar.style.transition = "none";
      progressBar.style.width = "0%";
    }, 250);
    visual();
  }
};

var xmlStatusSuggestions = function () {
  var duplicate = [];
  if (document.body.contains(document.querySelector("#main .suggestions"))) {
    var suggestions = document.querySelector("#main .suggestions");
    if (
      document.body.contains(
        document.querySelector("#main .suggestions .combine")
      )
    )
      while (suggestions.firstChild)
        suggestions.removeChild(suggestions.lastChild);
    for (var i = 0; i <= contentStatusBuffer; i++) {
      var randomMenuObject = menu.indexOf(
        menu[Math.floor(Math.random() * menu.length - 1)]
      );
      if (
        randomMenuObject != 0 &&
        menu[randomMenuObject] &&
        !duplicate.includes(randomMenuObject)
      ) {
        if (menu[randomMenuObject].media == true)
          var media = "feed contains images";
        else if (menu[randomMenuObject].media == false)
          var media = "feed might not contain images";
        duplicate.push(randomMenuObject);
        suggestions.innerHTML =
          suggestions.innerHTML +
          suggestBuild(
            media,
            menu.indexOf(menu[randomMenuObject]),
            menu[randomMenuObject].img.image(),
            menu[randomMenuObject].id,
            menu[randomMenuObject].cat
          );
      }
    }
  }
};

var populateCategoryGroup = function (translation) {
  id = 0;
  var main = document.getElementById("main");
  if (
    !document.body.contains(document.querySelector("#group")) &&
    !document.body.contains(document.querySelector(".result"))
  )
    main.innerHTML =
      "<div id='group'>" +
      "  <div class='result'></div>" +
      "</div>" +
      main.innerHTML;
  var result = document.querySelector(".result");

  if (id && id != 0 && !location.href.match("\\?q=")) {
    if (menu[id].media == true)
      var media = "<div class='media' style='display:none'>Images</div>";
    else var media = "<div class='blank'></div>";
    result.innerHTML =
      result.innerHTML +
      categoryBuild(
        menu[id].id.match(/[^\/]+$/g),
        menu.indexOf(menu[id]),
        menu[id].img.image(),
        menu[id].hash,
        menu[id].des,
        media
      );
  }
  for (var i = 1; i <= menu.length - 1; i++) {
    if (menu[i].media == true)
      var media = "<div class='media' style='display:none'>Images</div>";
    else var media = "<div class='blank'></div>";
    if (onlyImages == true) {
      if (
        menu[i].media == true &&
        translation == menu[i].cat &&
        id != menu.indexOf(menu[i])
      ) {
        result.innerHTML =
          result.innerHTML +
          categoryBuild(
            menu[i].id.match(/[^\/]+$/g),
            menu.indexOf(menu[i]),
            menu[i].img.image(),
            menu[i].hash,
            menu[i].des,
            media
          );
      }
    } else if (onlyImages == false) {
      if (translation == menu[i].cat && id != menu.indexOf(menu[i])) {
        result.innerHTML =
          result.innerHTML +
          categoryBuild(
            menu[i].id.match(/[^\/]+$/g),
            menu.indexOf(menu[i]),
            menu[i].img.image(),
            menu[i].hash,
            menu[i].des,
            media
          );
      }
    }
  }
  main.setAttribute("tabindex", -1);
  main.focus();
  if (onlyImages == false) reverseCategoryGroup(translation);
  else if (onlyImages == true) {
    unloading();
  }
};

var reverseCategoryGroup = function (translation) {
  var group = document.querySelector("#group");
  var node = document.querySelector(".result");
  if (!document.body.contains(document.querySelector(".air"))) {
    var div = document.createElement("div");
    div.classList.add("air");
    group.prepend(div);
  } else {
    document.querySelector('.air').remove()
    var div = document.createElement("div");
    div.classList.add("air");
    group.prepend(div);
  }
  var air = document.querySelector(".air");
  for (var i = 1; i < menu.length - 1; i++) {
    if (translation == menu[i].cat) {
      if (menu[i].media == true)
        var media = "<div class='media' style='display:none'>Images</div>";
      else var media = "<div class='blank'></div>";
      var scroll = categoryBuild(
        menu[i].id.match(/[^\/]+$/g),
        menu.indexOf(menu[i]),
        menu[i].img.image(),
        menu[i].hash,
        menu[i].des,
        media
      );
      air.innerHTML = air.innerHTML + scroll;
    }
  }
  displayExpand(expand);
  visual();
};

var filterInputResponse = function (
  initPassthrough,
  extendedextendedURI,
  filterURI,
  categoryBloat
) {
  var match;
  id = false;
  filter = [];
  exact = false;
  document.querySelector("#visit").style.display = "none";
  if (translations.includes(filterURI.toString().capitalize())) {
    category = filterURI.capitalize();
    populateCategoryGroup(filterURI.capitalize());
    unloading();
    return false;
  }
  if (filterURI) var filterURI = filterURI.toString().toLowerCase().space();
  if (extendedURI)
    var extendedURI = extendedURI.toString().toLowerCase().space();
  else extendedURI = filterURI;
  for (var i = 1; i <= menu.length - 1; i++) {
    var menuObject = menu[i].id.space().toLowerCase();
    var translation = menu[i].cat.space().toLowerCase();
    var description = menu[i].des.space().toLowerCase();
    if (menu[i].hash == filterURI) {
      filter.push(menu.indexOf(menu[i]));
      exact = i;
      match = i;
      break;
    } else if (menuObject == filterURI || id == extendedURI) {
      filter.push(menu.indexOf(menu[i]));
      exact = i;
      match = i;
      break;
    } else if (menuObject.match(filterURI) || menuObject.match(extendedURI))
      filter.push(menu.indexOf(menu[i]));
    else if (description.match(filterURI) || description.match(extendedURI))
      filter.push(menu.indexOf(menu[i]));
    else if (translation.match(filterURI) || translation.match(extendedURI))
      filter.push(menu.indexOf(menu[i]));
  }
  if (!match) match = filter[0];
  if (filter.length == 0)
    xmlRequestParsing("search", filterURI.toLowerCase(), 0, null);
  if (initPassthrough == false) {
    var main = document.getElementById("main");
    if (
      !document.body.contains(document.querySelector("#group")) &&
      !document.body.contains(document.querySelector(".result"))
    )
      main.innerHTML =
        "<div id='group'>" +
        "  <div class='result'></div>" +
        "</div>" +
        main.innerHTML;
    for (i = 0; i <= filter.length - 1; i++) writeFilterResponse(filter[i]);
  } else if (initPassthrough == true) {
    if (isNumeric(exact)) xmlRequestParsing(null, null, exact);
    else if (isNumeric(match) && filter.length == 1)
      xmlRequestParsing(null, null, match);
  }
  if (categoryBloat == true && match)
    populateCategoryGroup(menu[match].cat);
};

var writeFilterResponse = function (menuObject) {
  var main = document.querySelector("#main");
  var result = document.querySelector(".result");
  if (menu[menuObject].media == true)
    var media = "<div class='media' style='display:none'>Images</div>";
  else var media = "<div class='blank'></div>";
  result.innerHTML += filterBuild(
    menu[menuObject].id.match(/[^\/]+$/g),
    menu.indexOf(menu[menuObject]),
    menu[menuObject].img.image(),
    menu[menuObject].hash,
    menu[menuObject].des,
    media
  );
};

var guideImageAttributes = function (src) {
  var guide = document.querySelector("#guide");
  var newImg = new Image();
  newImg.setAttribute("src", src);
  newImg.onload = function () {
    guide.querySelector(".img").setAttribute("src", src);
    guide.querySelector(".sticky").style.display = "block";
    guide.querySelector(".checkmark").style.display = "block";
    if (document.querySelector("#main").clientWidth <= 426) {
      document.querySelector("#main").classList.add("guide");
      document.querySelector("#guide .sticky .header").style.position =
        "absolute";
      if (newImg.naturalWidth >= newImg.naturalHeight) {
        guide.querySelector(".img").style.maxHeight = "50vh";
        guide.querySelector(".image").style.width = "100vw";
        document.querySelector("#guide .wrap").style.maxWidth = "100vw";
      } else if (newImg.naturalHeight >= newImg.naturalWidth) {
        guide.querySelector(".img").style.maxWidth = "70vw";
        guide.querySelector(".img").style.maxHeight = "50vh";
        document.querySelector("#guide .wrap").style.maxWidth = "75vw";
      }
      document.querySelector("#guide .sticky .header").style.top =
        ~document.querySelector("#guide .img").style.height - "60";
    } else {
      document.querySelector("#main").classList.add("guide");
      guide.querySelector(".sticky").style.display = "block";
      guide.querySelector(".checkmark").style.display = "block";
      if (newImg.naturalWidth >= newImg.naturalHeight) {
        guide.querySelector(".img").style.maxHeight = "80vh";
        guide.querySelector(".img").style.maxWidth = "70vw";
      } else if (newImg.naturalHeight >= newImg.naturalWidth) {
        guide.querySelector(".img").style.maxWidth = "40vw";
        guide.querySelector(".img").style.maxHeight = "70vh";
      }
    }
    guide.style.display = "flex";
  };
};
