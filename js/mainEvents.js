window.onload = function () {
  let guest = document.querySelector(".guest");
  guest.setAttribute("placeholder", "Search Feeds");
  guest.style.caretColor = "#e4e4e4";
  guest.style.paddingLeft = "40px";
  guest.style.textAlign = "left";
  document.querySelector("#front .icon").classList.add("search");
  document.querySelector(".focus .guest").focus();
  quickFeedDisplay(quickFeeds);
  if (
    document.querySelector("#main").clientWidth <= 425 ||
    quickFeedsTranslations == true
  )
    quickFeedAsset(7);
  else if (quickFeedsTranslations == false) quickFeedAsset(8);
  else quickFeedAsset(7);
  visual();
  if (document.querySelector("#main").clientWidth <= 768) {
    onScreen = false;
    sideBarDisplay(false);
  } else {
    sideBarFirst = true;
    sideBarDisplay(onScreen);
  }
};
window.addEventListener(
  "resize",
  function (event) {
    if (document.querySelector("#main").clientWidth <= 768) {
      onScreen = false;
      sideBarFirst = true;
      sideBarDisplay(false);
    } else sideBarDisplay(onScreen);
  },
  true
);
document.addEventListener(
  "scroll",
  function (event) {
    if (event.target.id == "main") {
      if (
        document.querySelector("#main").scrollHeight -
          document.querySelector("#main").scrollTop -
          document.querySelector("#main").clientHeight <=
          350 &&
        reader == true &&
        httpRequest.status == 200
      ) {
        init();
        xmlRequestParsing(null, null, anyRandomMenuObject());
      }
    }
  },
  true
); //:before pseudo-elements not loaded in DOM
document.addEventListener(
  "ontouchmove",
  function (event) {
    if (event.target.id == "main") {
      if (
        document.querySelector("#main").scrollHeight -
          document.querySelector("#main").scrollTop -
          document.querySelector("#main").clientHeight <=
          450 &&
        reader == true &&
        httpRequest.status == 200
      ) {
        init();
        xmlRequestParsing(null, null, any());
      }
    }
    event.preventDefault();
  },
  false
); //:before pseudo-elements not loaded in DOM
document.addEventListener(
  "click",
  function (event) {
    if (
      event.target.classList.contains("fa-angle-up") ||
      event.target.classList.contains("link") ||
      event.target.classList.contains("show")
    ) {
      quickFeeds = quickFeeds != true;
      quickFeedDisplay(quickFeeds);
    }
    if (event.target.id == "home") {
      id = 0;
      document.querySelector("#top").style.display = "block";
      if (document.body.contains(document.querySelector("#feed")))
        document.querySelector("#feed").remove();
      if (document.body.contains(document.querySelector("#group")))
        document.querySelector("#group").remove();
      document.title = category.capitalize();
      populateCategoryGroup(category);
      if (expand == true) var groupType = "list";
      else var groupType = "blocks";
      displayExpand(expand);
      unloading();
    }
    if (
      event.target.classList.contains("picture") ||
      event.target.classList.contains("header") ||
      event.target.classList.contains("feed") ||
      event.target.classList.contains("post") ||
      event.target.classList.contains("site") ||
      event.target.classList.contains("cat") ||
      event.target.classList.contains("sel") ||
      event.target.id == "container" ||
      event.target.id == "search" ||
      event.target.id == "option" ||
      event.target.id == "visit" ||
      event.target.id == "group" ||
      event.target.id == "feed" ||
      event.target.id == "main" ||
      event.target.id == "hide" ||
      event.target.id == "page" ||
      event.target.id == "top" ||
      event.target.id == "arm" ||
      event.target.classList.contains("fa")
    ) {
      if (
        !document
          .querySelectorAll(".attribute")
          .forEach((a) => (a.style.display = "none"))
      ) {
        document
          .querySelectorAll(".attribute")
          .forEach((a) => (a.style.display = "none"));
        var attr = document.querySelectorAll(".fa-ellipsis-v");
        for (i = 0; i < attr.length; i++) {
          attr[i].classList.remove("fa-ellipsis-v");
          attr[i].classList.add("fa-ellipsis-h");
        }
      }
      if (document.querySelector("#match").style.display === "block") {
        document.querySelector("#input .icon").classList.remove("slide");
        document.querySelector("#match").style.display = "none";
        var view = document.querySelector("#input .view");
        view.setAttribute("placeholder", "");
        view.style.textAlign = "center";
        view.style.paddingLeft = "20px";
        view.value = "Search";
        view.blur();
      } else if (
        document.querySelector("#main #first").style.display === "block"
      ) {
        document.querySelector("#main #first").style.display = "none";
        document.querySelector(".focus .guest").blur();
      }
      event.stopPropagation();
    }
    if (event.target.classList.contains("fa-expand-alt")) {
      if (!document.body.contains(document.querySelector("#main #group")))
        populateCategoryGroup(category);
      document.querySelector("#visit").style.display = "none";
      topMenuBarDisplay(topBar);
      expand = expand != true;
      displayExpand(expand);
      if (expand == true) var groupType = "list";
      else {
        var groupType = "blocks";
        notifyOption(
          "Displaying " + category + " as " + groupType.capitalize()
        );
      }
    }
    if (
      event.target.classList.contains("description") ||
      event.target.classList.contains("populate") ||
      event.target.classList.contains("reload") ||
      event.target.classList.contains("display") ||
      event.target.classList.contains("title") ||
      event.target.classList.contains("media") ||
      event.target.classList.contains("hash")
    ) {
      if (document.getElementById("match").style.display === "block") {
        document.getElementById("match").style.display = "none";
        document.querySelector("#search .view").blur();
        return false;
      } else if (
        document.querySelector("#main #first").style.display === "block"
      ) {
        document.querySelector("#main #first").style.display = "none";
        document.querySelector(".focus .guest").blur();
        return false;
      }
      init();
      if (document.body.contains(document.querySelector("#feed")))
        document.querySelector("#feed").remove();
      if (document.body.contains(document.querySelector("#group")))
        document.querySelector("#group").remove();
      document.querySelector("#toggle").style.display = "none";
      document.querySelector("#visit").style.display = "none";
      xmlRequestParsing(
        null,
        null,
        event.target.closest(".populate").getAttribute("aria-item")
      );
    }
    if (
      event.target.classList.contains("filter") ||
      event.target.classList.contains("status") ||
      event.target.classList.contains("exit") ||
      event.target.classList.contains("ext") ||
      event.target.classList.contains("tag")
    ) {
      event.target.closest(".filter").getAttribute("aria-item").blank();
    }
    if (
      event.target.classList.contains("entity") ||
      event.target.classList.contains("query") ||
      event.target.classList.contains("asset")
    ) {
      init();
      document.querySelector("#toggle").style.display = "none";
      document.querySelector("#visit").style.display = "none";
      xmlRequestParsing(
        null,
        null,
        event.target.closest(".asset").getAttribute("aria-item")
      );
      topMenuBarDisplay(topBar);
    }
    if (
      event.target.classList.contains("checkmark__circle") ||
      event.target.classList.contains("checkmark__check") ||
      event.target.classList.contains("checkmark") ||
      event.target.classList.contains("blur")
    ) {
      document.querySelector("#main").classList.remove("guide");
      document.querySelector("#guide").style.display = "none";
      while (event.target.firstChild)
        event.target.removeChild(event.target.lastChild);
      onScreen = guideOnScreen
      if (document.querySelector('#main').clientWidth >= 426)
        sideBarDisplay(onScreen);
      topMenuBarDisplay(topBar);
    }
    if (event.target.classList.contains("bottom")) {
      init();
      document.title = category;
      if (location.href.match("\\?q=")) {
        var uri = location.search.split("?q=")[1].match(/[^&]+/g);
        if (location.href.match("\\+1"))
          var query = uri[0].replace(/\+1/g, "").space();
        else var query = uri[0].space();
        filterInputResponse(false, false, query, true);
      } else populateCategoryGroup(category);
      displayExpand(expand);
      unloading();
      id = 0;
    }
    if (event.target.classList.contains("more")) {
      event.target.parentNode.innerHTML = event.target.parentNode.getAttribute(
        "text"
      );
      event.target.style.display = "none";
      event.stopPropagation();
    }
    if (
      event.target.classList.contains("classic") ||
      event.target.classList.contains("item") ||
      event.target.classList.contains("wrap") ||
      event.target.classList.contains("pub") ||
      event.target.classList.contains("ago")
    ) {
      event.target.closest(".item").getAttribute("ext").blank();
    }
    if (
      event.target.classList.contains("combine") ||
      event.target.classList.contains("suggest") ||
      event.target.classList.contains("circle") ||
      event.target.classList.contains("random") ||
      event.target.classList.contains("bold")
    ) {
      init();
      xmlRequestParsing(
        null,
        null,
        event.target.closest(".suggest").getAttribute("aria-item")
      );
    }
    if (event.target.classList.contains("asset")) {
      init();
      xmlRequestParsing(null, null, event.target.getAttribute("aria-item"));
    }
    if (
      event.target.classList.contains("flip-front") ||
      event.target.classList.contains("flip-back") ||
      event.target.classList.contains("front") ||
      event.target.classList.contains("next") ||
      event.target.classList.contains("back")
    ) {
      init();
      if (document.body.contains(document.querySelector("#feed")))
        document.querySelector("#feed").remove();
      xmlRequestParsing(
        null,
        null,
        event.target.closest(".btn").getAttribute("aria-item")
      );
    }
    if (event.target.classList.contains("img")) {
      if (tap == 0) {
        // set first click
        tap = new Date().getTime();
        setTimeout(function () {
          if (
            new Date().getTime() - tap >= 350 &&
            new Date().getTime() - tap < 400
          )
            if (
              !event.target.classList.contains("guide") &&
              event.target.classList.contains("default")
            ) {
              let sticky = [];
              sticky.push({
                courtesy: event.target.closest(".item").querySelector(".header")
                  .innerHTML,
                element: event.target.closest(".item").getAttribute("item"),
                image: menu[
                  event.target.closest(".item").getAttribute("item")
                ].img.image(),
                title: event.target
                  .closest(".item")
                  .querySelector(".pub")
                  .getAttribute("text"),
                share: event.target.closest(".item").querySelector(".share")
                  .value,
                dst: event.target
                  .closest(".item")
                  .querySelector(".ago:last-child").innerHTML,
                src: event.target.closest(".item").querySelector(".source")
                  .value,
                re: event.target.closest(".item").getAttribute("ext"),
                id: event.target.closest(".item").getAttribute("item"),
              });
              guideDisplay(sticky);
            } else if (event.target.classList.contains("guide"))
              event.target.closest(".item").getAttribute("ext").blank();
            else if (!event.target.classList.contains("default"))
              event.target.closest(".item").getAttribute("ext").blank();
            else if (category != "Social")
              event.target.closest(".item").getAttribute("ext").blank();
          tap = 0;
        }, 350);
      } else {
        // compare first click to this click and see if they occurred within double click threshold
        if (new Date().getTime() - tap < 350) {
          // double click occurred
          event.target
            .closest(".image")
            .querySelector(".fa-heart").style.animation =
            "scale .7s ease-in-out .1s both";
          event.target
            .closest(".image")
            .querySelector(".fa-heart").style.display = "block";
          event.target
            .closest(".image")
            .querySelector(".fa-heart").style.zIndex = "1";
          setTimeout(function () {
            event.target
              .closest(".image")
              .querySelector(".fa-heart").style.animation = "none";
            event.target
              .closest(".image")
              .querySelector(".fa-heart").style.display = "none";
            event.target
              .closest(".image")
              .querySelector(".fa-heart").style.zIndex = "0";
          }, 1500);
          visual();
          tap = 0;
        }
      }
      event.stopPropagation();
      visual();
    }
    if (
      event.target.classList.contains("fa-ellipsis-h") ||
      event.target.classList.contains("fa-ellipsis-v") ||
      event.target.classList.contains("copy")
    ) {
      if (event.target.closest(".copy").querySelector(".fa-ellipsis-v")) {
        event.target
          .closest(".copy")
          .querySelector(".fa-ellipsis-v")
          .classList.add("fa-ellipsis-h");
        event.target
          .closest(".copy")
          .querySelector(".fa-ellipsis-h")
          .classList.remove("fa-ellipsis-v");
        event.target
          .closest(".copy")
          .querySelector(".attribute").style.display = "none";
      } else if (
        event.target.closest(".copy").querySelector(".fa-ellipsis-h")
      ) {
        event.target
          .closest(".copy")
          .querySelector(".fa-ellipsis-h")
          .classList.add("fa-ellipsis-v");
        event.target
          .closest(".copy")
          .querySelector(".fa-ellipsis-v")
          .classList.remove("fa-ellipsis-h");
        event.target
          .closest(".copy")
          .querySelector(".attribute").style.display = "block";
      }
      event.stopPropagation();
    }
    if (
      event.target.classList.contains("fa-at") ||
      event.target.classList.contains("site")
    ) {
      event.target.closest(".item").querySelector(".url").select();
      document.execCommand("copy");
      event.stopPropagation();
      notifyOption("URL Copied to Clipboard.");
    }
    if (
      event.target.classList.contains("fa-share") ||
      event.target.classList.contains("post")
    ) {
      if (location.href.match("\\+1"))
        event.target.closest(".item").querySelector(".share").value =
          event.target.closest(".item").querySelector(".share").value + "+1";
      else if (!location.href.match("\\+1"))
        event.target
          .closest(".item")
          .querySelector(".share").value = event.target
          .closest(".item")
          .querySelector(".share")
          .value.replace(/\+1/g, "");
      event.target.closest(".item").querySelector(".share").select();
      document.execCommand("copy");
      notifyOption("Post Copied to Clipboard.");
      event.stopPropagation();
    }
    if (
      event.target.classList.contains("fa-camera") ||
      event.target.classList.contains("picture")
    ) {
      event.target.closest(".item").querySelector(".source").select();
      document.execCommand("copy");
      notifyOption("Source Copied to Clipboard.");
    }
    if (
      event.target.classList.contains("quickTranslation") ||
      event.target.classList.contains("translation")
    ) {
      if (document.getElementById("match").style.display === "block") {
        document.getElementById("match").style.display = "none";
        document.querySelector("#search .view").blur();
      } else if (
        document.querySelector("#main #first").style.display === "block"
      ) {
        document.querySelector("#main #first").style.display = "none";
        document.querySelector(".focus .guest").blur();
      }
      id = 0;
      location.pathname.state();
      document.querySelector("#toggle").style.display = "none";
      document.querySelector("#visit").style.display = "none";
      category = event.target.closest(".translation").getAttribute("aria-item");
      populateCategoryGroup(
        event.target.closest(".translation").getAttribute("aria-item")
      );
      topMenuBarDisplay(topBar);
    }
    if (
      event.target.classList.contains("fa-plus") ||
      event.target.classList.contains("right")
    ) {
      quickFeedAsset(6);
      let leftPos = event.target.closest(".quick").querySelector(".feed")
        .scrollLeft;
      event.target.closest(".quick").querySelector(".feed").scrollLeft =
        leftPos +
        event.target.closest(".quick").querySelector(".feed").clientWidth;
      if (event.target.closest(".quick").querySelector(".feed").scrollLeft >= 0)
        document.querySelector(".left").style.display = "block";
    }
    if (
      event.target.classList.contains("fa-minus") ||
      event.target.classList.contains("left")
    ) {
      let leftPos = event.target.closest(".quick").querySelector(".feed")
        .scrollLeft;
      event.target.closest(".quick").querySelector(".feed").scrollLeft =
        leftPos -
        event.target.closest(".quick").querySelector(".feed").clientWidth;
      if (
        event.target.closest(".quick").querySelector(".feed").scrollLeft -
          event.target.closest(".quick").querySelector(".feed").clientWidth <=
        0
      )
        document.querySelector(".left").style.display = "none";
    }
    event.preventDefault();
  },
  false
);
